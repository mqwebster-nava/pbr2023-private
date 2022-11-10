import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SectionIntro from './SectionIntro';

export default {
  title: 'Report Blocks/PBR 2021/Section Intro',
  component: SectionIntro,
  args: {
    section: 'any' as unknown as any,
    i: 'any' as unknown as any
  },
} as ComponentMeta<typeof SectionIntro>;

const Template: ComponentStory<typeof SectionIntro> = (args) => (
  <SectionIntro {...args} />
);

export const Default = Template.bind({});
Default.args = {};
