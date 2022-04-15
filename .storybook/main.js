const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-docs',
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        docs: false,
      },
    },
  ],
  staticDirs: [
    '../src/static'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    }, {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });
    return config;
  },
  framework: "@storybook/vue"
}
