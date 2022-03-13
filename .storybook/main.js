module.exports = {
  "stories": ["../Stories/**/*.stories.mdx", "../Stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["storybook-addon-designs/register","@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
}