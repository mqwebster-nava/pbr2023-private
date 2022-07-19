// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ImageGallery from './ImageGallery';
export default {
  title: 'Blocks /  Image Gallery',
  component: ImageGallery,
  argTypes: {
    colorTheme: {
      options: ['default', 'navy'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ImageGallery>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ImageGallery> = (args) => <ImageGallery {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    id: '1G0XatnkkyIu35omQ6JXtf',
    __typename: 'ImageGallery',
    colorTheme: 'navy',
    layout: "Single image",
    images: [{
      sys: { id: 'mq5nTWUTQNVx3K2Mllmto' },
      url: 'https://images.ctfassets.net/t2ekr6eg3fr3/mq5nTWUTQNVx3K2Mllmto/39fd7054e582ebd267ce790a525d290e/Values_gallery_V1.png',
      width: 2220,
      height: 888,
      title: 'Values gallery V1',
      description: ''
    }],
    
  
};
