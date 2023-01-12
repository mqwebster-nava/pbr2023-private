import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportHero2021 from './ReportHero2021';

export default {
  title: 'Report Blocks/Report Hero/2021',
  component: ReportHero2021,
  args: {

  },
} as ComponentMeta<typeof ReportHero2021>;

const Template: ComponentStory<typeof ReportHero2021> = (args) => (
  <ReportHero2021 {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "4Wo5JdCBSpapOC40xIoPpM",
    "title": "Public Benefit Report 2021",
    "subtitle": null,
    "variant": "PBR 2021",
    "image": null,
    "pattern": null,
    "buttonPath": null,
    "buttonText": null
};
