import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  ReportIntroduction2021  from './ReportIntroduction2021';

export default {
  title: 'Report Blocks/PBR 2021/Report Introduction 2021',
  component: ReportIntroduction2021,
  args: {
    title: 'string',
    anchor: 'string',
    richBody: 'any' as unknown as any,
    signatures: 'any' as unknown as any,
    variant: 'string',
    reportYear: "2021"
  },
} as ComponentMeta<typeof ReportIntroduction2021>;

const Template: ComponentStory<typeof ReportIntroduction2021> = (args) => (
  <ReportIntroduction2021 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
