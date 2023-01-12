import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  ReportHero2019  from './ReportHero2019';

export default {
  title: 'Report Blocks/Report Hero/2019',
  component: ReportHero2019,
  args: {

  },
} as ComponentMeta<typeof ReportHero2019>;

const Template: ComponentStory<typeof ReportHero2019> = (args) => (
  <ReportHero2019 {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "4xfWG54U6oFMXppTuqcNoP",
    "title": "2019 Public Benefit Report",
    "subtitle": null,
    "variant": "PBR 2019",
    "image": {
        "sys": {
            "id": "2nSvKB0n3zFD6pxx1f3lK8"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2nSvKB0n3zFD6pxx1f3lK8/07d4e6bbc0c9e67232de5eeaabffd175/2019-head.png",
        "width": 1199,
        "height": 924,
        "title": "2019-head",
        "description": ""
    },
    "pattern": null,
    "buttonPath": "/files/2019NavaPublicBenefitReport.pdf",
    "buttonText": "View as PDF"
};
