import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportNavbar from './ReportNavbar';

export default {
  title: 'Report Blocks/(2021)Report Navbar',
  component: ReportNavbar,
  args: {
    reportSections: 'any' as unknown as any,
    contentBlocks: 'any' as unknown as any
  },
} as ComponentMeta<typeof ReportNavbar>;

const Template: ComponentStory<typeof ReportNavbar> = (args) => (
  <ReportNavbar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
