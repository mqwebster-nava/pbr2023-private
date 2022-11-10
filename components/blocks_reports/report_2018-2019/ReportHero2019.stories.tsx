import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  ReportHero2019  from './ReportHero2019';

export default {
  title: 'Report Blocks/PBR 2018-2019/Report Hero 2019',
  component: ReportHero2019,
  args: {

  },
} as ComponentMeta<typeof ReportHero2019>;

const Template: ComponentStory<typeof ReportHero2019> = (args) => (
  <ReportHero2019 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
