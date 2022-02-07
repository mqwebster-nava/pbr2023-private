// .storybook/preview.js
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Styles', 'Components', ['Atoms', 'Rows'], 'Pages', 'WIP'],
    },  
  },
};

