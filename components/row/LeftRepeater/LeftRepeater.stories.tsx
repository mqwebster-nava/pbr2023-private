
// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LeftRepeater, {LeftRepeaterInterface } from './LeftRepeater';
import careersImg1 from "../../../public/images/careers-presentation-img.png";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components / LeftRepeater',
  component: LeftRepeater,
} as ComponentMeta<typeof LeftRepeater>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LeftRepeater> = (args) => <LeftRepeater {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title:"Nava is a public benefit corporation",
    buttonText:"Learn about our mission",
    buttonPath:"/mission",
    image:careersImg1,
    colorTheme:"sage",
    isStorybook:true,
    children: "This means we’re accountable to our social mission: to make it easier for people to access social safety net programs.",
};