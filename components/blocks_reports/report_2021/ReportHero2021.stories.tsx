import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportHero2021 from './ReportHero2021';

export default {
  title: 'Report Blocks/PBR 2021/Report Hero 2021',
  component: ReportHero2021,
  args: {

  },
} as ComponentMeta<typeof ReportHero2021>;

const Template: ComponentStory<typeof ReportHero2021> = (args) => (
  <ReportHero2021 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
