

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ContentBlockLinkToPage  from './ContentBlockLinkToPage';
import careersImg1 from "../../../public/images/careers-presentation-img.png";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks /  Content Block Link To Page',
  component: ContentBlockLinkToPage,
  argTypes: {
    type: {
      options: ['default', 'right repeater', 'left repeater'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ContentBlockLinkToPage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentBlockLinkToPage> = (args) => <ContentBlockLinkToPage id={"test"} {...args} />;

export const Primary = Template.bind({});
export const LeftRepeater = Template.bind({});
export const RightRepeater = Template.bind({});


Primary.args = {
    title:"Nava is a public benefit corporation",
    buttonText:"Learn about our mission",
    buttonPath:"/mission",
    type:"default",
    body: "This means we’re accountable to our social mission: to make it easier for people to access social safety net programs.",
};

LeftRepeater.args = {
    "title": "Nava is a public benefit corporation",
    "buttonText": "Learn about our mission",
    "buttonPath": "/mission",
    "type": "left repeater",
    "body": "This means we’re accountable to our social mission: to make it easier for people to access social safety net programs.",
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



RightRepeater.args = {
    "title": "Our values guide how we serve the public",
    "buttonText": "See our values",
    "buttonPath": "/mission/values",
    "type": "right repeater",
    "body": "Every day we make countless decisions that inform our ability to improve how government serves everyone, and we don’t take that lightly.",
    "image": {
        "sys": {
            "id": "7cPDT7gCq60whFZacUFPEa"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/7cPDT7gCq60whFZacUFPEa/61655929593d597fe7da19898c1bf0b0/career_filler.png",
        "width": 478,
        "height": 495,
        "title": "FILLER Career Repeater 2",
        "description": ""
    }
    
};
