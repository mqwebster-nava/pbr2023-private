import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import StorySection from './StorySection';

export default {
  title: 'Report Blocks/(2021)Story Section',
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

// story={story}
//               colorTheme={entry.colorTheme}
//               sectionAnchor={entry.anchor}
//               nextSection={nextSection}
//               nextSectionTitle={nextSectionTitle}
//               nextSectionType={nextSectionType}
export const Default = Template.bind({});
Default.args = {
    "story": {
        "__typename": "ReportIllustrationOverlayStory",
        "sys": {
            "id": "365Mp6KtlmDLodBEJq6P71"
        },
        "title": "Helping Veterans get their disability claims decisions faster",
        "hideStory": false,
        "anchor": "veterans-strategic-initiatives",
        "intro": {
            "json": {
                "data": {},
                "content": [
                    {
                        "data": {},
                        "content": [
                            {
                                "data": {},
                                "marks": [],
                                "value": "Veterans who file claims to receive benefits can get stuck in a waiting pattern, sometimes preventing them from receiving critical healthcare. We’re working with the U.S. Department of Veterans Affairs (VA) to build tools that reduce the amount of time it takes to process a Veteran's disability benefits claim. ",
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
                                "value": "\n",
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
        "body": {
            "json": {
                "nodeType": "document",
                "data": {},
                "content": [
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs (VA) to build tools that reduce the amount of time it takes to process a Veteran's disability benefits claim. Together with the VA’s Office of the Chief Technology Officer’s (OCTO) Benefits Delivery Team, we developed a prototype to speed up the handlings of some of these claims. ",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "heading-4",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "Narrowing the scope to roll out the best product ",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "We developed a prototype to process one specific type of disability claim—hypertension—and released it for VA staff to use on a small number of claims. We found that the prototype, called the Rapid Ready for Decision prototype, allowed many of these Veterans’ claims for hypertension disability benefits to be processed in days instead of months.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "VA staff tasked with these claims decisions—called claims benefits adjudicators—need access to relevant medical information, such as blood pressure readings, in order to make that call. Sometimes, that means asking a Veteran to complete a medical exam in order to get that necessary medical information. This requirement contributes to longer wait times for Veterans. ",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "But based on research by the Veterans Benefits Administration (VBA), we know that in some cases, necessary medical information already exists in the VA’s system. However, accessing this information is a laborious process for adjudicators. We worked from a hypothesis that by surfacing this relevant medical information to adjudicators, we could help reduce unnecessary medical exams for Veterans. This in turn would help decrease the time Veterans spend waiting for a claim decision.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "embedded-entry-block",
                        "data": {
                            "target": {
                                "sys": {
                                    "id": "1otg3YtYK7I9ob72OKM3Qq",
                                    "type": "Link",
                                    "linkType": "Entry"
                                }
                            }
                        },
                        "content": []
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s, where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "heading-4",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "Building on a prototype to benefit more Veterans",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The positive results we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "Our initial prototypes have allowed some Veterans’ claims for hypertension and asthma disability benefits to be processed in days instead of months. So far, processing times using our prototypes have averaged 3 to 6 days for claims that don’t need exams and 25 to 35 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we saved Veterans over 5,000 days of waiting for a decision in the first quarter.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving Veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                                "marks": [],
                                "data": {}
                            }
                        ]
                    },
                    {
                        "nodeType": "paragraph",
                        "data": {},
                        "content": [
                            {
                                "nodeType": "text",
                                "value": "To learn more, read our ",
                                "marks": [
                                    {
                                        "type": "italic"
                                    }
                                ],
                                "data": {}
                            },
                            {
                                "nodeType": "hyperlink",
                                "data": {
                                    "uri": "https://www.navapbc.com/case-studies/small-pilots-prototype-benefits-claim-tracker"
                                },
                                "content": [
                                    {
                                        "nodeType": "text",
                                        "value": "case study",
                                        "marks": [
                                            {
                                                "type": "underline"
                                            },
                                            {
                                                "type": "italic"
                                            }
                                        ],
                                        "data": {}
                                    }
                                ]
                            },
                            {
                                "nodeType": "text",
                                "value": ".",
                                "marks": [
                                    {
                                        "type": "italic"
                                    }
                                ],
                                "data": {}
                            }
                        ]
                    }
                ]
            },
            "links": {
                "entries": {
                    "block": [
                        {
                            "sys": {
                                "id": "1otg3YtYK7I9ob72OKM3Qq"
                            },
                            "__typename": "ReportCallout",
                            "body": "Our prototypes have averaged 3 to 6 days for processing claims that don’t need exams and 25 days for those that do, compared to 80 to 100 days for both",
                            "colorTheme": "plum",
                            "variant": "statistic",
                            "attribution": null,
                            "attributionRole": null
                        }
                    ]
                },
                "assets": {
                    "block": [],
                    "hyperlink": []
                }
            }
        },
        "illustration": {
            "sys": {
                "id": "4Eo5EVfxOgye3fmLBSrrag"
            },
            "url": "https://images.ctfassets.net/t2ekr6eg3fr3/4Eo5EVfxOgye3fmLBSrrag/72a077ccb63ecfc5e54f3b5f0c3393ce/Person-1-Scene-1B.png",
            "width": 4000,
            "height": 2250,
            "title": "Person-1-Scene-1B",
            "description": "An illustration of a young white woman using an inhaler while taking a break from jogging."
        },
        "contextIllustration": {
            "sys": {
                "id": "4y6ZpazcuEbr4R4pA3A11I"
            },
            "url": "https://images.ctfassets.net/t2ekr6eg3fr3/4y6ZpazcuEbr4R4pA3A11I/4cbb60d4e0ab5adb69d15e66f7456ddf/Person-1-Scene-1.png",
            "width": 4000,
            "height": 2250,
            "title": "PBR-VASI-Sketch-Context",
            "description": "An illustration of a young white woman using an inhaler while taking a break from jogging. She is in a park surrounded by joggers and a man with a dog.\n"
        },
        "featuredCallOut": {
            "sys": {
                "id": "2kjMh49HJmJFTwYIq1kDVS"
            },
            "body": "Over 5,000 days of waiting saved for Veterans",
            "colorTheme": "plum",
            "variant": "statistic",
            "attribution": null,
            "attributionRole": null
        }
    },
    "colorTheme": "plum",
    "sectionAnchor": "pilots",
    "nextSection": "pilots--mass-pfml",
    "nextSectionTitle": "Building Massachusetts’ first Paid Family and Medical Leave program",
    "nextSectionType": "story"
};
