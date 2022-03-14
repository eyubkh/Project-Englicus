const path = require('path')

module.exports = {
  "stories": ["../Stories/**/*.stories.mdx", "../Stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["storybook-addon-designs/register","@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, "../Web/src/Component/"),
      '@tokens': path.resolve(__dirname, '../Tokens/build/js/_variables.js')
    };

    return config;
  }
}