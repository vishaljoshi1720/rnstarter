/**
 * SVGR config for Metro (react-native-svg-transformer).
 * Without this, the transformer ignores project `svgo.config.js`
 * and uses its own hardcoded SVGO defaults.
 *
 * @see https://github.com/gregberge/svgr
 */
module.exports = {
  native: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  svgoConfig: require('./svgo.config.js'),
};
