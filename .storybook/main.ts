import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const sbConfig: StorybookConfig = {
  stories: [
    "../Intro.stories.mdx",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../styles/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: [
    "../public",
  ],
  refs: {
    "chromatic-published-Storybook": {
      // The title of your Storybook
      title: "Design System",
      // The url provided by Chromatic when it was published
      url: "https://navapbc.chromatic.com",
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve?.modules?.push(path.resolve(__dirname, ".."));
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-controls",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default sbConfig;

