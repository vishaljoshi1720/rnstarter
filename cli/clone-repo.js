const { consola } = require('consola');
const { runCommand } = require('./utils.js');

const TEMPLATE_REPO = 'https://github.com/vishaljoshi1720/rnstarter.git';
const TEMPLATE_BRANCH = 'master';

/**
 * Clone template from GitHub (master).
 * CLI package is on npm; template source is always this GitHub repo.
 */
const cloneTemplate = async (projectName) => {
  consola.info(`Using RN Starter from ${TEMPLATE_BRANCH}`);

  const cloneStarter = `git clone -b ${TEMPLATE_BRANCH} --depth=1 ${TEMPLATE_REPO} ${projectName}`;
  await runCommand(cloneStarter, {
    loading: 'Extracting the starter template...',
    success: 'Starter extracted successfully',
    error: 'Failed to download and extract template',
  });
};

module.exports = {
  cloneTemplate,
};
