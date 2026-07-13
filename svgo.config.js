/**
 * Production SVGO config for reusable React Native SVG icons.
 * Keeps viewBox (needed for scaling) while stripping noise.
 */
module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox so icons scale correctly
          removeViewBox: false,
        },
      },
    },
    // Drop width/height so size is controlled by the Icon component
    'removeDimensions',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'removeTitle',
    'removeDesc',
    'cleanupIds',
    'convertColors',
    'convertPathData',
    'mergePaths',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(data-name|class|style)',
      },
    },
  ],
};
