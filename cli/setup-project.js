const { execShellCommand, runCommand } = require('./utils.js');
const { consola } = require('consola');
const fs = require('fs-extra');
const path = require('path');
const { stripTests } = require('./strip-tests.js');

const initGit = async (projectName) => {
  await execShellCommand(`cd ${projectName} && git init && cd ..`);
};

const installDeps = async (projectName) => {
  await runCommand(`cd ${projectName} && pnpm install`, {
    loading: 'Installing  project dependencies',
    success: 'Dependencies installed',
    error: 'Failed to install dependencies, Make sure you have pnpm installed',
  });
};

// remove unnecessary files, such us .git, ios, android, docs, cli, LICENSE
const removeFiles = async (projectName) => {
  const FILES_TO_REMOVE = [
    '.git',
    'README.md',
    'ios',
    'android',
    'docs',
    'cli',
    'LICENSE',
  ];

  FILES_TO_REMOVE.forEach((file) => {
    fs.removeSync(path.join(process.cwd(), `${projectName}/${file}`));
  });
};

// Update package.json infos, name and  set version to 0.0.1 + add initial version to osMetadata
const updatePackageInfos = async (projectName) => {
  const packageJsonPath = path.join(
    process.cwd(),
    `${projectName}/package.json`,
  );
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.osMetadata = { initVersion: packageJson.version };
  packageJson.version = '0.0.1';
  packageJson.name = projectName?.toLowerCase();
  packageJson.repository = {
    type: 'git',
    url: 'git+https://github.com/user/repo-name.git',
  };
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
};

const updateProjectConfig = async (projectName) => {
  const configPath = path.join(process.cwd(), `${projectName}/env.ts`);
  const contents = fs.readFileSync(configPath, {
    encoding: 'utf-8',
  });
  const replaced = contents
    .replace(/RN Starter/gi, projectName)
    .replace(/com\.rnstarter/gi, `com.${projectName.toLowerCase()}`);

  fs.writeFileSync(configPath, replaced);

  const appConfigPath = path.join(process.cwd(), `${projectName}/app.config.ts`);
  const appConfig = fs.readFileSync(appConfigPath, { encoding: 'utf-8' });
  fs.writeFileSync(
    appConfigPath,
    appConfig.replace(/vishaljoshi017/gi, 'expo-owner'),
  );

  // Local env for the new app (gitignored via .env.*)
  const envExamplePath = path.join(process.cwd(), `${projectName}/.env.example`);
  const envLocalPath = path.join(process.cwd(), `${projectName}/.env.local`);
  if (fs.existsSync(envExamplePath) && !fs.existsSync(envLocalPath)) {
    fs.copySync(envExamplePath, envLocalPath);
  }

  const readmeFilePath = path.join(
    process.cwd(),
    `${projectName}/README-project.md`,
  );
  fs.renameSync(
    readmeFilePath,
    path.join(process.cwd(), `${projectName}/README.md`),
  );
};

const setupProject = async (projectName, { includeTests = true } = {}) => {
  consola.start(`Clean up and setup your project 🧹`);
  try {
    removeFiles(projectName);
    if (!includeTests) {
      consola.info('Removing test setup…');
      stripTests(projectName);
    }
    await initGit(projectName);
    updatePackageInfos(projectName);
    updateProjectConfig(projectName);
    consola.success(`Clean up and setup your project 🧹`);
  }
  catch (error) {
    consola.error(`Failed to clean up project folder`, error);
    process.exit(1);
  }
};

module.exports = {
  setupProject,
  installDeps,
};
