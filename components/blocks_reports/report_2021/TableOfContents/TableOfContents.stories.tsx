import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import TableOfContents from './TableOfContents';

export default {
  title: 'Report Blocks/Custom Section/(2021)Table Of Contents',
  component: TableOfContents,
  args: {
    title: 'any' as unknown as any,
    anchor: 'any' as unknown as any,
    contentBlocks: 'any' as unknown as any
  },
} as ComponentMeta<typeof TableOfContents>;

const Template: ComponentStory<typeof TableOfContents> = (args) => (
  <TableOfContents {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "3SO3qwB3VQtT9MCozqJoQ",
    "title": "Table of contents",
    "anchor": "toc",
    "type": "Table of Contents",
    "colorTheme": "purple",
};
