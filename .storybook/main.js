const custom = require('../webpack.config.js');

module.exports = {
  "stories": ["../Stories/**/*.stories.mdx", "../Stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-postcss","storybook-addon-designs/register","@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom().module.rules }, resolve: { ...custom().resolve } };
  },
};