const path = require("path");

module.exports = {
  stories: [
    "../Intro.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../styles/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
  ],
  staticDirs: ['../public'],
  features: {
    postcss: false,
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, ".."));

    return config;
  },
  // webpackFinal is modified by nextjs/storybook-plugin to include node-modules and nextjs/babel
  typescript: {
    reactDocgen: "react-docgen",
  },
};
