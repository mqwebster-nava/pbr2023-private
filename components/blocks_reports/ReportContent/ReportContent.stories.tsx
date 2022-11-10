import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportContent from './ReportContent';

export default {
  title: 'Report Blocks / Report Content',
  component: ReportContent,
  args: {
    docData: 'any' as unknown as any,
    docLinks: 'any' as unknown as any,
    variant: 'any' as unknown as any,
    reportYear: 'string',
    isMobileLandscape: 'boolean' as unknown as any
  },
} as ComponentMeta<typeof ReportContent>;

const Template: ComponentStory<typeof ReportContent> = (args) => (
  <ReportContent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
