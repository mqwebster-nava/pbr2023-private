import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportHero2018  from './ReportHero2018';

export default {
  title: 'Report Blocks/PBR 2018-2019/Report Hero 2018',
  component: ReportHero2018,
  args: {

  },
} as ComponentMeta<typeof ReportHero2018>;

const Template: ComponentStory<typeof ReportHero2018> = (args) => (
  <ReportHero2018 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
