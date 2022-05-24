// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ImageGallery from './ImageGallery';
export default {
  title: 'Blocks /  CTA Block',
  component: ImageGallery,
} as ComponentMeta<typeof ImageGallery>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ImageGallery> = (args) => <ImageGallery {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  "__typename": "SectionImageGallery",
  "id": "gallery",
   "image": {
    "sys": {
        "id": "25rM4zPs2oPwiw4gzk8vwh"
    },
    "url": "https://images.ctfassets.net/t2ekr6eg3fr3/25rM4zPs2oPwiw4gzk8vwh/61e5764a5367aa596a2fecf729c8cb5d/Image.png",
    "width": 478,
    "height": 495,
    "title": "FILLER - Careers Repeater",
    "description": ""
    }
};
