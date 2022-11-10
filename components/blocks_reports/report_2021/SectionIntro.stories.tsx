import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SectionIntro from './SectionIntro';

export default {
  title: 'Report Blocks/(2021)Section Intro',
  component: SectionIntro,
  args: {
    section: 'any' as unknown as any,
    i: 'any' as unknown as any
  },
} as ComponentMeta<typeof SectionIntro>;

const Template: ComponentStory<typeof SectionIntro> = (args) => (
  <SectionIntro {...args} />
);

export const Default = Template.bind({});
Default.args = {
    i:"1",
    section:{
    "id": "2i91vq1MGeNMFu56UvDu5x",
    "title": "Small pilots that make a big impact",
    "anchor": "pilots",
    "body": "In order to design public services that work for everyone, we start small. Pilots are iterative prototypes that eventually comprise a larger service. Designing services in small bites helps us identify and resolve issues early on, test with diverse participants, and roll out services quickly and effectively. ",
    "colorTheme": "plum",
    "themeNum": 1,
    "storiesCollection": {
        "items": [
            {
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
            {
                "__typename": "ReportIllustrationOverlayStory",
                "sys": {
                    "id": "6LZwaz7MD5DsFxZ2JvoVTG"
                },
                "title": "Building Massachusetts’ first Paid Family and Medical Leave program",
                "hideStory": false,
                "anchor": "mass-pfml",
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
                                        "value": "The Commonwealth of Massachusetts tapped Nava to support the launch of their brand new Paid Family Medical Leave (PFML) program, which guarantees paid time away from work for major life events. Since we launched in January 2021, the program has paid out $1 billion in benefits.",
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
                                        "value": "Nava partnered with the Commonwealth of Massachusetts to support the launch of their brand new PFML program, which guarantees paid time away from work to care for a new baby, a sick loved one, or one’s own illness. ",
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
                                        "value": "In just 13 months, we designed, tested, and built a brand new digital service to help Massachusetts workers as they apply for and manage benefits. Since we launched in January 2021, the program has paid out $1 billion in benefits. We built digital tools for claimants and employers using the program to simplify managing paid leave across the board.",
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
                                        "value": "In tandem with this work, we built the API integration layer to connect multiple state systems with ",
                                        "marks": [],
                                        "data": {}
                                    },
                                    {
                                        "nodeType": "hyperlink",
                                        "data": {
                                            "uri": "http://paidleave.mass.gov"
                                        },
                                        "content": [
                                            {
                                                "nodeType": "text",
                                                "value": "paidleave.mass.gov",
                                                "marks": [],
                                                "data": {}
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "text",
                                        "value": " and other paid family and medical leave systems. In our shared long-term vision, Massachusetts workers, families, and employers will be able to confidently navigate life’s critical moments because ",
                                        "marks": [],
                                        "data": {}
                                    },
                                    {
                                        "nodeType": "hyperlink",
                                        "data": {
                                            "uri": "http://paidleave.mass.gov"
                                        },
                                        "content": [
                                            {
                                                "nodeType": "text",
                                                "value": "paidleave.mass.gov",
                                                "marks": [],
                                                "data": {}
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "text",
                                        "value": "’s personalized support makes managing paid leave simple.",
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
                                        "value": "Iterating by observing user needs",
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
                                        "value": "We approached building this program by using pilots to continuously test our products with real users. In a pilot, we incrementally developed pieces of the end-to-end experience and tested them with real users (pilot participants) before the service launches to the public. This helped us identify and mitigate risks early on to ensure that our final product worked for users, integrated with different systems, and collected the information needed to meet program goals. In a multi-vendor environment with a strict legislative deadline, these pilots also served as milestones for teams to align on so we could collaboratively build and test new features. ",
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
                                            "id": "7rFwakhwe0ow7XqmW8iSfK",
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
                                        "value": "For our first pilot, we designed and built an application that allowed claimants to create an account, log in, verify an account, reset the password, log out, and take the first steps toward creating a claim. We also tested a key technical integration with the Massachusetts' Department of Revenue (DOR), which provides contribution and wage data that is essential to determining a claimant's eligibility. In the second and third pilots, we expanded the application to allow claimants to submit an application and ensured that Massachusetts administrators received the complete and accurate data needed to adjudicate each claim.",
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
                                        "value": "Building the application over multiple pilots allowed us to test it with a diverse set of participants and to ensure its simplicity and ease for everyone. In one testing session, a participant mistyped their email address when attempting to reset their password, preventing them from logging in. Once we discovered this loophole, we updated the flow to allow users to fix a mistyped email address and still successfully reset their password. ",
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
                                        "value": "This was important because we learned from other states with PFML programs that password reset issues are a primary cause of high call volume at call centers. We knew that creating a simple self-service reset password option would reduce the burden on the call center, saving staff time and resources.",
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
                                        "value": "Pilots let us discover such unforeseen and unpredictable errors in a low-risk environment, before they become a barrier to claimants and a burden to staff. In these pilots, we were able to build and test the first steps of the account creation process—an essential part of the user experience—with real users. ",
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
                                        "value": "To learn more, read our ",
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
                                            "uri": "https://www.navapbc.com/case-studies/using-a-pilot-to-minimize-risk-and-rapidly-deliver-new-services"
                                        },
                                        "content": [
                                            {
                                                "nodeType": "text",
                                                "value": "case study",
                                                "marks": [
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
                                        "id": "7rFwakhwe0ow7XqmW8iSfK"
                                    },
                                    "__typename": "ReportCallout",
                                    "body": "We designed, tested, and built a new digital service in just 13 months",
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
                        "id": "4ZB56Ie7tsYzlYCLX5XO1P"
                    },
                    "url": "https://images.ctfassets.net/t2ekr6eg3fr3/4ZB56Ie7tsYzlYCLX5XO1P/c46800340ad2fb0c27e1cdceacdf91ce/Person-1-Scene-2B.png",
                    "width": 4000,
                    "height": 2250,
                    "title": "PBR-PFML-Sketch-Simple",
                    "description": "An illustration of a white woman smiling and sitting on a couch."
                },
                "contextIllustration": {
                    "sys": {
                        "id": "3bqvEPQZqnmEhVr10KqLqL"
                    },
                    "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3bqvEPQZqnmEhVr10KqLqL/fd9b69c1c778658776d522d5ed104796/Person-1-Scene-2.png",
                    "width": 4000,
                    "height": 2250,
                    "title": "PBR-PFML-Sketch-Context",
                    "description": "An illustration of a white woman smiling and sitting on a couch. She is joined by her female partner and older father, who is using an oxygen machine."
                },
                "featuredCallOut": {
                    "sys": {
                        "id": "3uH0n6tWuHEp1gNJoXJe0W"
                    },
                    "body": "$1 billion in paid time off",
                    "colorTheme": "plum",
                    "variant": "statistic",
                    "attribution": null,
                    "attributionRole": null
                }
            },
            {
                "__typename": "ReportIllustrationOverlayStory",
                "sys": {
                    "id": "74GmWUFqgtmo10AjjSA4Vn"
                },
                "title": "Tracking unemployment claims for Californians in a crisis",
                "hideStory": false,
                "anchor": "california-unemployment",
                "intro": {
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
                                        "value": "Amidst an explosion of unemployment claims during the pandemic, the California Employment Development Department (EDD) brought us in ",
                                        "marks": [],
                                        "data": {}
                                    },
                                    {
                                        "nodeType": "text",
                                        "value": "to help Californians see where their unemployment claim stood.",
                                        "marks": [],
                                        "data": {}
                                    },
                                    {
                                        "nodeType": "text",
                                        "value": " In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. ",
                                        "marks": [],
                                        "data": {}
                                    }
                                ]
                            }
                        ]
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
                        "data": {},
                        "content": [
                            {
                                "data": {},
                                "content": [
                                    {
                                        "data": {},
                                        "marks": [],
                                        "value": "Online claims trackers communicate to claimants where their unemployment or healthcare claim stands. They can be an intuitive, useful tool for public benefit programs to adopt. Claims trackers are a familiar feature in the private sector, from package tracking to pizza delivery apps. In an increasingly digital world, many have come to expect these kinds of self-service experiences in the public benefits space. ",
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
                                        "value": "The California Employment Development Department (EDD) brought Nava in to help build a claims tracker tool amidst the explosion of claims during the pandemic. Nava aimed to build on existing systems and release a minimum viable product to solve a specific problem during a crisis. We prioritized guiding claimants with personalized information, building trust through transparency, and striving for simplicity.",
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
                                        "value": "User-centered research reveals that claimants need detailed instructions",
                                        "nodeType": "text"
                                    }
                                ],
                                "nodeType": "heading-4"
                            },
                            {
                                "data": {},
                                "content": [
                                    {
                                        "data": {},
                                        "marks": [],
                                        "value": "Designing public benefit claims trackers means conveying information to claimants about complex and at times confusing processes. Based on our research, claimants want step-by-step instructions that are tailored to their specific situations. If no action is required at any given step, claimants need to know that. For example, the Claim Status Tracker page we designed for California included a Claim Status section summarizing the claimants’ overall status with a list of next steps for both the claimant and EDD. Below, the Claim Details section culls disparate claim data, making it easier for claimants to understand how their next steps and claim data relate.",
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
                                        "value": "As a claimant we interviewed said, “I want some more details...it’s most frustrating when you log on or something has changed or your account has been flagged or put on hold...and you just kind of have no clue.”",
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
                                        "value": "Building transparency with claims status updates",
                                        "nodeType": "text"
                                    }
                                ],
                                "nodeType": "heading-4"
                            },
                            {
                                "data": {},
                                "content": [
                                    {
                                        "data": {},
                                        "marks": [],
                                        "value": "Claimants also want to know why decisions were made and who is responsible for next steps. ",
                                        "nodeType": "text"
                                    },
                                    {
                                        "data": {},
                                        "marks": [],
                                        "value": "We found in our research that one of their biggest frustrations was encountering a seemingly endless “pending” status across payments on continued claims.",
                                        "nodeType": "text"
                                    },
                                    {
                                        "data": {},
                                        "marks": [],
                                        "value": " Based on the idea that providing additional context would help to reduce calls to EDD staff, we set out to understand the many different scenarios that can lead to the “pending” status. We found that we needed to  provide a more detailed status summary that tells claimants why their status is pending and indicates the current step in the process. ",
                                        "nodeType": "text"
                                    }
                                ],
                                "nodeType": "paragraph"
                            },
                            {
                                "data": {
                                    "target": {
                                        "sys": {
                                            "id": "2tAtfmy3oYtiafhfBojz5r",
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
                                        "value": "We worked with the EDD to create a system that would provide detailed status information for some of the most common reasons for a pending status, while claims pending for another reason would still display a generic status summary. An example of a more detailed status would be \"Pending eligibility determination: Phone interview scheduled.” We designed this system so that after initial launch, it could be rapidly iterated to keep adding detailed statuses to cover more scenarios. ",
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
                                        "value": "In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. We saw many examples on social media of claimants noticing the claim status tracker and referencing it as a source of truth about their claim. As one user said when we were testing an earlier prototype, “This is great—it tells you the benefit year, claim balance… [This is] way more info than we get. It tells you what’s going on.”",
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
                                        "marks": [
                                            {
                                                "type": "italic"
                                            }
                                        ],
                                        "value": "To learn more, read our ",
                                        "nodeType": "text"
                                    },
                                    {
                                        "data": {
                                            "uri": "https://www.navapbc.com/insights/building-public-benefit-claims-trackers-across-states"
                                        },
                                        "content": [
                                            {
                                                "data": {},
                                                "marks": [
                                                    {
                                                        "type": "underline"
                                                    },
                                                    {
                                                        "type": "italic"
                                                    }
                                                ],
                                                "value": "Insights article",
                                                "nodeType": "text"
                                            }
                                        ],
                                        "nodeType": "hyperlink"
                                    },
                                    {
                                        "data": {},
                                        "marks": [
                                            {
                                                "type": "italic"
                                            }
                                        ],
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
                            "block": [
                                {
                                    "sys": {
                                        "id": "2tAtfmy3oYtiafhfBojz5r"
                                    },
                                    "__typename": "ReportCallout",
                                    "body": "This is great—it tells you the benefit year, claim balance… [This is] way more info than we get. It tells you what’s going on.",
                                    "colorTheme": "plum",
                                    "variant": "quote",
                                    "attribution": "User interview",
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
                        "id": "3MeTGrzx4VSP8YxyXKiFwB"
                    },
                    "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3MeTGrzx4VSP8YxyXKiFwB/096b918f1086861be707da7639814b51/Person-1-Scene-3B.png",
                    "width": 4000,
                    "height": 2250,
                    "title": "PBR-Cali-Sketch-Simple",
                    "description": "An illustration of a young white woman sitting at a computer. \n"
                },
                "contextIllustration": {
                    "sys": {
                        "id": "2LbcxfIEF3BYoGmsCmqcGY"
                    },
                    "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2LbcxfIEF3BYoGmsCmqcGY/567ea79068198fd6f5032321783de675/Person-1-Scene-3.png",
                    "width": 4000,
                    "height": 2250,
                    "title": "PBR-Cali-Sketch-Context",
                    "description": "An illustration of a young white woman sitting at a computer in the library. There are two computers to her left, and a Black man uses one of them. "
                },
                "featuredCallOut": {
                    "sys": {
                        "id": "4jXVsum9SGzmfInkcHPbUz"
                    },
                    "body": "Over 5 million unique pageviews",
                    "colorTheme": "plum",
                    "variant": "statistic",
                    "attribution": null,
                    "attributionRole": null
                }
            }
        ]
    },
    "items": [
        {
            "id": "365Mp6KtlmDLodBEJq6P71",
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
        {
            "id": "6LZwaz7MD5DsFxZ2JvoVTG",
            "__typename": "ReportIllustrationOverlayStory",
            "sys": {
                "id": "6LZwaz7MD5DsFxZ2JvoVTG"
            },
            "title": "Building Massachusetts’ first Paid Family and Medical Leave program",
            "hideStory": false,
            "anchor": "mass-pfml",
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
                                    "value": "The Commonwealth of Massachusetts tapped Nava to support the launch of their brand new Paid Family Medical Leave (PFML) program, which guarantees paid time away from work for major life events. Since we launched in January 2021, the program has paid out $1 billion in benefits.",
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
                                    "value": "Nava partnered with the Commonwealth of Massachusetts to support the launch of their brand new PFML program, which guarantees paid time away from work to care for a new baby, a sick loved one, or one’s own illness. ",
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
                                    "value": "In just 13 months, we designed, tested, and built a brand new digital service to help Massachusetts workers as they apply for and manage benefits. Since we launched in January 2021, the program has paid out $1 billion in benefits. We built digital tools for claimants and employers using the program to simplify managing paid leave across the board.",
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
                                    "value": "In tandem with this work, we built the API integration layer to connect multiple state systems with ",
                                    "marks": [],
                                    "data": {}
                                },
                                {
                                    "nodeType": "hyperlink",
                                    "data": {
                                        "uri": "http://paidleave.mass.gov"
                                    },
                                    "content": [
                                        {
                                            "nodeType": "text",
                                            "value": "paidleave.mass.gov",
                                            "marks": [],
                                            "data": {}
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "text",
                                    "value": " and other paid family and medical leave systems. In our shared long-term vision, Massachusetts workers, families, and employers will be able to confidently navigate life’s critical moments because ",
                                    "marks": [],
                                    "data": {}
                                },
                                {
                                    "nodeType": "hyperlink",
                                    "data": {
                                        "uri": "http://paidleave.mass.gov"
                                    },
                                    "content": [
                                        {
                                            "nodeType": "text",
                                            "value": "paidleave.mass.gov",
                                            "marks": [],
                                            "data": {}
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "text",
                                    "value": "’s personalized support makes managing paid leave simple.",
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
                                    "value": "Iterating by observing user needs",
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
                                    "value": "We approached building this program by using pilots to continuously test our products with real users. In a pilot, we incrementally developed pieces of the end-to-end experience and tested them with real users (pilot participants) before the service launches to the public. This helped us identify and mitigate risks early on to ensure that our final product worked for users, integrated with different systems, and collected the information needed to meet program goals. In a multi-vendor environment with a strict legislative deadline, these pilots also served as milestones for teams to align on so we could collaboratively build and test new features. ",
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
                                        "id": "7rFwakhwe0ow7XqmW8iSfK",
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
                                    "value": "For our first pilot, we designed and built an application that allowed claimants to create an account, log in, verify an account, reset the password, log out, and take the first steps toward creating a claim. We also tested a key technical integration with the Massachusetts' Department of Revenue (DOR), which provides contribution and wage data that is essential to determining a claimant's eligibility. In the second and third pilots, we expanded the application to allow claimants to submit an application and ensured that Massachusetts administrators received the complete and accurate data needed to adjudicate each claim.",
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
                                    "value": "Building the application over multiple pilots allowed us to test it with a diverse set of participants and to ensure its simplicity and ease for everyone. In one testing session, a participant mistyped their email address when attempting to reset their password, preventing them from logging in. Once we discovered this loophole, we updated the flow to allow users to fix a mistyped email address and still successfully reset their password. ",
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
                                    "value": "This was important because we learned from other states with PFML programs that password reset issues are a primary cause of high call volume at call centers. We knew that creating a simple self-service reset password option would reduce the burden on the call center, saving staff time and resources.",
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
                                    "value": "Pilots let us discover such unforeseen and unpredictable errors in a low-risk environment, before they become a barrier to claimants and a burden to staff. In these pilots, we were able to build and test the first steps of the account creation process—an essential part of the user experience—with real users. ",
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
                                    "value": "To learn more, read our ",
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
                                        "uri": "https://www.navapbc.com/case-studies/using-a-pilot-to-minimize-risk-and-rapidly-deliver-new-services"
                                    },
                                    "content": [
                                        {
                                            "nodeType": "text",
                                            "value": "case study",
                                            "marks": [
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
                                    "id": "7rFwakhwe0ow7XqmW8iSfK"
                                },
                                "__typename": "ReportCallout",
                                "body": "We designed, tested, and built a new digital service in just 13 months",
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
                    "id": "4ZB56Ie7tsYzlYCLX5XO1P"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/4ZB56Ie7tsYzlYCLX5XO1P/c46800340ad2fb0c27e1cdceacdf91ce/Person-1-Scene-2B.png",
                "width": 4000,
                "height": 2250,
                "title": "PBR-PFML-Sketch-Simple",
                "description": "An illustration of a white woman smiling and sitting on a couch."
            },
            "contextIllustration": {
                "sys": {
                    "id": "3bqvEPQZqnmEhVr10KqLqL"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3bqvEPQZqnmEhVr10KqLqL/fd9b69c1c778658776d522d5ed104796/Person-1-Scene-2.png",
                "width": 4000,
                "height": 2250,
                "title": "PBR-PFML-Sketch-Context",
                "description": "An illustration of a white woman smiling and sitting on a couch. She is joined by her female partner and older father, who is using an oxygen machine."
            },
            "featuredCallOut": {
                "sys": {
                    "id": "3uH0n6tWuHEp1gNJoXJe0W"
                },
                "body": "$1 billion in paid time off",
                "colorTheme": "plum",
                "variant": "statistic",
                "attribution": null,
                "attributionRole": null
            }
        },
        {
            "id": "74GmWUFqgtmo10AjjSA4Vn",
            "__typename": "ReportIllustrationOverlayStory",
            "sys": {
                "id": "74GmWUFqgtmo10AjjSA4Vn"
            },
            "title": "Tracking unemployment claims for Californians in a crisis",
            "hideStory": false,
            "anchor": "california-unemployment",
            "intro": {
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
                                    "value": "Amidst an explosion of unemployment claims during the pandemic, the California Employment Development Department (EDD) brought us in ",
                                    "marks": [],
                                    "data": {}
                                },
                                {
                                    "nodeType": "text",
                                    "value": "to help Californians see where their unemployment claim stood.",
                                    "marks": [],
                                    "data": {}
                                },
                                {
                                    "nodeType": "text",
                                    "value": " In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. ",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
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
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "Online claims trackers communicate to claimants where their unemployment or healthcare claim stands. They can be an intuitive, useful tool for public benefit programs to adopt. Claims trackers are a familiar feature in the private sector, from package tracking to pizza delivery apps. In an increasingly digital world, many have come to expect these kinds of self-service experiences in the public benefits space. ",
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
                                    "value": "The California Employment Development Department (EDD) brought Nava in to help build a claims tracker tool amidst the explosion of claims during the pandemic. Nava aimed to build on existing systems and release a minimum viable product to solve a specific problem during a crisis. We prioritized guiding claimants with personalized information, building trust through transparency, and striving for simplicity.",
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
                                    "value": "User-centered research reveals that claimants need detailed instructions",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "heading-4"
                        },
                        {
                            "data": {},
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "Designing public benefit claims trackers means conveying information to claimants about complex and at times confusing processes. Based on our research, claimants want step-by-step instructions that are tailored to their specific situations. If no action is required at any given step, claimants need to know that. For example, the Claim Status Tracker page we designed for California included a Claim Status section summarizing the claimants’ overall status with a list of next steps for both the claimant and EDD. Below, the Claim Details section culls disparate claim data, making it easier for claimants to understand how their next steps and claim data relate.",
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
                                    "value": "As a claimant we interviewed said, “I want some more details...it’s most frustrating when you log on or something has changed or your account has been flagged or put on hold...and you just kind of have no clue.”",
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
                                    "value": "Building transparency with claims status updates",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "heading-4"
                        },
                        {
                            "data": {},
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "Claimants also want to know why decisions were made and who is responsible for next steps. ",
                                    "nodeType": "text"
                                },
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "We found in our research that one of their biggest frustrations was encountering a seemingly endless “pending” status across payments on continued claims.",
                                    "nodeType": "text"
                                },
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": " Based on the idea that providing additional context would help to reduce calls to EDD staff, we set out to understand the many different scenarios that can lead to the “pending” status. We found that we needed to  provide a more detailed status summary that tells claimants why their status is pending and indicates the current step in the process. ",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "paragraph"
                        },
                        {
                            "data": {
                                "target": {
                                    "sys": {
                                        "id": "2tAtfmy3oYtiafhfBojz5r",
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
                                    "value": "We worked with the EDD to create a system that would provide detailed status information for some of the most common reasons for a pending status, while claims pending for another reason would still display a generic status summary. An example of a more detailed status would be \"Pending eligibility determination: Phone interview scheduled.” We designed this system so that after initial launch, it could be rapidly iterated to keep adding detailed statuses to cover more scenarios. ",
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
                                    "value": "In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. We saw many examples on social media of claimants noticing the claim status tracker and referencing it as a source of truth about their claim. As one user said when we were testing an earlier prototype, “This is great—it tells you the benefit year, claim balance… [This is] way more info than we get. It tells you what’s going on.”",
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
                                    "marks": [
                                        {
                                            "type": "italic"
                                        }
                                    ],
                                    "value": "To learn more, read our ",
                                    "nodeType": "text"
                                },
                                {
                                    "data": {
                                        "uri": "https://www.navapbc.com/insights/building-public-benefit-claims-trackers-across-states"
                                    },
                                    "content": [
                                        {
                                            "data": {},
                                            "marks": [
                                                {
                                                    "type": "underline"
                                                },
                                                {
                                                    "type": "italic"
                                                }
                                            ],
                                            "value": "Insights article",
                                            "nodeType": "text"
                                        }
                                    ],
                                    "nodeType": "hyperlink"
                                },
                                {
                                    "data": {},
                                    "marks": [
                                        {
                                            "type": "italic"
                                        }
                                    ],
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
                        "block": [
                            {
                                "sys": {
                                    "id": "2tAtfmy3oYtiafhfBojz5r"
                                },
                                "__typename": "ReportCallout",
                                "body": "This is great—it tells you the benefit year, claim balance… [This is] way more info than we get. It tells you what’s going on.",
                                "colorTheme": "plum",
                                "variant": "quote",
                                "attribution": "User interview",
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
                    "id": "3MeTGrzx4VSP8YxyXKiFwB"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3MeTGrzx4VSP8YxyXKiFwB/096b918f1086861be707da7639814b51/Person-1-Scene-3B.png",
                "width": 4000,
                "height": 2250,
                "title": "PBR-Cali-Sketch-Simple",
                "description": "An illustration of a young white woman sitting at a computer. \n"
            },
            "contextIllustration": {
                "sys": {
                    "id": "2LbcxfIEF3BYoGmsCmqcGY"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2LbcxfIEF3BYoGmsCmqcGY/567ea79068198fd6f5032321783de675/Person-1-Scene-3.png",
                "width": 4000,
                "height": 2250,
                "title": "PBR-Cali-Sketch-Context",
                "description": "An illustration of a young white woman sitting at a computer in the library. There are two computers to her left, and a Black man uses one of them. "
            },
            "featuredCallOut": {
                "sys": {
                    "id": "4jXVsum9SGzmfInkcHPbUz"
                },
                "body": "Over 5 million unique pageviews",
                "colorTheme": "plum",
                "variant": "statistic",
                "attribution": null,
                "attributionRole": null
            }
        }
    ]
}};
