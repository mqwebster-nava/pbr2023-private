// .storybook/preview.js
import * as NextImage from "next/image";

//const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: props => <img {...props} />
  //value: (props) => <OriginalNextImage {...props} unoptimized />,
});


export const parameters = {
  //actions: { argTypesRegex: "^on[A-Z].*" },
 // controls: { expanded: true },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Design System','Styles', 'Wrappers','Atoms','Blocks', 'Templates'],
    },  
  },
};

