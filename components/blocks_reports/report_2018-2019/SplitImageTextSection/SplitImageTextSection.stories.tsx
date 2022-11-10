import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SplitImageTextSection from './SplitImageTextSection';

export default {
  title: 'Report Blocks/PBR 2018-2019/Split Image Text Section',
  component: SplitImageTextSection,
  args: {
    title: 'string',
    image: 'any' as unknown as any,
    introduction: 'any' as unknown as any,
    richBody: 'any' as unknown as any,
    textSide: 'string',
    colorTheme: 'string',
    reportYear: "2021"
  },
} as ComponentMeta<typeof SplitImageTextSection>;

const Template: ComponentStory<typeof SplitImageTextSection> = (args) => (
  <SplitImageTextSection {...args} />
);

export const Story = Template.bind({});
Story.args = {};
