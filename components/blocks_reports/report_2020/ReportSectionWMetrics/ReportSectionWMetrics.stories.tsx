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
    "reportYear": "2020",
    "id": "5JttGu3L4Gh6xTzDISaiyg",
    "__typename": "ReportSectionWithMetrics",
    "sys": {
        "id": "5JttGu3L4Gh6xTzDISaiyg"
    },
    "title": "Designing a more personal healthcare experience",
    "anchor": "cmsmax",
    "image": {
        "sys": {
            "id": "1JVqZE2AByMWnEVylgayYe"
        },
        "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1JVqZE2AByMWnEVylgayYe/a0d887bae0492218e0f9a58febf6eff2/nava-medicare-2200x700-hi-res.webp",
        "width": 3840,
        "height": 1226,
        "title": "nava-medicare-2200x700-hi-res",
        "description": "A sea green photo of an older couple sitting side by side, smiling and pointing at a screen, is circled by six pieces of torn squares in pink, orange, yellow, and white."
    },
    "intro": "Nava is working with Centers for Medicare & Medicaid Services and the prime contractor, Oddball, to design a more seamless, personal, and integrated experience for Medicare beneficiaries. To start, we’ll unify seven websites into one, so people can easily access self-service options about their health plans, payments, and other services.",
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
                            "value": "Helping people make informed healthcare decisions",
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
                            "value": "As of 2020, more than ",
                            "nodeType": "text"
                        },
                        {
                            "data": {
                                "uri": "https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/CMS-Fast-Facts"
                            },
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "62 million people",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "hyperlink"
                        },
                        {
                            "data": {},
                            "marks": [],
                            "value": ", or about 19 percent of the entire US population, rely on Medicare for healthcare coverage. Most are ",
                            "nodeType": "text"
                        },
                        {
                            "data": {
                                "uri": "https://www.cms.gov/files/document/2018-mdcr-enroll-ab-3.pdf"
                            },
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "over the age of 65 and/or living with disabilities",
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
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "Chances are, you know one of those people. About 19 percent of Medicare beneficiaries, more than 12 million people, have online Medicare accounts.",
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
                            "value": "People using online Medicare accounts increasingly expect to find information that’s current, personalized, and relevant to them. These expectations will only continue to grow as internet-savvy people age into the program.",
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
                                    "value": "As of 2020, more than 62 million people, or about 19 percent of the entire US population, rely on Medicare for healthcare coverage... Chances are, you know one of those people.",
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
                            "value": "Our goal with the Medicare Authenticated Experience (MAX) is to help people make informed decisions about their healthcare through a secure, seamless, and personal digital experience.",
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
                            "value": "Making quick, incremental improvements",
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
                            "value": "Previously, Medicare beneficiaries had to navigate more than seven websites, each with their own structure, to find information—like pricing for prescriptions, how to schedule a doctor’s appointment, or make a copay—about their healthcare. Alongside Oddball, we're working to unify these disparate websites into a single Medicare experience. Beneficiaries will be able to sign in to one place and find all of their healthcare details. It's a massive task that involves multiple teams, both inside and outside of government. It can't—and shouldn’t—be done all at once.",
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
                            "value": "To prioritize a quick pace over perfection, we work iteratively. This means we make small improvements, test them, track their performance, and improve upon them. As a first step on this project, we designed a new header with a navigation that accommodates all of the information from Medicare’s previous websites. The new header gives beneficiaries a more consistent experience and helps them understand where, exactly, they are on a Medicare website.\n",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "paragraph"
                },
                {
                    "data": {
                        "target": {
                            "sys": {
                                "id": "W26chADOWsLbmmRfa3cjC",
                                "type": "Link",
                                "linkType": "Entry"
                            }
                        }
                    },
                    "content": [],
                    "nodeType": "embedded-entry-block"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "After rolling out the new header, we tested and measured its efficacy in the MyMedicare (account management) site. Once we knew that beneficiaries could find the info they needed, in partnership with Oddball, we supported incorporating this header into all eMedicare properties. Now whether beneficiaries are finding a care provider, browsing Medicare plans, or paying their premiums, they have a consistent navigation experience to find where they need to go next. One beneficiary described the new experience:",
                            "nodeType": "text"
                        }
                    ],
                    "nodeType": "paragraph"
                },
                {
                    "data": {
                        "target": {
                            "sys": {
                                "id": "66TC28QYWWaBebEm1csMsZ",
                                "type": "Link",
                                "linkType": "Entry"
                            }
                        }
                    },
                    "content": [],
                    "nodeType": "embedded-entry-block"
                },
                {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "marks": [],
                            "value": "We’ll continue tracking how people use the header and the rest of the website so we can continue to find opportunities for improvement.",
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
                            "value": "Using data to provide more relevant information",
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
                            "value": "Centers for Medicare & Medicaid Services (CMS) knows they can use the data they have to give beneficiaries a more personal experience. So, we’re building a new message center that provides beneficiaries information about their health and their Medicare accounts. For example, in the new message center we crafted a series of messages that provide feedback to beneficiaries that use Medicare Easy Pay, a service for automatically paying their premiums. With the new experience, when a change is made to a beneficiary’s Easy Pay, they get a message and email informing them of the change and letting them know if there are any additional things for them to do. We’ll use data to both deliver new messages and track how effective they are.",
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
                            "value": "To accomplish this, we've designed a new message center, built an API to manage the data, and created the strategy and content for personalized messages. In return, beneficiaries will get timely, personal, and secure messaging that helps them manage their healthcare and Medicare coverage.",
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
                            "value": "Responding to people’s needs efficiently and effectively",
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
                            "value": "While much of our work improves the experience for Medicare beneficiaries, we’re also helping to improve CMS’s ability to adapt and respond to beneficiaries’ needs. As one example: With the new message center, CMS will be able to issue both personally and broadly relevant messages across their ecosystem of webpages—from one place.",
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
                            "value": "When major events—global (say, a pandemic) or personal (emergency surgery)—happen, CMS can act quickly and ensure their beneficiaries have the information they need, when they need it. Global messages can be shared via prominent banners across all Medicare pages. And personal messages can be sent directly to beneficiaries.",
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
                            "value": "Importantly, when those messages are shared, Medicare can track clicks and other measures of effectiveness so they can adjust course and continue to improve beneficiaries’ experiences as needed.",
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
                                    "value": "When major events—global (say, a pandemic) or personal (emergency surgery)—happen, CMS can act quickly and ensure their beneficiaries have the information they need, when they need it.",
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
                            "value": "After launching the message center, in partnership with Oddball, a product manager at CMS told us, \"I love the new Message Center, it's light years better than what we had before.\"",
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
                            "value": "We were thrilled to hear the feedback, but we also hope this is just the beginning of increasingly better services and outcomes for both CMS staff and Medicare beneficiaries.",
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
                "block": [
                    {
                        "sys": {
                            "id": "W26chADOWsLbmmRfa3cjC"
                        },
                        "__typename": "PostImage",
                        "border": "none",
                        "image": {
                            "sys": {
                                "id": "3WTr5xWCDVxDrLBEIDG2Gp"
                            },
                            "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3WTr5xWCDVxDrLBEIDG2Gp/4f04f9ebe467bf8229a224557ad4d1cf/image.png",
                            "width": 1920,
                            "height": 800,
                            "title": "PBR-screenshot-2-v1",
                            "description": "A person signed into Medicare.gov sees a screen with two boxes showing their personal medical information and messages related to their Medicare experience."
                        },
                        "caption": "With the new header, beneficiaries signed into their Medicare account can find information on their claims, premiums, plans, providers, and more—all in one place.",
                        "attribution": null
                    },
                    {
                        "sys": {
                            "id": "66TC28QYWWaBebEm1csMsZ"
                        },
                        "__typename": "PostBlockQuote",
                        "body": "Please note...the web site has changed greatly for the better since the last time I was here (probably to pay my last premium). In the past it has been extremely challenging to find how/where to pay my premium. I almost didn't want to visit. Today was a fabulous experience!",
                        "attribution": null
                    }
                ]
            },
            "assets": {
                "block": [],
                "hyperlink": []
            }
        }
    },
    "sectionMetrics": [
        {
            "number": "62 M",
            "description": "people use Medicare"
        },
        {
            "number": "12 M",
            "description": "people have online Medicare accounts"
        },
        {
            "number": "7",
            "description": "websites unified into one online experience"
        }
    ],
    "links": [
        {
            "text": "Letter from leadership",
            "id": "intro"
        },
        {
            "id": "veterans",
            "text": "Supporting Veterans"
        },
        {
            "id": "california",
            "text": "Delivering unemployment benefits"
        },
        {
            "id": "cmsmax",
            "text": "Designing a personal healthcare experience"
        },
        {
            "id": "cms",
            "text": "Building human-centered cloud infrastructure"
        }
    ]
};
