import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportHero2020 from './ReportHero2020';

export default {
  title: 'Report Blocks/PBR 2020/Report Hero 2020',
  component: ReportHero2020,
  args: {

  },
} as ComponentMeta<typeof ReportHero2020>;

const Template: ComponentStory<typeof ReportHero2020> = (args) => (
  <ReportHero2020 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
