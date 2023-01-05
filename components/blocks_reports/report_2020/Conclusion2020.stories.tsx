import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Conclusion2020 from './Conclusion2020';

export default {
  title: 'Report Blocks/Custom Section/(2020)Conclusion',
  component: Conclusion2020,
  args: {
    title: 'any' as unknown as any,
    anchor: 'any' as unknown as any,
    type: 'any' as unknown as any,
    richBody: 'any' as unknown as any
  },
} as ComponentMeta<typeof Conclusion2020>;

const Template: ComponentStory<typeof Conclusion2020> = (args) => (
  <Conclusion2020 {...args} />
);

export const Story = Template.bind({});
Story.args = {};
