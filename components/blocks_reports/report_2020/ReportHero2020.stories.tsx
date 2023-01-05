import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportHero2020 from './ReportHero2020';

export default {
  title: 'Report Blocks/Report Hero/2020',
  component: ReportHero2020,
  args: {

  },
} as ComponentMeta<typeof ReportHero2020>;

const Template: ComponentStory<typeof ReportHero2020> = (args) => (
  <ReportHero2020 {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "7uP3EGHJHpKchFMeKrcSSR",
    "title": "Public Benefit Report",
    "subtitle": null,
    "variant": "PBR 2020",
    "image": {
        "sys": {
            "id": "147o9Vr6ec3pofguNSfk69"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/147o9Vr6ec3pofguNSfk69/484a8d72db5497ef774b166688abad18/nava-cover-2200x700-teal-2020.webp",
        "width": 2200,
        "height": 696,
        "title": "pbr-2020-cover-2200x700-teal",
        "description": ""
    },
    "pattern": null,
    "buttonPath": null,
    "buttonText": null
};
