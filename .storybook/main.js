const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../Storybook/**/*.storie.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-postcss", 
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  webpackFinal: async config => {
    return { ...config,
      module: { ...config.module,
        rules: custom().module.rules
      },
      resolve: { ...custom().resolve
      }
    };
  },
  core: {
    builder: "webpack5"
  }
};