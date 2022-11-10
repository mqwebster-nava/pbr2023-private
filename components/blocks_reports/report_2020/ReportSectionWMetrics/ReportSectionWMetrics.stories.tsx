import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ReportSectionWMetrics from './ReportSectionWMetrics';

export default {
  title: 'Report Blocks/(2020)Report Section W Metrics',
  component: ReportSectionWMetrics,
  args: {
    title: 'string',
    anchor: 'string',
    colorTheme: 'any' as unknown as any,
    image: 'any' as unknown as any,
    intro: 'string',
    sectionMetrics: 'any' as unknown as any,
    richBody: 'any' as unknown as any,
    links: 'any' as unknown as any,
    reportYear: "2020"
  },
} as ComponentMeta<typeof ReportSectionWMetrics>;

const Template: ComponentStory<typeof ReportSectionWMetrics> = (args) => (
  <ReportSectionWMetrics {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "1enFi2u8HplLpyZqpGr13b",
    "title": "Supporting Veterans with virtual tele-hearings",
    "anchor": "veterans",
    "image": {
        "sys": {
            "id": "3dHv4i2WY9jILZJKw7KRvD"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3dHv4i2WY9jILZJKw7KRvD/fc3e1a5db21eaa739d11fd44dca4c794/nava-VA-2200x700-hi-res.webp",
        "width": 3840,
        "height": 1224,
        "title": "nava-VA-2200x700-hi-res",
        "description": "Two people smile out of virtual screens on either side of a brick wall. The brick wall is cracked by an arched  line that connects the two people."
    },
    "intro": "Nava worked with the U.S. Department of Veterans Affairs Board of Veterans’ Appeals and other partners to increase VA’s capacity to serve Veterans during the pandemic by offering secure, confidential, and convenient virtual tele-hearings for benefits appeals.",
    "colorTheme": "white",
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
                            "value": "Making an effective service even better",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "heading-3"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "Veterans and their families can obtain benefits they’re entitled to by filing claims to the Department of Veterans Affairs (VA). If a Veteran is unsatisfied with the outcome of their claim, they can request a decision review. Nava works with the U.S. Department of Veterans Affairs (VA) Board of Veterans’ Appeals (Board) and other vendor partners to help make that decision review process more efficient and user-friendly with a new suite of digital services called Caseflow.",
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
                            "value": "As part of Caseflow, VA wanted to make it possible for Veterans to ",
                            "nodeType": "text"
                        },
                        {
                            "data": {
                                "uri": "https://www.blogs.va.gov/VAntage/68964/veterans-see-virtual-hearings-board-veterans-appeals-early-2020/"
                            },
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "attend benefit appeals hearings without traveling to a VA office",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "hyperlink"
                        },
                        {
                            "data": {},
                            "marks": [],
                            "value": ". The urgency of this project increased when the COVID-19 pandemic suspended in-person hearings. To move quickly and minimize risk while building virtual tele-hearing capacity, a new feature to generate video conference links when scheduling hearings was added to Caseflow to ensure a seamless, unified experience and efficient adoption of remote hearings. Scheduling and rescheduling hearings could all happen within the workflow they were already using. Making it easier for VA staff to use the new system would ultimately make it easier for them to better serve Veterans.",
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
                            "value": "Building a secure and convenient service",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "heading-3"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "In March 2020, one week after shelter-in-place orders were issued, the team rolled out the new scheduling feature, enabling a small group of VA staff to test the virtual tele-hearings system within Caseflow. The new feature allowed coordinators to convert 25 percent of previously scheduled hearings to virtual tele-hearings by June; this number rose to 33 percent in July. During current COVID-19 operations, roughly 95 percent of all hearings have had a virtual component. The new virtual tele-hearings scheduling system puts scheduling and email functions all in one place—what used to be a multi-step process now has been reduced to a two-step process.",
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
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "Making it easier for VA staff to use the new system would ultimately make it easier for them to better serve Veterans.",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "paragraph"
                        }
                    ],
                    "nodeType": "blockquote"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "VA is now poised to hold over 1,000 hearings per week in 2021, about 50 percent more than before virtual tele-hearings. Before virtual tele-hearings, hardware constraints required Veterans to travel either to a Regional Office, the Central Office in DC, or approved alternate locations. With virtual tele-hearings, Veterans and their representatives can participate in a hearing from any location with an internet connection and appropriate hardware. This allows VA to schedule and hold many more hearings, since VA staff is no longer constrained by the number of rooms available at a Regional Office. Moreover, virtual tele-hearings can run alongside other hearing types, increasing overall hearing capacity.",
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
                            "value": "Adapting to new challenges, during the pandemic and beyond",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "heading-3"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "While VA already knew it needed to—and could—increase its capacity to serve Veterans remotely with virtual tele-hearings, the onset of the COVID-19 pandemic demanded that changes happen quickly. At the same time, the pandemic could have derailed the project: Teams across the country had to adapt to things like new workflows, additional responsibilities, and different means of communication.",
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
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "With virtual tele-hearings, Veterans and their representatives can participate in a hearing from any location with an internet connection and appropriate hardware.",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "paragraph"
                        }
                    ],
                    "nodeType": "blockquote"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "The Board and Nava launched quickly, got real-time feedback, and rapidly responded to it so we could ultimately deliver better services for Veterans amidst the crisis. Learn more about this work in our ",
                            "nodeType": "text"
                        },
                        {
                            "data": {
                                "uri": "https://www.navapbc.com/case-studies/Supporting-Veterans-During-the-Pandemic-with-Virtual-Tele-Hearings.html"
                            },
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "case study",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "hyperlink"
                        },
                        {
                            "data": {},
                            "marks": [],
                            "value": ".",
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
    "sectionMetrics": [
        {
            "number": "1,000",
            "description": "benefits hearings can now be held per week by VA"
        },
        {
            "number": "50%",
            "description": "more hearings per week than before virtual tele-hearings"
        },
        {
            "number": "95%",
            "description": "of hearings have had a virtual component during the pandemic"
        }
    ]
};
