// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  LargeHero, {LargeHeroInterface } from './LargeHero';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components / Large Hero',
  component: LargeHero,
} as ComponentMeta<typeof LargeHero>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LargeHero> = (args) => <LargeHero {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: "Careers",
    subtitle: "Come help us build the services of a better future for millions of people.",
    colorTheme: "purple",
    isStorybook:true
};