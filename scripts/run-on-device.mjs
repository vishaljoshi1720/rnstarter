#!/usr/bin/env node
/**
 * Interactive device picker for `pnpm ios:device` / `pnpm android:device`.
 * Lists available simulators/emulators/physical devices, then runs Expo.
 */
import { spawn, execSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const platform = process.argv[2];

if (platform !== 'ios' && platform !== 'android') {
  console.error('Usage: node scripts/run-on-device.mjs <ios|android>');
  process.exit(1);
}

function runCapture(command) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  }
  catch {
    return '';
  }
}

function listIosDevices() {
  const devices = [];

  // Simulators
  try {
    const raw = runCapture('xcrun simctl list devices available -j');
    const json = JSON.parse(raw);
    for (const [runtime, list] of Object.entries(json.devices ?? {})) {
      if (!Array.isArray(list))
        continue;
      const runtimeLabel = runtime.replace(/^com\.apple\.CoreSimulator\.SimRuntime\./, '');
      for (const device of list) {
        if (!device.isAvailable)
          continue;
        devices.push({
          id: device.udid,
          label: `${device.name} (${runtimeLabel}) [simulator]`,
          target: device.udid,
        });
      }
    }
  }
  catch {
    // ignore parse errors
  }

  // Physical / connected (best-effort)
  const trace = runCapture('xcrun xctrace list devices 2>/dev/null');
  for (const line of trace.split('\n')) {
    const match = line.match(/^(.+?)\s+\(([0-9.]+)\)\s+\(([A-F0-9-]+)\)$/i);
    if (!match)
      continue;
    const [, name, version, udid] = match;
    if (devices.some(d => d.id === udid))
      continue;
    // Skip simulators already listed via simctl (often appear here too)
    if (/Simulator/i.test(name))
      continue;
    devices.push({
      id: udid,
      label: `${name.trim()} (iOS ${version}) [device]`,
      target: udid,
    });
  }

  return devices;
}

function listAndroidDevices() {
  const devices = [];
  const raw = runCapture('adb devices -l');
  for (const line of raw.split('\n').slice(1)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('*'))
      continue;
    const parts = trimmed.split(/\s+/);
    const id = parts[0];
    const state = parts[1];
    if (state !== 'device')
      continue;
    const model = trimmed.match(/model:(\S+)/)?.[1] ?? id;
    const product = trimmed.match(/product:(\S+)/)?.[1];
    const kind = id.includes('emulator') ? 'emulator' : 'device';
    devices.push({
      id,
      label: `${model}${product ? ` (${product})` : ''} [${kind}] — ${id}`,
      target: id,
    });
  }
  return devices;
}

async function promptChoice(devices) {
  console.log(`\nAvailable ${platform} targets:\n`);
  devices.forEach((device, index) => {
    console.log(`  ${index + 1}. ${device.label}`);
  });
  console.log('');

  const rl = createInterface({ input, output });
  try {
    while (true) {
      const answer = await rl.question(
        `Install on which device? (1-${devices.length}): `,
      );
      const index = Number.parseInt(answer.trim(), 10) - 1;
      if (Number.isInteger(index) && index >= 0 && index < devices.length) {
        return devices[index];
      }
      console.log('Invalid choice. Try again.');
    }
  }
  finally {
    rl.close();
  }
}

async function main() {
  const devices = platform === 'ios' ? listIosDevices() : listAndroidDevices();

  if (devices.length === 0) {
    console.error(
      platform === 'ios'
        ? 'No iOS simulators/devices found. Open Simulator or plug in a device, then retry.'
        : 'No Android devices found. Start an emulator or enable USB debugging, then retry.',
    );
    process.exit(1);
  }

  const selected = devices.length === 1
    ? (console.log(`\nUsing only available target: ${devices[0].label}`), devices[0])
    : await promptChoice(devices);

  console.log(`\n→ Building & installing on: ${selected.label}\n`);

  const args = [
    'expo',
    'run:' + platform,
    '--device',
    selected.target,
  ];

  const child = spawn('pnpm', ['exec', ...args], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  child.on('exit', (code) => {
    process.exit(code ?? 1);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
