const fs = require('fs-extra');
const path = require('path');

const TEST_ROOT_PATHS = [
  'jest.config.js',
  'jest-setup.ts',
  '.maestro',
  '.github/workflows/test.yml',
  '.github/workflows/e2e-android.yml',
  '.github/workflows/e2e-android-maestro.yml',
  '.github/workflows/e2e-android-eas-build.yml',
];

const TEST_DEV_DEPS = [
  '@testing-library/react-native',
  '@types/jest',
  'eslint-plugin-testing-library',
  'jest',
  'jest-expo',
  'jest-junit',
];

const TEST_SCRIPTS = [
  'test',
  'test:ci',
  'test:watch',
  'install-maestro',
  'e2e-test',
];

const isTestFile = (fileName) =>
  /\.(test|spec)\.[jt]sx?$/.test(fileName);

/**
 * Recursively delete __tests__ folders and *.test|spec.* files.
 */
function removeTestFilesRecursive(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === '__tests__' || entry.name === '__mocks__') {
        fs.removeSync(fullPath);
        continue;
      }
      // Skip heavy / irrelevant trees
      if (['node_modules', '.git', 'docs', 'cli', 'android', 'ios'].includes(entry.name)) {
        continue;
      }
      removeTestFilesRecursive(fullPath);
      continue;
    }

    if (isTestFile(entry.name)) {
      fs.removeSync(fullPath);
    }
  }
}

function stripPackageJsonTests(projectRoot) {
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const packageJson = fs.readJsonSync(packageJsonPath);

  for (const script of TEST_SCRIPTS) {
    delete packageJson.scripts?.[script];
  }

  if (packageJson.scripts?.['check-all']) {
    packageJson.scripts['check-all'] = packageJson.scripts['check-all']
      .replace(/\s*&&\s*pnpm run test\b/, '')
      .replace(/\s*&&\s*npm run test\b/, '');
  }

  for (const dep of TEST_DEV_DEPS) {
    delete packageJson.devDependencies?.[dep];
  }

  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
}

/**
 * Remove testing-library import + config block so eslint still works
 * after the package is removed.
 */
function stripEslintTestingLibrary(projectRoot) {
  const eslintPath = path.join(projectRoot, 'eslint.config.mjs');
  if (!fs.existsSync(eslintPath)) {
    return;
  }

  let contents = fs.readFileSync(eslintPath, 'utf8');
  contents = contents.replace(
    /import testingLibrary from 'eslint-plugin-testing-library';\n?/g,
    '',
  );

  const marker = '// Testing Library rules';
  const markerIndex = contents.indexOf(marker);
  if (markerIndex !== -1) {
    const closingIndex = contents.lastIndexOf('\n);');
    if (closingIndex > markerIndex) {
      // Drop from the comment through the preceding comma/block, keep `);`
      let start = markerIndex;
      // Include leading newline / comma from previous block
      while (start > 0 && contents[start - 1] !== '\n') {
        start -= 1;
      }
      if (start > 0 && contents[start - 1] === '\n') {
        start -= 1;
      }
      contents = `${contents.slice(0, start)}\n${contents.slice(closingIndex + 1)}`;
    }
  }

  fs.writeFileSync(eslintPath, contents);
}

/**
 * Remove Jest / Maestro / unit tests / related CI + deps from a scaffolded app.
 */
function stripTests(projectName) {
  const projectRoot = path.join(process.cwd(), projectName);

  for (const relativePath of TEST_ROOT_PATHS) {
    fs.removeSync(path.join(projectRoot, relativePath));
  }

  removeTestFilesRecursive(path.join(projectRoot, 'src'));
  stripPackageJsonTests(projectRoot);
  stripEslintTestingLibrary(projectRoot);
}

module.exports = {
  stripTests,
};
