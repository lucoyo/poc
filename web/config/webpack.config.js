/** @returns {import('webpack').Configuration} Webpack Configuration */
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

var webpack = require('webpack');

module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  config.module.rules.push(
    {
      resolve: {
        fallback: {
          "process": false,
          "crypto": require.resolve("crypto-browserify"),
          "stream": require.resolve("stream-browserify"),
        }
      }
    }
  );

  config.plugins.push(
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  );

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  return config
}
