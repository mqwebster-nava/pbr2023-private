import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  ShoutoutSection  from './ShoutoutSection';

export default {
  title: 'Report Blocks/PBR 2018-2019/Report Hero 2019',
  component: ShoutoutSection,
  args: {
    title: 'any' as unknown as any,
    type: 'any' as unknown as any,
    richBody: 'any' as unknown as any
  },
} as ComponentMeta<typeof ShoutoutSection>;

const Template: ComponentStory<typeof ShoutoutSection> = (args) => (
  <ShoutoutSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
