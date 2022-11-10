import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportSectionWMetrics from './ReportSectionWMetrics';

export default {
  title: 'Report Blocks/PBR 2020/Report Section W Metrics',
  component: ReportSectionWMetrics,
  args: {
    title: 'string',
    anchor: 'string',
    colorTheme: 'any' as unknown as any,
    image: 'any' as unknown as any,
    intro: 'string',
    sectionMetrics: 'any' as unknown as any,
    richBody: 'any' as unknown as any,
    links: 'any' as unknown as any,
    reportYear: "2020"
  },
} as ComponentMeta<typeof ReportSectionWMetrics>;

const Template: ComponentStory<typeof ReportSectionWMetrics> = (args) => (
  <ReportSectionWMetrics {...args} />
);

export const Default = Template.bind({});
Default.args = {};
