import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportConclusion2021 from './ReportConclusion2021';

export default {
  title: 'Report Blocks/Custom Section/(2021)Report Conclusion',
  component: ReportConclusion2021,
  args: {
    title: 'any' as unknown as any,
    richBody: 'any' as unknown as any,
    anchor: 'any' as unknown as any
  },
} as ComponentMeta<typeof ReportConclusion2021>;

const Template: ComponentStory<typeof ReportConclusion2021> = (args) => (
  <ReportConclusion2021 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
