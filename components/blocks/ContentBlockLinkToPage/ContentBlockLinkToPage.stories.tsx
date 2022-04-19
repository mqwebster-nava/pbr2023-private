

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
} as ComponentMeta<typeof ContentBlockLinkToPage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentBlockLinkToPage> = (args) => <ContentBlockLinkToPage {...args} />;

export const Primary = Template.bind({});
export const LeftRepeater = Template.bind({});
export const RightRepeater = Template.bind({});


Primary.args = {
    title:"Nava is a public benefit corporation",
    buttonText:"Learn about our mission",
    buttonPath:"/mission",
    type:"default",
    image:careersImg1,
    isStorybook:true,
    children: "This means we’re accountable to our social mission: to make it easier for people to access social safety net programs.",
};
LeftRepeater.args = {
    title:"Nava is a public benefit corporation",
    buttonText:"Learn about our mission",
    buttonPath:"/mission",
    type:"left repeater",
    image:careersImg1,
    isStorybook:true,
    children: "This means we’re accountable to our social mission: to make it easier for people to access social safety net programs.",
};
RightRepeater.args = {
    title:"Nava is a public benefit corporation",
    buttonText:"Learn about our mission",
    buttonPath:"/mission",
    type:"right repeater",
    image:careersImg1,
    isStorybook:true,
    children: "This means we’re accountable to our social mission: to make it easier for people to access social safety net programs.",
};
