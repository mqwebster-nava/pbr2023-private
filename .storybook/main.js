const path = require("path");

module.exports = {
  stories: [
    "../Intro.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../styles/*.stories.@(js|jsx|ts|tsx)",
  ],
  refs: {
    "chromatic-published-Storybook": {
      // The title of your Storybook
      title: "Design System",
      // The url provided by Chromatic when it was published
      url: "https://navapbc.chromatic.com",
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-controls"
  ],
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
