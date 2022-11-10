import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportHero2018  from './ReportHero2018';

export default {
  title: 'Report Blocks/Report Hero/2018',
  component: ReportHero2018,
  args: {

  },
} as ComponentMeta<typeof ReportHero2018>;

const Template: ComponentStory<typeof ReportHero2018> = (args) => (
  <ReportHero2018 {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "2uXVzDN8bFUjChKqhjLoQ8",
    "title": "Progress takes work",
    "subtitle": "2018 Public Benefit Report",
    "variant": "PBR 2018",
    "image": {
        "sys": {
            "id": "6NzR3vRqEJtqZo7qLiIa16"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/6NzR3vRqEJtqZo7qLiIa16/7a9e8ab8d6726dae5f507755f0861fa9/2018-head.png",
        "width": 2000,
        "height": 1184,
        "title": "2018-head",
        "description": ""
    },
    "buttonPath": "/files/2018NavaPublicBenefitReport.pdf",
    "buttonText": "View as PDF"
};
