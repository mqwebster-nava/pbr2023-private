
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  SectionHeader, {SectionHeaderInterface } from './SectionHeader';

export default {
  title: 'Blocks /  Section Header',
  component: SectionHeader,
  argTypes: {
    variant: {
      options: ['default', 'gold', 'navy', 'sage'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SectionHeader>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SectionHeader> = (args) => <SectionHeader id={"s"}{...args} />;

export const Primary = Template.bind({});

Primary.args = {
  "title": "Work on projects with a positive impact",
  "subtitle": "Nava positively transforms the technology that helps people access public benefits. As a client services company, are clients are states and federal agencies. We help them improve how people apply for benefits, navigate their healthcare, and much more.",
  "variant": "default"
  
};