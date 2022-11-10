import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import StorySection from './StorySection';

export default {
  title: 'Report Blocks/PBR 2021/Story Section',
  component: StorySection,
  args: {
    story: 'any' as unknown as any,
    colorTheme: 'any' as unknown as any,
    sectionAnchor: 'any' as unknown as any,
    nextSection: 'any' as unknown as any,
    nextSectionTitle: 'any' as unknown as any,
    nextSectionType: 'story'
  },
} as ComponentMeta<typeof StorySection>;

const Template: ComponentStory<typeof StorySection> = (args) => (
  <StorySection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
