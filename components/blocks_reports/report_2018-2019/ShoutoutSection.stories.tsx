import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  ShoutoutSection  from './ShoutoutSection';

export default {
  title: 'Report Blocks/Custom Section/(2018-2019)Shoutout Section',
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
Default.args = {
    "id": "hs82roDOmNuFdqTNxTkYG",
    "title": "Shoutouts",
    "anchor": "shoutouts",
    "type": "Shoutout 2018",
    "colorTheme": null,
    "richBody": {
        "json": {
            "data": {},
            "content": [
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "At the end of every weekly all staff meeting, it's Nava tradition to show appreciation by \"shouting out\" particularly special things Navanauts did that week. It's a privilege to close our week with gratitude for the work and each other.",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "paragraph"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "It's with great appreciation that we shoutout the communities that support us, teach us, and cheer us on. Thank you Nava staff, alums, partners, advisors, friends, and last but not least, the Navatots who were born this past year for making the work in this report possible. For the complete list of Navafriends, see the ",
                            "nodeType": "text"
                        },
                        {
                            "data": {
                                "uri": "https://www.navapbc.com/uploads/nava-public-benefit-report-2018.pdf"
                            },
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "shoutout roll call",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "hyperlink"
                        },
                        {
                            "data": {},
                            "marks": [],
                            "value": " at the end of the report 🎉",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "paragraph"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "Special shoutout to ",
                            "nodeType": "text"
                        },
                        {
                            "data": {
                                "uri": "http://www.vidhyanagarajan.com/"
                            },
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "Vidhya Nagarajan",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "hyperlink"
                        },
                        {
                            "data": {},
                            "marks": [],
                            "value": " for the illustrations in this report.",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "paragraph"
                }
            ],
            "nodeType": "document"
        },
        "links": {
            "entries": {
                "block": []
            },
            "assets": {
                "block": [],
                "hyperlink": []
            }
        }
    },
};
