#!/usr/bin/env node

const { consola } = require('consola');
const { showMoreDetails } = require('./utils.js');
const { cloneTemplate } = require('./clone-repo.js');
const { setupProject, installDeps } = require('./setup-project.js');

function printUsage() {
  consola.info(`Usage:
  npx create-rnstarter-app@latest <project-name> [--with-tests|--no-tests]

Flags:
  --with-tests   Keep Jest + Maestro test setup (default if prompted Yes)
  --no-tests     Strip unit/e2e tests, Jest, Maestro, and related deps
`);
}

function parseArgs(argv) {
  const args = argv.slice(2);
  let projectName;
  let withTests;

  for (const arg of args) {
    if (arg === '--with-tests') {
      withTests = true;
    }
    else if (arg === '--no-tests') {
      withTests = false;
    }
    else if (arg === '--help' || arg === '-h') {
      return { help: true };
    }
    else if (arg.startsWith('-')) {
      consola.error(`Unknown flag: ${arg}`);
      printUsage();
      process.exit(1);
    }
    else if (!projectName) {
      projectName = arg;
    }
  }

  return { projectName, withTests };
}

async function resolveIncludeTests(withTestsFlag) {
  if (typeof withTestsFlag === 'boolean') {
    return withTestsFlag;
  }

  return await consola.prompt('Include Jest + Maestro test setup?', {
    type: 'confirm',
    initial: true,
  });
}

const createApp = async () => {
  consola.box('RN Starter\nReact Native / Expo Kickstart 🚀');

  const { projectName, withTests, help } = parseArgs(process.argv);

  if (help) {
    printUsage();
    process.exit(0);
  }

  if (!projectName) {
    consola.error(
      'Please provide a name: `npx create-rnstarter-app@latest <project-name>`',
    );
    printUsage();
    process.exit(1);
  }

  const includeTests = await resolveIncludeTests(withTests);
  consola.info(
    includeTests
      ? 'Test setup: enabled'
      : 'Test setup: skipped (Jest / Maestro / test files will be removed)',
  );

  await cloneTemplate(projectName);
  await setupProject(projectName, { includeTests });
  await installDeps(projectName);
  showMoreDetails(projectName, { includeTests });
};

createApp();
