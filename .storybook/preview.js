// .storybook/preview.js
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: props => <img {...props} />
  //value: (props) => <OriginalNextImage {...props} unoptimized />,
});


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Design System','Styles', 'Atoms','Wrappers','Blocks', 'Templates'],
    },  
  },
};

