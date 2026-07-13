#!/usr/bin/env node
const { exec } = require('child_process');
const { consola } = require('consola');

const execShellCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

const runCommand = async (
  command,
  { loading = 'loading ....', success = 'success', error = 'error' },
) => {
  consola.start(loading);
  try {
    await execShellCommand(command);
    consola.success(success);
  }
  catch (err) {
    consola.error(`Failed to execute ${command}`, err);
    process.exit(1);
  }
};

const showMoreDetails = (projectName, { includeTests = true } = {}) => {
  const testHint = includeTests
    ? '   Tests   :  `pnpm test`\n'
    : '   Tests   :  skipped (--no-tests)\n';

  consola.box(
    'Your project is ready to go!\n\n',
    '🚀 Get started:\n\n',
    `   cd ${projectName}\n`,
    '   iOS     :  pnpm ios\n',
    '   Android :  pnpm android\n',
    testHint,
    '\n📦 Template: https://github.com/vishaljoshi1720/rnstarter',
  );
};

module.exports = {
  runCommand,
  showMoreDetails,
  execShellCommand,
};
