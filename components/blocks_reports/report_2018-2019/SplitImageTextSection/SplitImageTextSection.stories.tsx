import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SplitImageTextSection from './SplitImageTextSection';

export default {
  title: 'Report Blocks/(2018-2019)Split Image Text Section',
  component: SplitImageTextSection,
  args: {
    title: 'string',
    image: 'any' as unknown as any,
    introduction: 'any' as unknown as any,
    richBody: 'any' as unknown as any,
    textSide: 'string',
    colorTheme: 'string',
    reportYear: "2021"
  },
} as ComponentMeta<typeof SplitImageTextSection>;

const Template: ComponentStory<typeof SplitImageTextSection> = (args) => (
  <SplitImageTextSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
    "id": "2A1U4uTtU9rpWWQqTkY5nK",
    "title": "Better foundations, not better facades",
    "anchor": "better-foundations",
    "textSide": "right",
    "colorTheme": "white",
    "image": {
        "sys": {
            "id": "5YMOcvuaffahIDpD9Fvc7l"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5YMOcvuaffahIDpD9Fvc7l/0461cb3b59d7068fb5d6df1128a146f3/2018-1.png",
        "width": 600,
        "height": 800,
        "title": "2018-1",
        "description": ""
    },
    "introduction": {
        "json": {
            "data": {},
            "content": [
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "The structural and systemic challenges we face in our daily work reflect deep cracks in our civic life. Fault lines spanning generations, broken and brittle relationships between people and the government that’s meant to serve them. Yet, day after day, dedicated civil servants show up to do what they can to make things better for the American people. They've taught us that to truly spark change, we must always resist the quick fix in favor of pursuing the underlying cause. We must build better foundations, not better facades.",
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
    "richBody": {
        "json": {
            "nodeType": "document",
            "data": {},
            "content": [
                {
                    "nodeType": "heading-3",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "text",
                            "value": "An equitable, human-centered safety net fit for the digital age",
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
                            "value": "Our social safety net is a constellation of services and programs, but it’s often an obstacle course where, the more help you need, the harder it gets. In ",
                            "marks": [],
                            "data": {}
                        },
                        {
                            "nodeType": "hyperlink",
                            "data": {
                                "uri": "https://statescoop.com/five-states-to-modernize-eligibility-systems-in-new-pilot-partnership/"
                            },
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "a nationwide initiative",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "text",
                            "value": " to build an equitable, human-centered safety net fit for the digital age, Nava partnered with Code for America and the Center on Budget and Policy Priorities. Our mission: to radically improve government services for people who find themselves living at or below the poverty line.",
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
                            "value": "After visiting ten states to understand the experiences of people who rely on and manage the social safety net every day, the initiative launched five small-scale pilot sites around the country. Nava partnered with the State of Vermont to make it easier for people to access state-administered benefits like free or low-cost health care and assistance paying for food, fuel, and daily expenses. Recognizing that accessing public assistance programs can be difficult for the people who need them and for the people who manage them, we're focusing our work with Vermont on improving experiences for both beneficiaries and State staff.",
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
                            "value": "During our initial research, we learned that Vermonters faced another hurdle after completing the complicated application process: documents to prove their eligibility. The State of Vermont wanted to address the burden of document submission and minimize the expense of time and money people incurred at this step.",
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
                            "value": "In a few short months, Nava worked with the State of Vermont to launch two test programs that have made measurable improvements. Before, people had to mail or deliver documents in-person during business hours, spending money on postage or transportation to do so. Now, they can submit documents on their own time, from wherever they are, using the device they have, whether it’s mobile, tablet, or desktop. As a result, 30 percent of people submitted outside of business hours and 50 percent used a mobile device to submit.",
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
                            "value": "In total, our test programs reduced the amount of time from application submission to benefits processing by 40 percent. Before, the majority of applicants waited days for their documents to arrive through the mail and longer for them to be processed; only 11 percent were able to submit within one day. During the test programs, 55 percent of applicants were able to submit their documents in one day.",
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
                                "id": "1exXVeoDw8hdnULqNXbWzO",
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
                            "value": "Our data is backed up by positive feedback from users. As one certified assister—someone who helps people understand, apply, and enroll in public assistance services—shared:",
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
                            "value": "\"For one of my clients who was dis-enrolled from Medicaid, I scanned and uploaded his income verification [using the new documentation uploader]. Within three hours, I was able to call him and tell him his Medicaid was active. It was amazing.\"",
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
                            "value": "In the first months of the test programs, hundreds of people were able to quickly submit verification documents. And, the State of Vermont is on track to provide this service to every Vermonter applying for any human services program by the end of 2019. In the meantime, we worked with the State to expand use cases that the uploader could support, including helping people with urgent medical needs submit documents to get health care coverage within hours.",
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
                            "value": "This improvement has proven critical. Hospital staff shared one anecdote about a deaf father of four who urgently needed cancer screening but was unable to schedule the expensive tests until he had coverage. “In his case, [using the uploader] was huge. Everybody was standing with bated breath waiting for his Medicaid to be active so we could get him scheduled,” said a hospital staffer.",
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
                            "value": "Getting what you need from government should always be this easy.",
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
                            "value": "We’re grateful to our partners in the State of Vermont for fully embracing a human-centered approach and supporting the eventual open sourcing of this work so it can be adopted and implemented in other states.",
                            "marks": [],
                            "data": {}
                        }
                    ]
                },
                {
                    "nodeType": "heading-3",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "text",
                            "value": "Using product management to ship the largest change to Medicare",
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
                            "value": "Government agencies deliver urgent and high impact services. Ensuring that these services are human-centered and built on time and on budget is no small feat. When we got the chance to partner with The Centers for Medicare & Medicaid Services to improve the accessibility, effectiveness, and simplicity of Medicare's Quality Payment Program, we understood the incredible potential for positive change. We also understood what it would take to get the job done: a strong product management practice.",
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
                            "value": "As the largest modern update to Medicare, the ",
                            "marks": [],
                            "data": {}
                        },
                        {
                            "nodeType": "hyperlink",
                            "data": {
                                "uri": "https://www.cms.gov/newsroom/fact-sheets/quality-payment-program"
                            },
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "Quality Payment Program ",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "text",
                            "value": "(QPP) is designed to push the ",
                            "marks": [],
                            "data": {}
                        },
                        {
                            "nodeType": "hyperlink",
                            "data": {
                                "uri": "https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet.html"
                            },
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "$705 billion",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "text",
                            "value": " Medicare ecosystem forward. QPP is changing how Medicare providers are paid, rewarding doctors for the quality and value of care rather than volume of services. Aligning doctors' financial incentives with the best outcomes for patients ensures that ",
                            "marks": [],
                            "data": {}
                        },
                        {
                            "nodeType": "hyperlink",
                            "data": {
                                "uri": "https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/CMS-Fast-Facts/index.html"
                            },
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "34 million Medicare Part B",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "text",
                            "value": " beneficiaries get the highest quality health care.",
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
                            "value": "We joined more than ",
                            "marks": [],
                            "data": {}
                        },
                        {
                            "nodeType": "hyperlink",
                            "data": {
                                "uri": "https://blog.navapbc.com/product-management-in-government-why-its-essential-when-the-stakes-are-high-8932b2e98272"
                            },
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "300 people",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "text",
                            "value": ", including civil servants from CMS, the United States Digital Service, and a cohort of contractors to build the technical architecture that would allow the federal government to gather and evaluate performance data about health care quality and adjust Medicare payments accordingly.",
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
                            "value": "To unify this large team, we aligned on this product vision: Medicare’s Quality Payment Program delivers real-time, actionable feedback to doctors so that they can deliver high quality, cost-effective care to patients.",
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
                            "value": "In government projects, the product vision directly links policy requirements with user needs. It also provides a common goal to prioritize everyone’s efforts against. In this case, the product vision enabled us to build the first open application programming interface (API) in the history of similar programs at CMS. Our API is now used by providers, registries, and electronic health record companies who submit the performance data of over half a million clinicians. It’s processed more than 44,000 submissions in one day and has been up and running 99.99% of the time.",
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
                            "value": "But when we began, our research showed that future users of the API were nervous. Previous attempts at similar programs had opaque results. It was incumbent on us to prove that change is possible.",
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
                            "value": "Change like this, that spans teams and initiatives, requires civil servants and contractors alike to use product thinking. Product thinking helps to draw connections between silos and map out the pieces, players, and channels needed to create a human-centered service. In this case, that meant we had to do more than just release the API.",
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
                                "id": "2SrIfqsIzKqwji33Qtt9ZB",
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
                            "value": "To ensure it would be adopted, we built an interactive tutorial to guide providers, registries, and electronic health record companies through the process of submitting performance data to the API. We also created Google Groups so people could support and learn from each other. These pieces were released in a beta so clinicians, administrators, and developers could test it all out with little risk. Thanks to the product road map, we had the time and resources to safely implement all the tools and networks required for QPP’s success.",
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
                            "value": "The product management practices used throughout this project are now being replicated across CMS to help other teams efficiently deliver human-centered policies and services. And, the provision of open tools and networks means that Medicare can continue to innovate and drive improvements for years to come.",
                            "marks": [],
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
                            "id": "1exXVeoDw8hdnULqNXbWzO"
                        },
                        "__typename": "PostImage",
                        "border": "none",
                        "image": {
                            "sys": {
                                "id": "5xe9D3ipgztpt7h3EmFN7Y"
                            },
                            "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5xe9D3ipgztpt7h3EmFN7Y/d2bdce5c9ebb4c3d3fb7803f1ecd52e9/image.png",
                            "width": 300,
                            "height": 588,
                            "title": "Uploader Image",
                            "description": "An example of a page on the website where Vermonters can upload and submit documents needed for eligibility. The text on the screenshot of the page reads: \"Upload all documents requested of your household that you have been asked to send, one at a time.\""
                        },
                        "caption": "An example of a page on the website where Vermonters can upload and submit documents needed for eligibility.",
                        "attribution": null
                    },
                    {
                        "sys": {
                            "id": "2SrIfqsIzKqwji33Qtt9ZB"
                        },
                        "__typename": "PostImage",
                        "border": "none",
                        "image": {
                            "sys": {
                                "id": "wRlgLRXXeFlOyIoFg9Qms"
                            },
                            "url": "https://images.ctfassets.net/t2ekr6eg3fr3/wRlgLRXXeFlOyIoFg9Qms/3ebaf6b5b0c20bb32398b5269184b2e5/image.png",
                            "width": 1004,
                            "height": 1408,
                            "title": "QPP-pbcreport",
                            "description": "A screenshot of a Tweet from Darena Solutions: \"Thanks for awesome #QPP API. Made integration of measure lists in our #MIPS mobile app a breeze.\""
                        },
                        "caption": "QPP user shares how easy it was to submit performance data to the API.",
                        "attribution": null
                    }
                ]
            },
            "assets": {
                "block": [],
                "hyperlink": []
            }
        }
    }
};
