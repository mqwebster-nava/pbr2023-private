import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import TableOfContents from './TableOfContents';

export default {
  title: 'Report Blocks/Custom Section/(2021)Table Of Contents',
  component: TableOfContents,
  args: {
    title: 'any' as unknown as any,
    anchor: 'any' as unknown as any,
    contentBlocks: 'any' as unknown as any
  },
} as ComponentMeta<typeof TableOfContents>;

const Template: ComponentStory<typeof TableOfContents> = (args) => (
  <TableOfContents {...args} />
);

export const Default = Template.bind({});
Default.args ={
  "title": "Table of contents",
  "anchor": "toc",
  "contentBlocks": [
      {
          "id": "3SO3qwB3VQtT9MCozqJoQ",
          "__typename": "ReportSectionCustom",
          "sys": {
              "id": "3SO3qwB3VQtT9MCozqJoQ"
          },
          "title": "Table of contents",
          "anchor": "toc",
          "type": "Table of Contents",
          "colorTheme": "purple",
          "richBody": null,
          "signaturesCollection": {
              "items": []
          },
          "items": []
      },
      {
          "id": "1QcgyoHRX2l1KsCm6bafHC",
          "__typename": "ReportSectionCustom",
          "sys": {
              "id": "1QcgyoHRX2l1KsCm6bafHC"
          },
          "title": "Letter from leadership",
          "anchor": "intro",
          "type": "Introduction 2021",
          "colorTheme": "purple",
          "richBody": {
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
                                  "value": "Equity has become a huge part of the national conversation in the last few years. As our country continues to handle the fallout of a global pandemic, skyrocketing income inequality, a historic rollback of civil rights, and the ongoing climate crisis, we find hope in progress. In 2021, President Biden signed executive orders on transforming the federal customer experience to rebuild trust in government, as well as advancing racial equity and support for underserved communities through key programs. ",
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
                                  "value": "The idea of equity—closing social and economic disparities—is how we’ve approached building effective, accessible government services since our founding in 2015. It’s a common value we share with organizations in the public technology sector we admire and work alongside. We’ve long believed that valuing equity can help institutions withstand disasters and shocks to the system. Whether it’s a pandemic or the infant formula shortage, the only way for public services to respond to these crises is by building equity into their foundations. These principles have long guided our work with government partners to build and improve public services.",
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
                                  "value": "Alongside our government partners, we launched a deeply human-centered service for Massachusetts’ first Paid Family and Medical Leave program, disbursing over $1 billion dollars in benefits to people experiencing important life events such as a pregnancy or a sick loved one. We radically reduced the time it takes for Veterans Affairs caseworkers to process some disability claims, reducing waiting times for Veterans from 80 to 100 days to 3 to 6. Our teams continue to partner with the Centers for Medicare & Medicaid Services (CMS) to better serve 60+ million Medicare beneficiaries.",
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
                                      "id": "2X7s7RGVKlJpcI3dt8FM8l",
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
                                  "value": "Our commitment to building equity also helped us expand into new program areas. The Centers for Disease Control and Prevention recently ",
                                  "marks": [],
                                  "data": {}
                              },
                              {
                                  "nodeType": "hyperlink",
                                  "data": {
                                      "uri": "https://www.navapbc.com/news/contract-cdc-pandemic-ready-systems"
                                  },
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "tapped Nava",
                                          "marks": [
                                              {
                                                  "type": "underline"
                                              }
                                          ],
                                          "data": {}
                                      }
                                  ]
                              },
                              {
                                  "nodeType": "text",
                                  "value": " to design, build, and operate ReportStream, a critical data pipeline for U.S. public health infrastructure that aggregates information on COVID-19, monkeypox, and other reportable diseases. We’re working with the Department of Labor and New Jersey to develop strategies to continuously improve the nation’s unemployment insurance systems, as we face a potential recession and unemployment spike on the horizon. Schmidt Futures ",
                                  "marks": [],
                                  "data": {}
                              },
                              {
                                  "nodeType": "hyperlink",
                                  "data": {
                                      "uri": "https://www.navapbc.com/news/nava-receives-grant-schmidt-futures"
                                  },
                                  "content": [
                                      {
                                          "nodeType": "text",
                                          "value": "selected Nava",
                                          "marks": [
                                              {
                                                  "type": "underline"
                                              }
                                          ],
                                          "data": {}
                                      }
                                  ]
                              },
                              {
                                  "nodeType": "text",
                                  "value": " to expand access with Montana's Special Supplemental Nutrition Program for Women, Infants, and Children (WIC) program by prototyping an eligibility screener and related API experience, making it easier for people to apply for and keep nutritional services for their babies and toddlers.",
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
                                  "value": "Nava’s teams made these strides despite real challenges. Our fully distributed team lives in states from coast to coast—Nava employees nursed COVID cases, evacuated their homes when the Texas power grid failed, were impacted by the war in Ukraine, and hugged their loved ones after the senseless mass shootings in Uvalde, Buffalo, and more. In these moments, our shared vision of strong public institutions that continuously meet people’s needs became more clear and urgent. We work for what we all owe each other: to ensure that even in times of crisis, that the promises our institutions make are kept, and that those who are most at risk are supported.",
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
                                  "value": "A few months ago, we gathered at our first offsite in three years, where Nava employees across the nation aligned to our vision and celebrated our collective work. It was energizing and affirming. We know why we’re here, and what work we came here to do. We commit ourselves to this challenging and rewarding work rooted in a pursuit of equity, and we hope you will join us as well.",
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
                                  "id": "2X7s7RGVKlJpcI3dt8FM8l"
                              },
                              "__typename": "ReportCallout",
                              "body": "We’ve long believed that valuing equity can help institutions withstand disasters and shocks to the system.",
                              "colorTheme": "purple",
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
          "signaturesCollection": {
              "items": [
                  {
                      "sys": {
                          "id": "5vlyFCJKyjW2J8EdIVgPy2"
                      },
                      "name": "Rohan Bhobe",
                      "title": "Chief Executive Officer",
                      "titleAbbreviation": "CEO",
                      "width": 136,
                      "image": {
                          "sys": {
                              "id": "5MM3t87HEihFD9BGDbea5X"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5MM3t87HEihFD9BGDbea5X/0bceba0fb89034e4e6f775d0982e2fc9/Rohan-v1.png",
                          "width": 417,
                          "height": 188,
                          "title": "Rohan Signature 2021",
                          "description": ""
                      }
                  },
                  {
                      "sys": {
                          "id": "76JiNEMGpbzhBqEErNU95y"
                      },
                      "name": "Sha Hwang",
                      "title": "Chief Operating Officer",
                      "titleAbbreviation": "COO",
                      "width": 158,
                      "image": {
                          "sys": {
                              "id": "1Wl2CnI1pDBt75xTErufPp"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1Wl2CnI1pDBt75xTErufPp/cb74ed0b38f5f29cb601c227cb571eff/Sha-v1.png",
                          "width": 417,
                          "height": 188,
                          "title": "Sha Signature 2021",
                          "description": ""
                      }
                  },
                  {
                      "sys": {
                          "id": "23Kcfm0cDSkzwMzgRFoCbP"
                      },
                      "name": "Jodi Leo",
                      "title": "Chief Delivery Officer",
                      "titleAbbreviation": "CDO",
                      "width": 150,
                      "image": {
                          "sys": {
                              "id": "2fMk4EQBDbboNTSnpKmXGg"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2fMk4EQBDbboNTSnpKmXGg/e4d76260855f20c67286479ab2bc64d4/Jodi-v1.png",
                          "width": 417,
                          "height": 188,
                          "title": "Jodi Signature 2021",
                          "description": ""
                      }
                  },
                  {
                      "sys": {
                          "id": "k2wuhYGNm00U0M2zwrSAm"
                      },
                      "name": "Darcy Williamson",
                      "title": "Chief Financial Officer",
                      "titleAbbreviation": "CFO",
                      "width": 150,
                      "image": {
                          "sys": {
                              "id": "3zyedkwYJjvKXvcIMpxxLp"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3zyedkwYJjvKXvcIMpxxLp/62ce30b49b7d2a6c8c9bcab290e2243f/Dacrcy-v1.png",
                          "width": 417,
                          "height": 188,
                          "title": "Darcy Williamson 2021",
                          "description": ""
                      }
                  }
              ]
          },
          "items": [
              {
                  "id": "5vlyFCJKyjW2J8EdIVgPy2",
                  "sys": {
                      "id": "5vlyFCJKyjW2J8EdIVgPy2"
                  },
                  "name": "Rohan Bhobe",
                  "title": "Chief Executive Officer",
                  "titleAbbreviation": "CEO",
                  "width": 136,
                  "image": {
                      "sys": {
                          "id": "5MM3t87HEihFD9BGDbea5X"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5MM3t87HEihFD9BGDbea5X/0bceba0fb89034e4e6f775d0982e2fc9/Rohan-v1.png",
                      "width": 417,
                      "height": 188,
                      "title": "Rohan Signature 2021",
                      "description": ""
                  }
              },
              {
                  "id": "76JiNEMGpbzhBqEErNU95y",
                  "sys": {
                      "id": "76JiNEMGpbzhBqEErNU95y"
                  },
                  "name": "Sha Hwang",
                  "title": "Chief Operating Officer",
                  "titleAbbreviation": "COO",
                  "width": 158,
                  "image": {
                      "sys": {
                          "id": "1Wl2CnI1pDBt75xTErufPp"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1Wl2CnI1pDBt75xTErufPp/cb74ed0b38f5f29cb601c227cb571eff/Sha-v1.png",
                      "width": 417,
                      "height": 188,
                      "title": "Sha Signature 2021",
                      "description": ""
                  }
              },
              {
                  "id": "23Kcfm0cDSkzwMzgRFoCbP",
                  "sys": {
                      "id": "23Kcfm0cDSkzwMzgRFoCbP"
                  },
                  "name": "Jodi Leo",
                  "title": "Chief Delivery Officer",
                  "titleAbbreviation": "CDO",
                  "width": 150,
                  "image": {
                      "sys": {
                          "id": "2fMk4EQBDbboNTSnpKmXGg"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2fMk4EQBDbboNTSnpKmXGg/e4d76260855f20c67286479ab2bc64d4/Jodi-v1.png",
                      "width": 417,
                      "height": 188,
                      "title": "Jodi Signature 2021",
                      "description": ""
                  }
              },
              {
                  "id": "k2wuhYGNm00U0M2zwrSAm",
                  "sys": {
                      "id": "k2wuhYGNm00U0M2zwrSAm"
                  },
                  "name": "Darcy Williamson",
                  "title": "Chief Financial Officer",
                  "titleAbbreviation": "CFO",
                  "width": 150,
                  "image": {
                      "sys": {
                          "id": "3zyedkwYJjvKXvcIMpxxLp"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3zyedkwYJjvKXvcIMpxxLp/62ce30b49b7d2a6c8c9bcab290e2243f/Dacrcy-v1.png",
                      "width": 417,
                      "height": 188,
                      "title": "Darcy Williamson 2021",
                      "description": ""
                  }
              }
          ]
      },
      {
          "id": "2i91vq1MGeNMFu56UvDu5x",
          "__typename": "ReportIllustrationOverlaySubsection",
          "sys": {
              "id": "2i91vq1MGeNMFu56UvDu5x"
          },
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
                                              "value": "Veterans who file claims to receive benefits can get stuck in a waiting pattern, sometimes preventing them from receiving critical healthcare. We’re working with the U.S. Department of Veterans Affairs (VA) to build tools that reduce the amount of time it takes to process a Veteran’s disability benefits claim. ",
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
                                              "value": "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs (VA) to build tools that reduce the amount of time it takes to process a Veteran’s disability benefits claim. Together with the VA’s Office of the Chief Technology Officer’s (OCTO) Benefits Delivery Team, we developed a prototype to speed up the handlings of some of these claims. ",
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
                      },
                      "linkedPostUrl": "https://www.navapbc.com/case-studies/small-pilots-prototype-benefits-claim-tracker"
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
                                              "value": "For our first pilot, we designed and built an application that allowed claimants to create an account, log in, verify an account, reset the password, log out, and take the first steps toward creating a claim. We also tested a key technical integration with the Massachusetts’ Department of Revenue (DOR), which provides contribution and wage data that is essential to determining a claimant’s eligibility. In the second and third pilots, we expanded the application to allow claimants to submit an application and ensured that Massachusetts administrators received the complete and accurate data needed to adjudicate each claim.",
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
                      },
                      "linkedPostUrl": "https://www.navapbc.com/case-studies/using-a-pilot-to-minimize-risk-and-rapidly-deliver-new-services"
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
                              "data": {},
                              "content": [
                                  {
                                      "data": {},
                                      "content": [
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "Amidst an explosion of unemployment claims during the pandemic, the California Employment Development Department (EDD) brought us in ",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "to help Californians see where their unemployment claim stood.",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": " In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. ",
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
                                              "value": "Online claims trackers communicate to claimants where their unemployment or healthcare claim stands. They can be an intuitive, useful tool for public benefit programs to adopt. Claims trackers are a familiar feature in the private sector, from package tracking to pizza delivery apps. In an increasingly digital world, many have come to expect these kinds of self-service experiences in the public benefits space. ",
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
                                              "value": "The California Employment Development Department (EDD) brought Nava in to help build a claims tracker tool amidst the explosion of claims during the pandemic. Nava aimed to build on existing systems and release a minimum viable product to solve a specific problem during a crisis. We prioritized guiding claimants with personalized information, building trust through transparency, and striving for simplicity.",
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
                                              "value": "User-centered research reveals that claimants need detailed instructions",
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
                                              "value": "Designing public benefit claims trackers means conveying information to claimants about complex and at times confusing processes. Based on our research, claimants want step-by-step instructions that are tailored to their specific situations. If no action is required at any given step, claimants need to know that. For example, the Claim Status Tracker page we designed for California included a Claim Status section summarizing the claimants’ overall status with a list of next steps for both the claimant and EDD. Below, the Claim Details section culls disparate claim data, making it easier for claimants to understand how their next steps and claim data relate.",
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
                                              "value": "As a claimant we interviewed said, “I want some more details...it’s most frustrating when you log on or something has changed or your account has been flagged or put on hold...and you just kind of have no clue.”",
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
                                              "value": "Building transparency with claims status updates",
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
                                              "value": "Claimants also want to know why decisions were made and who is responsible for next steps. We found in our research that one of their biggest frustrations was encountering a seemingly endless “pending” status across payments on continued claims. Based on the idea that providing additional context would help to reduce calls to EDD staff, we set out to understand the many different scenarios that can lead to the “pending” status. We found that we needed to  provide a more detailed status summary that tells claimants why their status is pending and indicates the current step in the process. ",
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
                                                  "id": "2tAtfmy3oYtiafhfBojz5r",
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
                                              "value": "We worked with the EDD to create a system that would provide detailed status information for some of the most common reasons for a pending status, while claims pending for another reason would still display a generic status summary. An example of a more detailed status would be “Pending eligibility determination: Phone interview scheduled.” We designed this system so that after initial launch, it could be rapidly iterated to keep adding detailed statuses to cover more scenarios. ",
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
                                              "value": "In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. We saw many examples on social media of claimants noticing the claim status tracker and referencing it as a source of truth about their claim. As one user said when we were testing an earlier prototype, “This is great—it tells you the benefit year, claim balance… [This is] way more info than we get. It tells you what’s going on.”",
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
                      },
                      "linkedPostUrl": "https://www.navapbc.com/insights/building-public-benefit-claims-trackers-across-states"
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
                                          "value": "Veterans who file claims to receive benefits can get stuck in a waiting pattern, sometimes preventing them from receiving critical healthcare. We’re working with the U.S. Department of Veterans Affairs (VA) to build tools that reduce the amount of time it takes to process a Veteran’s disability benefits claim. ",
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
                                          "value": "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs (VA) to build tools that reduce the amount of time it takes to process a Veteran’s disability benefits claim. Together with the VA’s Office of the Chief Technology Officer’s (OCTO) Benefits Delivery Team, we developed a prototype to speed up the handlings of some of these claims. ",
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
                  },
                  "linkedPostUrl": "https://www.navapbc.com/case-studies/small-pilots-prototype-benefits-claim-tracker"
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
                                          "value": "For our first pilot, we designed and built an application that allowed claimants to create an account, log in, verify an account, reset the password, log out, and take the first steps toward creating a claim. We also tested a key technical integration with the Massachusetts’ Department of Revenue (DOR), which provides contribution and wage data that is essential to determining a claimant’s eligibility. In the second and third pilots, we expanded the application to allow claimants to submit an application and ensured that Massachusetts administrators received the complete and accurate data needed to adjudicate each claim.",
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
                  },
                  "linkedPostUrl": "https://www.navapbc.com/case-studies/using-a-pilot-to-minimize-risk-and-rapidly-deliver-new-services"
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
                          "data": {},
                          "content": [
                              {
                                  "data": {},
                                  "content": [
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "Amidst an explosion of unemployment claims during the pandemic, the California Employment Development Department (EDD) brought us in ",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "to help Californians see where their unemployment claim stood.",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": " In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. ",
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
                                          "value": "Online claims trackers communicate to claimants where their unemployment or healthcare claim stands. They can be an intuitive, useful tool for public benefit programs to adopt. Claims trackers are a familiar feature in the private sector, from package tracking to pizza delivery apps. In an increasingly digital world, many have come to expect these kinds of self-service experiences in the public benefits space. ",
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
                                          "value": "The California Employment Development Department (EDD) brought Nava in to help build a claims tracker tool amidst the explosion of claims during the pandemic. Nava aimed to build on existing systems and release a minimum viable product to solve a specific problem during a crisis. We prioritized guiding claimants with personalized information, building trust through transparency, and striving for simplicity.",
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
                                          "value": "User-centered research reveals that claimants need detailed instructions",
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
                                          "value": "Designing public benefit claims trackers means conveying information to claimants about complex and at times confusing processes. Based on our research, claimants want step-by-step instructions that are tailored to their specific situations. If no action is required at any given step, claimants need to know that. For example, the Claim Status Tracker page we designed for California included a Claim Status section summarizing the claimants’ overall status with a list of next steps for both the claimant and EDD. Below, the Claim Details section culls disparate claim data, making it easier for claimants to understand how their next steps and claim data relate.",
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
                                          "value": "As a claimant we interviewed said, “I want some more details...it’s most frustrating when you log on or something has changed or your account has been flagged or put on hold...and you just kind of have no clue.”",
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
                                          "value": "Building transparency with claims status updates",
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
                                          "value": "Claimants also want to know why decisions were made and who is responsible for next steps. We found in our research that one of their biggest frustrations was encountering a seemingly endless “pending” status across payments on continued claims. Based on the idea that providing additional context would help to reduce calls to EDD staff, we set out to understand the many different scenarios that can lead to the “pending” status. We found that we needed to  provide a more detailed status summary that tells claimants why their status is pending and indicates the current step in the process. ",
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
                                              "id": "2tAtfmy3oYtiafhfBojz5r",
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
                                          "value": "We worked with the EDD to create a system that would provide detailed status information for some of the most common reasons for a pending status, while claims pending for another reason would still display a generic status summary. An example of a more detailed status would be “Pending eligibility determination: Phone interview scheduled.” We designed this system so that after initial launch, it could be rapidly iterated to keep adding detailed statuses to cover more scenarios. ",
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
                                          "value": "In the first three weeks after launch, there were over 5 million unique pageviews to the California claims status tracker. We saw many examples on social media of claimants noticing the claim status tracker and referencing it as a source of truth about their claim. As one user said when we were testing an earlier prototype, “This is great—it tells you the benefit year, claim balance… [This is] way more info than we get. It tells you what’s going on.”",
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
                  },
                  "linkedPostUrl": "https://www.navapbc.com/insights/building-public-benefit-claims-trackers-across-states"
              }
          ]
      },
      {
          "id": "vPFVYcmzaMzRgoXeYcMbk",
          "__typename": "ReportIllustrationOverlaySubsection",
          "sys": {
              "id": "vPFVYcmzaMzRgoXeYcMbk"
          },
          "title": "Accessing accessibility",
          "anchor": "accessibility",
          "body": "Having a disability should never prevent someone from accessing government services. At Nava, we prioritize accessibility at every step—including testing with diverse users—when designing services with government agencies.",
          "colorTheme": "sage",
          "themeNum": 2,
          "storiesCollection": {
              "items": [
                  {
                      "__typename": "ReportIllustrationOverlayStory",
                      "sys": {
                          "id": "2bgboLgwTYCCnU523mBiy1"
                      },
                      "title": "Creating an online application for Medicaid for the aged, blind and disabled",
                      "hideStory": false,
                      "anchor": "medicaid-abd",
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
                                              "value": "Everyone should be able to easily access public services, including the one in four Americans living with disabilities. That’s why we collaborated with ",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "with a state that serves nearly 650,000 people",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": " to create an accessible online application for their Medicaid for the aged, blind, and disabled (ABD) supplement. ",
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
                              "data": {},
                              "content": [
                                  {
                                      "data": {},
                                      "content": [
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "Building easy-to-use and accessible government services for all requires that everyone—including people living with disabilities—can access a service’s information and functionality. Limited sight, a cognitive impairment, or inability to grip a mouse should not interfere with someone’s ability to access digital services. ",
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
                                              "value": "Nava created an online form for a state’s Medicaid for the aged, blind, and disabled (ABD) supplement. Previously, people could only submit an application through the mail or in person. Through our online application pilot, people now have the option to fill out this form over the phone with assistance from call center staff. ",
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
                                              "value": "Given the nature of this project, our goal was to make the application accessible and available for all people in the state, on their own devices. As with any federally funded project, we had to meet Section 508 requirements, which mandates that federal agencies are accessible to all.",
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
                                                      "type": "bold"
                                                  }
                                              ],
                                              "value": "Testing for accessibility should start at the very beginning",
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
                                              "value": "While digital accessibility has gained more prominence in the ",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {
                                                  "uri": "https://www.justice.gov/opa/pr/justice-department-issues-web-accessibility-guidance-under-americans-disabilities-act"
                                              },
                                              "content": [
                                                  {
                                                      "data": {},
                                                      "marks": [
                                                          {
                                                              "type": "underline"
                                                          }
                                                      ],
                                                      "value": "last few years",
                                                      "nodeType": "text"
                                                  }
                                              ],
                                              "nodeType": "hyperlink"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": ", product teams typically conduct a general accessibility audit after they build a product. This is often completed by one person going through the application on their own using an ",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {
                                                  "uri": "https://accessibility.18f.gov/checklist/"
                                              },
                                              "content": [
                                                  {
                                                      "data": {},
                                                      "marks": [
                                                          {
                                                              "type": "underline"
                                                          }
                                                      ],
                                                      "value": "accessibility checklist",
                                                      "nodeType": "text"
                                                  }
                                              ],
                                              "nodeType": "hyperlink"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": ". Engineering teams then receive a list of high level accessibility errors to fix in a short amount of time. ",
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
                                              "value": "After working toward launching a product for months, this list can seem like a headache. It can also delay a project if parts need to be rebuilt or redesigned to meet accessibility requirements. It may not even be realistic for all of the issues to get fixed before launch, and in the worst cases, a team will release a product that many people can’t actually use.  ",
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
                                              "value": "We believe including some level of accessibility testing and reviewing throughout the designing, building, and testing of a project—instead of waiting until the end—will always lead to a more accessible end product. Something as simple as adding an accessibility plugin to the team’s work process could help with catching many issues before the project goes to the next phase.",
                                              "nodeType": "text"
                                          }
                                      ],
                                      "nodeType": "paragraph"
                                  },
                                  {
                                      "data": {
                                          "target": {
                                              "sys": {
                                                  "id": "4W9FSUvfsW2Q1eNt9CGril",
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
                                              "marks": [
                                                  {
                                                      "type": "bold"
                                                  }
                                              ],
                                              "value": "Regular conversations about accessibility builds awareness",
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
                                              "value": "Because accessibility is a complex issue, it’s essential that testers, engineers, and designers communicate while developing a new product. While working with our state partners, we realized that sharing what we learned with all stakeholders is another key component to promoting accessibility. Through regular meetings and check-ins with all members of the development team, we were able to create a shared understanding of common accessibility failures and how we can scan our code for potential accessibility bugs.",
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
                                              "value": "Our experience creating this ABD online application demonstrated the benefits of implementing an agile approach to accessibility testing. Bringing accessibility into every step of the build process across all members of the team creates more accountability and awareness of why these issues matter. By regularly testing for accessibility, we helped ensure that the process of applying for ABD benefits truly meets the needs of all, regardless of disability status.",
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
                                              "id": "4W9FSUvfsW2Q1eNt9CGril"
                                          },
                                          "__typename": "ReportCallout",
                                          "body": "I was able to catch a lot more issues before the project got all the way to the end, when I wouldn’t have had much time to test.\n",
                                          "colorTheme": "sage",
                                          "variant": "quote",
                                          "attribution": "Julia Maille",
                                          "attributionRole": "accessibility expert"
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
                              "id": "7yZ3Pch9Wch7d2N6HqzLQg"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/7yZ3Pch9Wch7d2N6HqzLQg/78813a286943c3330c342e8557360268/Person-2-Scene-1B.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-DOJ-Sketch-Simple",
                          "description": "An illustration of a middle-aged Black man in a wheelchair sitting at a desk. He is typing on a laptop and holding a phone between his ear and shoulder. "
                      },
                      "contextIllustration": {
                          "sys": {
                              "id": "2bwEApUEr9ptcItYYW7Gkx"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2bwEApUEr9ptcItYYW7Gkx/e09c4869171dd2a59661a6898d0f50d7/Person-2-Scene-1.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-DOJ-Sketch-Context",
                          "description": "An illustration of a middle-aged Black man in a wheelchair sitting at a desk. He is typing on a laptop and holding a phone between his ear and shoulder. \n"
                      },
                      "featuredCallOut": {
                          "sys": {
                              "id": "3ebbMvrOWhS9WRWHzeVsRx"
                          },
                          "body": "One in four Americans live with disabilities",
                          "colorTheme": "sage",
                          "variant": "statistic",
                          "attribution": null,
                          "attributionRole": null
                      },
                      "linkedPostUrl": "https://www.navapbc.com/insights/testing-accessibility-designing-building-technology"
                  },
                  {
                      "__typename": "ReportIllustrationOverlayStory",
                      "sys": {
                          "id": "2yvALZEcbT2zW92vDrzQP8"
                      },
                      "title": "Rebuilding ADA.gov to improve accessibility",
                      "hideStory": false,
                      "anchor": "doj-ada",
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
                                              "value": "With 3.5 million annual visitors and 8 million page views, ADA.gov is the federal Civil Rights Division’s most-visited website. The Department of Justice (DOJ) contracted Nava and 18F to redesign ADA.gov, aiming to empower diverse groups of Americans by making ADA rights and regulations easy to find, understand, and share.",
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
                              "data": {},
                              "content": [
                                  {
                                      "data": {},
                                      "content": [
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "The Americans with Disabilities Act (ADA), which Congress passed in 1990, is a federal civil rights law that prohibits discrimination against people with disabilities in everyday activities. Whether it’s organizing lunch at a cafe, or planning or opening a new business, it’s essential that people, businesses, and public offices know their federal civil rights law and responsibilities under the ADA—and above all, are able to easily access that information in real time.",
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
                                              "value": "ADA.gov, with 3.5 million annual visitors and 8 million page views, is the federal Civil Rights Division’s most visited website. Given that, the Department of Justice (DOJ) contracted Nava and 18F to redesign ADA.gov with a vital design practice in mind: how can we help make ADA information and regulations easier to find, understand, and share in order to empower diverse groups of people across the nation? Informed by the Disability Rights Section’s (DRS) vision, we learned how to effectively translate goals into action, use modern web design, craft plain language guidelines, and practice inclusive user research in order to create the best and most accessible final product for those who need this resource most.",
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
                                              "value": "Working with 18F, DOJ released a soft launch of the new site in June 2021 and initiated a more widespread launch the following month. The initial rollout was discrete, with the purpose of getting user feedback and avoiding overexposure and publicity. Users could only find the new site through specific pages on the old site, and it wasn’t searchable on search engines. ",
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
                                              "value": "User research with an eye toward accessibility, representation, authenticity, and usability",
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
                                              "value": "To achieve our desired levels of accessibility and representation, we piloted a program to recruit people with disabilities to test the site. This paved the way for more diverse, accessible, and equitable testing practices, including text-to-speech and both automated and manual tests. ",
                                              "nodeType": "text"
                                          }
                                      ],
                                      "nodeType": "paragraph"
                                  },
                                  {
                                      "data": {
                                          "target": {
                                              "sys": {
                                                  "id": "4atg3qY3YupejiQJIh6iWL",
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
                                              "value": "DOJ, 18F, and Nava worked together throughout the accessibility testing process, making sure we prioritized accommodating people with disabilities. The team set up tests so that another person could assist the tester, for example, and offered to do run-throughs ahead of time. We made sure each round included a mix of people, which taught us that some forms of testing don’t work for everyone. We learned that testing visual designs through design software is not inclusive or accessible for people who are blind. So we used methods such as verbally describing the features and functionality to people with visual impairments where participants described to us common issues they encountered with features like dropdown menus. Receiving continuous feedback was a must, so we created multiple feedback channels to collect data and compare over time.",
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
                                              "value": "Representation and authenticity matter—especially when it comes to testing. We aimed to use images and language we felt illustrated real experiences and reflected diversity in race, ethnicity, age, gender expression, and disability. Focusing on diversity and accuracy, we tested imagery and language to make sure the site represented its audience correctly. ",
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
                                              "value": "With a keen eye toward accessibility, representation, authenticity, and usability, we were able to make ADA.gov the reliable resource that so many have hoped for. As one user put it, “This Beta site is a vast improvement over the current site. I can actually find what I need and go to it quickly and easily.”",
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
                                              "id": "4atg3qY3YupejiQJIh6iWL"
                                          },
                                          "__typename": "ReportCallout",
                                          "body": "This Beta site is a vast improvement over the current site. I can actually find what I need and go to it quickly and easily.",
                                          "colorTheme": "sage",
                                          "variant": "quote",
                                          "attribution": "An ADA.gov user",
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
                              "id": "1Bjk2hyztQ0eZgQPAVSgnk"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1Bjk2hyztQ0eZgQPAVSgnk/c921337c01aa34f82cd884f4b195c5af/Person-2-Scene-2B.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-VA-Sketch-Simple",
                          "description": "An illustration of a middle-aged Black man in a wheelchair. \n"
                      },
                      "contextIllustration": {
                          "sys": {
                              "id": "69sZhiKSrtNhIvEalZ8A0y"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/69sZhiKSrtNhIvEalZ8A0y/96b9088f6eb2a5bb83f884c0ea0b270e/Person-2-Scene-2.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-VA-Sketch-Context",
                          "description": "An illustration of a middle-aged Black man in a wheelchair. He is in front of a staircase with a ramp."
                      },
                      "featuredCallOut": {
                          "sys": {
                              "id": "46JbCCVwcSWcFjoeRhaWwV"
                          },
                          "body": "3.5 million annual visitors to ADA.gov",
                          "colorTheme": "sage",
                          "variant": "statistic",
                          "attribution": null,
                          "attributionRole": null
                      },
                      "linkedPostUrl": "https://www.navapbc.com/insights/bringing-diverse-perspectives-modernize-ada-gov"
                  }
              ]
          },
          "items": [
              {
                  "id": "2bgboLgwTYCCnU523mBiy1",
                  "__typename": "ReportIllustrationOverlayStory",
                  "sys": {
                      "id": "2bgboLgwTYCCnU523mBiy1"
                  },
                  "title": "Creating an online application for Medicaid for the aged, blind and disabled",
                  "hideStory": false,
                  "anchor": "medicaid-abd",
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
                                          "value": "Everyone should be able to easily access public services, including the one in four Americans living with disabilities. That’s why we collaborated with ",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "with a state that serves nearly 650,000 people",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": " to create an accessible online application for their Medicaid for the aged, blind, and disabled (ABD) supplement. ",
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
                          "data": {},
                          "content": [
                              {
                                  "data": {},
                                  "content": [
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "Building easy-to-use and accessible government services for all requires that everyone—including people living with disabilities—can access a service’s information and functionality. Limited sight, a cognitive impairment, or inability to grip a mouse should not interfere with someone’s ability to access digital services. ",
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
                                          "value": "Nava created an online form for a state’s Medicaid for the aged, blind, and disabled (ABD) supplement. Previously, people could only submit an application through the mail or in person. Through our online application pilot, people now have the option to fill out this form over the phone with assistance from call center staff. ",
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
                                          "value": "Given the nature of this project, our goal was to make the application accessible and available for all people in the state, on their own devices. As with any federally funded project, we had to meet Section 508 requirements, which mandates that federal agencies are accessible to all.",
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
                                                  "type": "bold"
                                              }
                                          ],
                                          "value": "Testing for accessibility should start at the very beginning",
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
                                          "value": "While digital accessibility has gained more prominence in the ",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {
                                              "uri": "https://www.justice.gov/opa/pr/justice-department-issues-web-accessibility-guidance-under-americans-disabilities-act"
                                          },
                                          "content": [
                                              {
                                                  "data": {},
                                                  "marks": [
                                                      {
                                                          "type": "underline"
                                                      }
                                                  ],
                                                  "value": "last few years",
                                                  "nodeType": "text"
                                              }
                                          ],
                                          "nodeType": "hyperlink"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": ", product teams typically conduct a general accessibility audit after they build a product. This is often completed by one person going through the application on their own using an ",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {
                                              "uri": "https://accessibility.18f.gov/checklist/"
                                          },
                                          "content": [
                                              {
                                                  "data": {},
                                                  "marks": [
                                                      {
                                                          "type": "underline"
                                                      }
                                                  ],
                                                  "value": "accessibility checklist",
                                                  "nodeType": "text"
                                              }
                                          ],
                                          "nodeType": "hyperlink"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": ". Engineering teams then receive a list of high level accessibility errors to fix in a short amount of time. ",
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
                                          "value": "After working toward launching a product for months, this list can seem like a headache. It can also delay a project if parts need to be rebuilt or redesigned to meet accessibility requirements. It may not even be realistic for all of the issues to get fixed before launch, and in the worst cases, a team will release a product that many people can’t actually use.  ",
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
                                          "value": "We believe including some level of accessibility testing and reviewing throughout the designing, building, and testing of a project—instead of waiting until the end—will always lead to a more accessible end product. Something as simple as adding an accessibility plugin to the team’s work process could help with catching many issues before the project goes to the next phase.",
                                          "nodeType": "text"
                                      }
                                  ],
                                  "nodeType": "paragraph"
                              },
                              {
                                  "data": {
                                      "target": {
                                          "sys": {
                                              "id": "4W9FSUvfsW2Q1eNt9CGril",
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
                                          "marks": [
                                              {
                                                  "type": "bold"
                                              }
                                          ],
                                          "value": "Regular conversations about accessibility builds awareness",
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
                                          "value": "Because accessibility is a complex issue, it’s essential that testers, engineers, and designers communicate while developing a new product. While working with our state partners, we realized that sharing what we learned with all stakeholders is another key component to promoting accessibility. Through regular meetings and check-ins with all members of the development team, we were able to create a shared understanding of common accessibility failures and how we can scan our code for potential accessibility bugs.",
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
                                          "value": "Our experience creating this ABD online application demonstrated the benefits of implementing an agile approach to accessibility testing. Bringing accessibility into every step of the build process across all members of the team creates more accountability and awareness of why these issues matter. By regularly testing for accessibility, we helped ensure that the process of applying for ABD benefits truly meets the needs of all, regardless of disability status.",
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
                                          "id": "4W9FSUvfsW2Q1eNt9CGril"
                                      },
                                      "__typename": "ReportCallout",
                                      "body": "I was able to catch a lot more issues before the project got all the way to the end, when I wouldn’t have had much time to test.\n",
                                      "colorTheme": "sage",
                                      "variant": "quote",
                                      "attribution": "Julia Maille",
                                      "attributionRole": "accessibility expert"
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
                          "id": "7yZ3Pch9Wch7d2N6HqzLQg"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/7yZ3Pch9Wch7d2N6HqzLQg/78813a286943c3330c342e8557360268/Person-2-Scene-1B.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-DOJ-Sketch-Simple",
                      "description": "An illustration of a middle-aged Black man in a wheelchair sitting at a desk. He is typing on a laptop and holding a phone between his ear and shoulder. "
                  },
                  "contextIllustration": {
                      "sys": {
                          "id": "2bwEApUEr9ptcItYYW7Gkx"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2bwEApUEr9ptcItYYW7Gkx/e09c4869171dd2a59661a6898d0f50d7/Person-2-Scene-1.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-DOJ-Sketch-Context",
                      "description": "An illustration of a middle-aged Black man in a wheelchair sitting at a desk. He is typing on a laptop and holding a phone between his ear and shoulder. \n"
                  },
                  "featuredCallOut": {
                      "sys": {
                          "id": "3ebbMvrOWhS9WRWHzeVsRx"
                      },
                      "body": "One in four Americans live with disabilities",
                      "colorTheme": "sage",
                      "variant": "statistic",
                      "attribution": null,
                      "attributionRole": null
                  },
                  "linkedPostUrl": "https://www.navapbc.com/insights/testing-accessibility-designing-building-technology"
              },
              {
                  "id": "2yvALZEcbT2zW92vDrzQP8",
                  "__typename": "ReportIllustrationOverlayStory",
                  "sys": {
                      "id": "2yvALZEcbT2zW92vDrzQP8"
                  },
                  "title": "Rebuilding ADA.gov to improve accessibility",
                  "hideStory": false,
                  "anchor": "doj-ada",
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
                                          "value": "With 3.5 million annual visitors and 8 million page views, ADA.gov is the federal Civil Rights Division’s most-visited website. The Department of Justice (DOJ) contracted Nava and 18F to redesign ADA.gov, aiming to empower diverse groups of Americans by making ADA rights and regulations easy to find, understand, and share.",
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
                          "data": {},
                          "content": [
                              {
                                  "data": {},
                                  "content": [
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "The Americans with Disabilities Act (ADA), which Congress passed in 1990, is a federal civil rights law that prohibits discrimination against people with disabilities in everyday activities. Whether it’s organizing lunch at a cafe, or planning or opening a new business, it’s essential that people, businesses, and public offices know their federal civil rights law and responsibilities under the ADA—and above all, are able to easily access that information in real time.",
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
                                          "value": "ADA.gov, with 3.5 million annual visitors and 8 million page views, is the federal Civil Rights Division’s most visited website. Given that, the Department of Justice (DOJ) contracted Nava and 18F to redesign ADA.gov with a vital design practice in mind: how can we help make ADA information and regulations easier to find, understand, and share in order to empower diverse groups of people across the nation? Informed by the Disability Rights Section’s (DRS) vision, we learned how to effectively translate goals into action, use modern web design, craft plain language guidelines, and practice inclusive user research in order to create the best and most accessible final product for those who need this resource most.",
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
                                          "value": "Working with 18F, DOJ released a soft launch of the new site in June 2021 and initiated a more widespread launch the following month. The initial rollout was discrete, with the purpose of getting user feedback and avoiding overexposure and publicity. Users could only find the new site through specific pages on the old site, and it wasn’t searchable on search engines. ",
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
                                          "value": "User research with an eye toward accessibility, representation, authenticity, and usability",
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
                                          "value": "To achieve our desired levels of accessibility and representation, we piloted a program to recruit people with disabilities to test the site. This paved the way for more diverse, accessible, and equitable testing practices, including text-to-speech and both automated and manual tests. ",
                                          "nodeType": "text"
                                      }
                                  ],
                                  "nodeType": "paragraph"
                              },
                              {
                                  "data": {
                                      "target": {
                                          "sys": {
                                              "id": "4atg3qY3YupejiQJIh6iWL",
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
                                          "value": "DOJ, 18F, and Nava worked together throughout the accessibility testing process, making sure we prioritized accommodating people with disabilities. The team set up tests so that another person could assist the tester, for example, and offered to do run-throughs ahead of time. We made sure each round included a mix of people, which taught us that some forms of testing don’t work for everyone. We learned that testing visual designs through design software is not inclusive or accessible for people who are blind. So we used methods such as verbally describing the features and functionality to people with visual impairments where participants described to us common issues they encountered with features like dropdown menus. Receiving continuous feedback was a must, so we created multiple feedback channels to collect data and compare over time.",
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
                                          "value": "Representation and authenticity matter—especially when it comes to testing. We aimed to use images and language we felt illustrated real experiences and reflected diversity in race, ethnicity, age, gender expression, and disability. Focusing on diversity and accuracy, we tested imagery and language to make sure the site represented its audience correctly. ",
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
                                          "value": "With a keen eye toward accessibility, representation, authenticity, and usability, we were able to make ADA.gov the reliable resource that so many have hoped for. As one user put it, “This Beta site is a vast improvement over the current site. I can actually find what I need and go to it quickly and easily.”",
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
                                          "id": "4atg3qY3YupejiQJIh6iWL"
                                      },
                                      "__typename": "ReportCallout",
                                      "body": "This Beta site is a vast improvement over the current site. I can actually find what I need and go to it quickly and easily.",
                                      "colorTheme": "sage",
                                      "variant": "quote",
                                      "attribution": "An ADA.gov user",
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
                          "id": "1Bjk2hyztQ0eZgQPAVSgnk"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1Bjk2hyztQ0eZgQPAVSgnk/c921337c01aa34f82cd884f4b195c5af/Person-2-Scene-2B.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-VA-Sketch-Simple",
                      "description": "An illustration of a middle-aged Black man in a wheelchair. \n"
                  },
                  "contextIllustration": {
                      "sys": {
                          "id": "69sZhiKSrtNhIvEalZ8A0y"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/69sZhiKSrtNhIvEalZ8A0y/96b9088f6eb2a5bb83f884c0ea0b270e/Person-2-Scene-2.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-VA-Sketch-Context",
                      "description": "An illustration of a middle-aged Black man in a wheelchair. He is in front of a staircase with a ramp."
                  },
                  "featuredCallOut": {
                      "sys": {
                          "id": "46JbCCVwcSWcFjoeRhaWwV"
                      },
                      "body": "3.5 million annual visitors to ADA.gov",
                      "colorTheme": "sage",
                      "variant": "statistic",
                      "attribution": null,
                      "attributionRole": null
                  },
                  "linkedPostUrl": "https://www.navapbc.com/insights/bringing-diverse-perspectives-modernize-ada-gov"
              }
          ]
      },
      {
          "id": "6G6IGAU76NBE5x8z4bX8aV",
          "__typename": "ReportIllustrationOverlaySubsection",
          "sys": {
              "id": "6G6IGAU76NBE5x8z4bX8aV"
          },
          "title": "Human-centered infrastructure",
          "anchor": "infrastructure",
          "body": "Resilient foundations are key to building public services that last in a world that’s constantly changing. That’s why Nava takes a human-centered approach to developing cloud capabilities. Doing so ensures mission-critical infrastructure is useful and valuable for agency staff and, by extension, the American public.",
          "colorTheme": "navy",
          "themeNum": 3,
          "storiesCollection": {
              "items": [
                  {
                      "__typename": "ReportIllustrationOverlayStory",
                      "sys": {
                          "id": "7rbpvBgj7xRDiGDwoKZoMW"
                      },
                      "title": "Automating how application teams use CMS Cloud",
                      "hideStory": false,
                      "anchor": "cms-cloud",
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
                                              "value": "The Centers for Medicare & Medicaid Services (CMS) is shifting their technology ecosystem away from older, traditional data centers to the cloud. Teams using CMS Cloud are able to react and quickly pivot technology for the unexpected",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "—",
                                              "nodeType": "text"
                                          },
                                          {
                                              "data": {},
                                              "marks": [],
                                              "value": "such as a three-fold increase in enrollments in Healthcare.gov from last year. By automating and standardizing the way CMS onboards application teams, Nava helped reduce the onboarding time from months to hours.",
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
                                              "value": "Since 2018, Nava has been working alongside CMS to shift their technology ecosystem away from older, traditional data centers, to the cloud. While hundreds of applications already run on CMS Cloud, the agency continues to migrate more applications, services, and other workloads to the cloud platform. This transition offers CMS application teams compliant, adaptable, cost effective, and highly secure ways of managing applications and data. ",
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
                                              "value": "While traditional data centers are limited in their capacity for responsive change, teams using CMS Cloud are able to react and quickly pivot technology for the unexpected—such as supporting a pandemic-related policy changes and a Special Enrollment Period for HealthCare.gov that enrolled 2.1 million people in 2021, a three-fold increase over the same period the year before. ",
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
                                              "value": "CMS Cloud offers customer support services to assist application teams working in the cloud. The platform also bakes in best practices for cost management, security and compliance, DevSecOps, DevOps, and disaster recovery to keep CMS technology resilient in the event of system failures. The ongoing shift to cloud builds a strong foundation that allows CMS to rapidly evolve and adapt, ultimately helping CMS become more responsive to the needs of beneficiaries and providers in a rapidly changing world.",
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
                                              "value": "Before, onboarding application teams into the cloud was an effective but highly manual process for the CMS Cloud team and the application teams themselves. Working collaboratively with CMS and a number of vendors and contractors, Nava’s team helped to standardize and ultimately automate these processes, dramatically reducing the amount of time it takes for their cloud accounts to be created from months to hours. ",
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
                                              "value": "Collaborating across teams to automate the onboarding process ",
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
                                              "value": "Alongside the CMS Cloud team, Nava helped design and implement an automated process for the creation and closure of individual support ticket requests when an application team starts the onboarding process. Creating this workflow involves collaborating with teams across the entire cloud platform to identify the most efficient ways to route requests. We helped build this system accounting for how much this environment continually changes, creating a strong foundation as these processes evolve. ",
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
                                                  "id": "79tMUI3aFpLoa4nQQN1kvf",
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
                                              "value": "From there, we worked alongside CMS to remove repetitive manual work. This improved the developer experience for application teams onboarding and allowing them to get on and use cloud technology faster.",
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
                                              "value": "Nava and the CMS Cloud team applied the same processes when helping to automate CMS’s development and infrastructure management (DevOps) tools. DevOps tools are necessary to keep technology systems running smoothly—an application upgrade or security upgrades, for example, are crucial processes that require ongoing maintenance. Automating these processes eases adoption and makes it easier for teams to utilize tools that will enable them to be agile and securely and effectively operate their applications. For a massive organization like CMS, with engineers spread across hundreds of teams, that adds up to a significant reduction in processing time. ",
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
                                              "value": "By providing a modern cloud platform, CMS creates opportunities for more nimble teams that are able to compete for government work and produce better outcomes. Easing these early stage processes is foundational to building a CMS technology ecosystem set up to handle a rapidly changing world with increasingly complex needs. These repeatable, sustainable processes are core to building a strong future for CMS’s millions of beneficiaries and working alongside CMS to transform healthcare across the nation. ",
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
                                              "id": "79tMUI3aFpLoa4nQQN1kvf"
                                          },
                                          "__typename": "ReportCallout",
                                          "body": "By automating and standardizing the way CMS onboards application teams, Nava helped reduce the onboarding time from months to hours.",
                                          "colorTheme": "navy",
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
                              "id": "73DGI5bHOZXDbiSfzEUoHx"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/73DGI5bHOZXDbiSfzEUoHx/9112ac5a4fe18627ed7c34e9e6245b8c/Person-3-Scene-1B.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-CMS-Cloud-Sketch-Simple",
                          "description": "An illustration of an older Muslim woman in a hijab sitting at a desk writing in a notebook.\n"
                      },
                      "contextIllustration": {
                          "sys": {
                              "id": "1cS5DvdwngcSeqwp1oPHM0"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1cS5DvdwngcSeqwp1oPHM0/260f7d70e3312f2319965256a351d2d7/Person-3-Scene-1.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-CMS-Cloud-Sketch-Context",
                          "description": "An illustration of an older Muslim woman in a hijab sitting at a desk writing in a notebook. "
                      },
                      "featuredCallOut": {
                          "sys": {
                              "id": "2o0mjVeJqdcMv8ahAcf5pu"
                          },
                          "body": "3x the number of enrollments in Healthcare.gov from the previous year due to pandemic-related policy changes",
                          "colorTheme": "navy",
                          "variant": "statistic",
                          "attribution": null,
                          "attributionRole": null
                      },
                      "linkedPostUrl": null
                  },
                  {
                      "__typename": "ReportIllustrationOverlayStory",
                      "sys": {
                          "id": "5R4Uyg1L3PkSGUHlADBH16"
                      },
                      "title": "Unlocking siloed data to modernize the Medicare experience",
                      "hideStory": false,
                      "anchor": "cms-medicare-payment-modernization",
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
                                              "value": " In an effort to support a healthier, more equitable public, we’ve partnered with The Centers for Medicare & Medicaid Services (CMS) on The Medicare Payment System Modernization (MPSM) program. Existing sources of claims data have about a month of lag time from the filing of the claim before the claim is available on the cloud. Our API reduced this window to 24 hours after the claim is filed, transferring approximately 15 million claims per day.",
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
                                              "value": "Nava is working with CMS on their MPSM program to create a flexible, scalable system that serves over 60 million Americans and accounts for 14 percent of the federal budget. Our shared vision is to ensure that these critical systems are able to adapt to evolving Medicare policy and program needs, supporting a healthier, more equitable public.  ",
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
                                              "value": "Over the past year, Nava’s Operations and System Reliability Engineering (OSRE) team—the team dedicated to building and operating the infrastructure for MPSM’s cloud-based services—created a system health status page for CMS staff and contractors who are responsible for processing over 1 billion claims a year. The status page centralized and automated the process for alerting CMS staff and contractors when any part of the technology system experiences an outage or other incidents. By using cloud technology to make this information accessible in real-time, the Nava team radically improved the speed and transparency of a previously cumbersome process that relied on email communication. The status page reduces the time it takes to resolve incidents when they occur. ",
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
                                              "value": "Unlocking healthcare data can help improve patient outcomes and lower taxpayer burdens",
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
                                              "value": "As part of the Medicare modernization effort, our team is also building a system for transferring valuable data from mainframe systems to the cloud and making that data more accessible, helping to unlock patient data for healthcare providers. Currently, claims data for millions of patients sits on older mainframe systems. But cloud-stored claims data has the potential to help providers improve patient outcomes while lowering the overall cost of care paid by taxpayers. A doctor whose patient visits an emergency room out of state, for example, would be notified about the visit within a few days of it happening, ultimately helping the provider offer more informed care for their patient. ",
                                              "nodeType": "text"
                                          }
                                      ],
                                      "nodeType": "paragraph"
                                  },
                                  {
                                      "data": {
                                          "target": {
                                              "sys": {
                                                  "id": "5u6t0oxq2IArAoNgwmkcul",
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
                                              "value": "Existing sources of claims data have about a month of lag time from the filing of the claim before the claim is available. Our API makes these claims available within 24 hours after the claim is filed, transferring approximately 15 million claims per day onto CMS’s cloud platform.",
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
                                              "value": "Advancing health equity with tools that collect crucial patient information ",
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
                                              "value": "In the past year, we also helped CMS prototype tools to systematically collect demographic data and other key information about patients as part of a goal to advance health equity. Following the directive from the Biden administration on moving toward health equity, Nava’s team worked with the CMS Innovation Center to develop questionnaires that collect basic demographic and Social determinants of health (SDOH) data from beneficiaries. ",
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
                                              "value": "Gathering information from patients such as their race, ethnicity, housing status, and job status will help build a baseline for CMS to assess the health equity and inform policy changes to improve the nation’s health. This work leverages the Fast Healthcare Interoperability Resources (FHIR) standard, a technological standard for sharing electronic health records. Using this data, CMS can work toward its larger goal of building more equitable health outcomes across the American public.",
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
                                              "id": "5u6t0oxq2IArAoNgwmkcul"
                                          },
                                          "__typename": "ReportCallout",
                                          "body": "Our API transfers approximately 15 million claims per day onto CMS’s cloud platform",
                                          "colorTheme": "navy",
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
                              "id": "1vpcR0YQj8q6nGVmTcjeZF"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1vpcR0YQj8q6nGVmTcjeZF/9040e5758cd6a58d1d8addd0a7edd85f/Person-3-Scene-2B.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-MPSM-Sketch-Simple",
                          "description": "An illustration an older Muslim woman wearing a hijab and holding a prescription bottle.\n"
                      },
                      "contextIllustration": {
                          "sys": {
                              "id": "hyl3nvGoFn17RNP4bcMa4"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/hyl3nvGoFn17RNP4bcMa4/66d4a63d5279368b0f7c9ef6730078cc/Person-3-Scene-2.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-MPSM-Sketch-Context",
                          "description": "An illustration an older Muslim woman wearing a hijab and holding a prescription bottle at the pharmacist. A young, Black pharmacist stands on the other side of a pharmacy counter."
                      },
                      "featuredCallOut": {
                          "sys": {
                              "id": "1a5wvnpPWsfZfuB66bLn4v"
                          },
                          "body": "1 month to 24 hours after a claim is filed",
                          "colorTheme": "navy",
                          "variant": "statistic",
                          "attribution": null,
                          "attributionRole": null
                      },
                      "linkedPostUrl": null
                  }
              ]
          },
          "items": [
              {
                  "id": "7rbpvBgj7xRDiGDwoKZoMW",
                  "__typename": "ReportIllustrationOverlayStory",
                  "sys": {
                      "id": "7rbpvBgj7xRDiGDwoKZoMW"
                  },
                  "title": "Automating how application teams use CMS Cloud",
                  "hideStory": false,
                  "anchor": "cms-cloud",
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
                                          "value": "The Centers for Medicare & Medicaid Services (CMS) is shifting their technology ecosystem away from older, traditional data centers to the cloud. Teams using CMS Cloud are able to react and quickly pivot technology for the unexpected",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "—",
                                          "nodeType": "text"
                                      },
                                      {
                                          "data": {},
                                          "marks": [],
                                          "value": "such as a three-fold increase in enrollments in Healthcare.gov from last year. By automating and standardizing the way CMS onboards application teams, Nava helped reduce the onboarding time from months to hours.",
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
                                          "value": "Since 2018, Nava has been working alongside CMS to shift their technology ecosystem away from older, traditional data centers, to the cloud. While hundreds of applications already run on CMS Cloud, the agency continues to migrate more applications, services, and other workloads to the cloud platform. This transition offers CMS application teams compliant, adaptable, cost effective, and highly secure ways of managing applications and data. ",
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
                                          "value": "While traditional data centers are limited in their capacity for responsive change, teams using CMS Cloud are able to react and quickly pivot technology for the unexpected—such as supporting a pandemic-related policy changes and a Special Enrollment Period for HealthCare.gov that enrolled 2.1 million people in 2021, a three-fold increase over the same period the year before. ",
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
                                          "value": "CMS Cloud offers customer support services to assist application teams working in the cloud. The platform also bakes in best practices for cost management, security and compliance, DevSecOps, DevOps, and disaster recovery to keep CMS technology resilient in the event of system failures. The ongoing shift to cloud builds a strong foundation that allows CMS to rapidly evolve and adapt, ultimately helping CMS become more responsive to the needs of beneficiaries and providers in a rapidly changing world.",
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
                                          "value": "Before, onboarding application teams into the cloud was an effective but highly manual process for the CMS Cloud team and the application teams themselves. Working collaboratively with CMS and a number of vendors and contractors, Nava’s team helped to standardize and ultimately automate these processes, dramatically reducing the amount of time it takes for their cloud accounts to be created from months to hours. ",
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
                                          "value": "Collaborating across teams to automate the onboarding process ",
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
                                          "value": "Alongside the CMS Cloud team, Nava helped design and implement an automated process for the creation and closure of individual support ticket requests when an application team starts the onboarding process. Creating this workflow involves collaborating with teams across the entire cloud platform to identify the most efficient ways to route requests. We helped build this system accounting for how much this environment continually changes, creating a strong foundation as these processes evolve. ",
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
                                              "id": "79tMUI3aFpLoa4nQQN1kvf",
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
                                          "value": "From there, we worked alongside CMS to remove repetitive manual work. This improved the developer experience for application teams onboarding and allowing them to get on and use cloud technology faster.",
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
                                          "value": "Nava and the CMS Cloud team applied the same processes when helping to automate CMS’s development and infrastructure management (DevOps) tools. DevOps tools are necessary to keep technology systems running smoothly—an application upgrade or security upgrades, for example, are crucial processes that require ongoing maintenance. Automating these processes eases adoption and makes it easier for teams to utilize tools that will enable them to be agile and securely and effectively operate their applications. For a massive organization like CMS, with engineers spread across hundreds of teams, that adds up to a significant reduction in processing time. ",
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
                                          "value": "By providing a modern cloud platform, CMS creates opportunities for more nimble teams that are able to compete for government work and produce better outcomes. Easing these early stage processes is foundational to building a CMS technology ecosystem set up to handle a rapidly changing world with increasingly complex needs. These repeatable, sustainable processes are core to building a strong future for CMS’s millions of beneficiaries and working alongside CMS to transform healthcare across the nation. ",
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
                                          "id": "79tMUI3aFpLoa4nQQN1kvf"
                                      },
                                      "__typename": "ReportCallout",
                                      "body": "By automating and standardizing the way CMS onboards application teams, Nava helped reduce the onboarding time from months to hours.",
                                      "colorTheme": "navy",
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
                          "id": "73DGI5bHOZXDbiSfzEUoHx"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/73DGI5bHOZXDbiSfzEUoHx/9112ac5a4fe18627ed7c34e9e6245b8c/Person-3-Scene-1B.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-CMS-Cloud-Sketch-Simple",
                      "description": "An illustration of an older Muslim woman in a hijab sitting at a desk writing in a notebook.\n"
                  },
                  "contextIllustration": {
                      "sys": {
                          "id": "1cS5DvdwngcSeqwp1oPHM0"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1cS5DvdwngcSeqwp1oPHM0/260f7d70e3312f2319965256a351d2d7/Person-3-Scene-1.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-CMS-Cloud-Sketch-Context",
                      "description": "An illustration of an older Muslim woman in a hijab sitting at a desk writing in a notebook. "
                  },
                  "featuredCallOut": {
                      "sys": {
                          "id": "2o0mjVeJqdcMv8ahAcf5pu"
                      },
                      "body": "3x the number of enrollments in Healthcare.gov from the previous year due to pandemic-related policy changes",
                      "colorTheme": "navy",
                      "variant": "statistic",
                      "attribution": null,
                      "attributionRole": null
                  },
                  "linkedPostUrl": null
              },
              {
                  "id": "5R4Uyg1L3PkSGUHlADBH16",
                  "__typename": "ReportIllustrationOverlayStory",
                  "sys": {
                      "id": "5R4Uyg1L3PkSGUHlADBH16"
                  },
                  "title": "Unlocking siloed data to modernize the Medicare experience",
                  "hideStory": false,
                  "anchor": "cms-medicare-payment-modernization",
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
                                          "value": " In an effort to support a healthier, more equitable public, we’ve partnered with The Centers for Medicare & Medicaid Services (CMS) on The Medicare Payment System Modernization (MPSM) program. Existing sources of claims data have about a month of lag time from the filing of the claim before the claim is available on the cloud. Our API reduced this window to 24 hours after the claim is filed, transferring approximately 15 million claims per day.",
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
                                          "value": "Nava is working with CMS on their MPSM program to create a flexible, scalable system that serves over 60 million Americans and accounts for 14 percent of the federal budget. Our shared vision is to ensure that these critical systems are able to adapt to evolving Medicare policy and program needs, supporting a healthier, more equitable public.  ",
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
                                          "value": "Over the past year, Nava’s Operations and System Reliability Engineering (OSRE) team—the team dedicated to building and operating the infrastructure for MPSM’s cloud-based services—created a system health status page for CMS staff and contractors who are responsible for processing over 1 billion claims a year. The status page centralized and automated the process for alerting CMS staff and contractors when any part of the technology system experiences an outage or other incidents. By using cloud technology to make this information accessible in real-time, the Nava team radically improved the speed and transparency of a previously cumbersome process that relied on email communication. The status page reduces the time it takes to resolve incidents when they occur. ",
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
                                          "value": "Unlocking healthcare data can help improve patient outcomes and lower taxpayer burdens",
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
                                          "value": "As part of the Medicare modernization effort, our team is also building a system for transferring valuable data from mainframe systems to the cloud and making that data more accessible, helping to unlock patient data for healthcare providers. Currently, claims data for millions of patients sits on older mainframe systems. But cloud-stored claims data has the potential to help providers improve patient outcomes while lowering the overall cost of care paid by taxpayers. A doctor whose patient visits an emergency room out of state, for example, would be notified about the visit within a few days of it happening, ultimately helping the provider offer more informed care for their patient. ",
                                          "nodeType": "text"
                                      }
                                  ],
                                  "nodeType": "paragraph"
                              },
                              {
                                  "data": {
                                      "target": {
                                          "sys": {
                                              "id": "5u6t0oxq2IArAoNgwmkcul",
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
                                          "value": "Existing sources of claims data have about a month of lag time from the filing of the claim before the claim is available. Our API makes these claims available within 24 hours after the claim is filed, transferring approximately 15 million claims per day onto CMS’s cloud platform.",
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
                                          "value": "Advancing health equity with tools that collect crucial patient information ",
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
                                          "value": "In the past year, we also helped CMS prototype tools to systematically collect demographic data and other key information about patients as part of a goal to advance health equity. Following the directive from the Biden administration on moving toward health equity, Nava’s team worked with the CMS Innovation Center to develop questionnaires that collect basic demographic and Social determinants of health (SDOH) data from beneficiaries. ",
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
                                          "value": "Gathering information from patients such as their race, ethnicity, housing status, and job status will help build a baseline for CMS to assess the health equity and inform policy changes to improve the nation’s health. This work leverages the Fast Healthcare Interoperability Resources (FHIR) standard, a technological standard for sharing electronic health records. Using this data, CMS can work toward its larger goal of building more equitable health outcomes across the American public.",
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
                                          "id": "5u6t0oxq2IArAoNgwmkcul"
                                      },
                                      "__typename": "ReportCallout",
                                      "body": "Our API transfers approximately 15 million claims per day onto CMS’s cloud platform",
                                      "colorTheme": "navy",
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
                          "id": "1vpcR0YQj8q6nGVmTcjeZF"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1vpcR0YQj8q6nGVmTcjeZF/9040e5758cd6a58d1d8addd0a7edd85f/Person-3-Scene-2B.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-MPSM-Sketch-Simple",
                      "description": "An illustration an older Muslim woman wearing a hijab and holding a prescription bottle.\n"
                  },
                  "contextIllustration": {
                      "sys": {
                          "id": "hyl3nvGoFn17RNP4bcMa4"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/hyl3nvGoFn17RNP4bcMa4/66d4a63d5279368b0f7c9ef6730078cc/Person-3-Scene-2.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-MPSM-Sketch-Context",
                      "description": "An illustration an older Muslim woman wearing a hijab and holding a prescription bottle at the pharmacist. A young, Black pharmacist stands on the other side of a pharmacy counter."
                  },
                  "featuredCallOut": {
                      "sys": {
                          "id": "1a5wvnpPWsfZfuB66bLn4v"
                      },
                      "body": "1 month to 24 hours after a claim is filed",
                      "colorTheme": "navy",
                      "variant": "statistic",
                      "attribution": null,
                      "attributionRole": null
                  },
                  "linkedPostUrl": null
              }
          ]
      },
      {
          "id": "65rQrksGqiqMiGd7mquUEa",
          "__typename": "ReportIllustrationOverlaySubsection",
          "sys": {
              "id": "65rQrksGqiqMiGd7mquUEa"
          },
          "title": "Progress takes work",
          "anchor": "progress",
          "body": "Building equitable government technology is challenging work, and progress often moves in fits and starts. Throughout our projects, we’ve recognized this work requires deep collaboration across technologists, advocates, and legislators.",
          "colorTheme": "gold",
          "themeNum": 4,
          "storiesCollection": {
              "items": [
                  {
                      "__typename": "ReportIllustrationOverlayStory",
                      "sys": {
                          "id": "2nGtN71fgYF3mLG45XVNBZ"
                      },
                      "title": "Integrating public benefits programs in Nebraska",
                      "hideStory": false,
                      "anchor": "nebraska-ib",
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
                                              "value": "States looking to integrate eligibility and enrollment benefits often encounter differing and at times contradictory submission requirements dictated by federal agencies. It’s a challenge we encountered when working with the state of Nebraska to integrate its eligibility and enrollment benefits, where we helped reduce the number of required applications from 14 to one.",
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
                                              "value": "Integrating eligibility and enrollment benefits is an increasingly important undertaking for state governments around the country. People who qualify for multiple public benefit programs shouldn’t have to fill out multiple applications that require the same basic information to access these benefits. But states already in the process of integrating benefits are encountering an issue: differing and at times contradictory submission requirements dictated by the federal agencies running these benefits programs. ",
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
                                              "value": "At Nava, we’ve encountered this issue firsthand. We helped the states of Nebraska and Vermont in their ongoing effort to integrate public benefit programs. But in the process of working with these states, we saw how something as small as a single form requirement on an application has unforeseen downstream impacts.",
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
                                              "value": "This patchwork of compliance requirements across federal agencies creates a burdensome experience for applicants trying to access benefits. This makes it harder to integrate benefits, a worthy undertaking that falls in line with the President’s latest executive orders on improving customer experience and equity when it comes to government programs. Aligning these fragmented requirements is one step toward building a truly human-centered process for state benefits programs.",
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
                                              "value": "Designing a workable solution to integrate applications",
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
                                              "value": "Nava worked with Nebraska to help design its Integrated Benefits portal, launched in 2022, as a single place to log in, apply for, and eventually manage enrollment in all income-based benefits programs provided by the state. ",
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
                                                  "id": "14xPqte62F9d5paO5PLshh",
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
                                              "value": "Through this work, we discovered that FNS and CMS applications had distinct submission requirements that not only created unnecessarily complicated experiences for applicants, but also created a challenge for designers working to integrate these applications. ",
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
                                              "value": "For example, both FNS and CMS share a requirement that the only information necessary to apply for certain benefits are name, address, and contact information – sometimes called a “minimal submit” or “quick submit” requirement. But if an applicant submits more information in their application, FNS will accept whatever else they fill in. CMS will require the applicant to then fill out all the remaining required information in order to submit the application. ",
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
                                              "value": "That means an applicant applying to Medicaid through CMS who fills in their name, address, and contact info, but also enters in their household size, will not be able to submit unless they track down and enter in everything else that the application requires. This can be a burdensome process for the applicant that might require tracking down unknown or hard to find information, despite the fact that only those three pieces of information are actually required to get an application in the door.",
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
                                              "value": "Ultimately, we resolved these differing requirements with a temporary, workable solution, or minimum viable product. We displayed a message to applicants that outlined these differences, meaning applicants applying for a healthcare program and a non-healthcare program were recommended to apply for healthcare separately. This solution, while viable, also illustrates the limitations of technology and content in solving issues that exist on a policy level.",
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
                                              "id": "14xPqte62F9d5paO5PLshh"
                                          },
                                          "__typename": "ReportCallout",
                                          "body": "[An integrated application] eliminates the need to enter the same information multiple times for each program…ensures that unnecessary questions are not asked, and provides the ability to edit information once for all programs—all of which significantly decreases the amount of time to apply for all benefits and improves the quality of the information provided.",
                                          "colorTheme": "gold",
                                          "variant": "quote",
                                          "attribution": "Dee Dee Recic",
                                          "attributionRole": "a product manager with the state of Nebraska"
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
                              "id": "64i5qHLSoRwIoQSdyK5SU1"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/64i5qHLSoRwIoQSdyK5SU1/d495b17974283199f1ac48bf88f6e49b/Person-4-Scene-1B.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-NE-Sketch-Simple",
                          "description": "An illustration of a genderqueer Asian person sitting at a table. They are talking and holding a sheet of paper. "
                      },
                      "contextIllustration": {
                          "sys": {
                              "id": "a9T3PPRw6KO7xYEqPvHFa"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/a9T3PPRw6KO7xYEqPvHFa/9d1ad687e8c22e2a8185bb043d617b38/Person-4-Scene-1.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-Neb-UI-Sketch-Context",
                          "description": "An illustration of a genderqueer Asian person talking in a business meeting with a Black man, a white woman, and an Asian man. "
                      },
                      "featuredCallOut": {
                          "sys": {
                              "id": "3DtNRGD7JWkgOTO2P6cw7g"
                          },
                          "body": "14 applications reduced to one",
                          "colorTheme": "gold",
                          "variant": "statistic",
                          "attribution": null,
                          "attributionRole": null
                      },
                      "linkedPostUrl": "https://www.navapbc.com/insights/healing-policy-papercuts"
                  },
                  {
                      "__typename": "ReportIllustrationOverlayStory",
                      "sys": {
                          "id": "6PdyEbgb4BKtkRPWBIuJTY"
                      },
                      "title": "Making it easier for families to enroll in Montana WIC and beyond",
                      "hideStory": false,
                      "anchor": "montana-wic",
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
                                              "value": "WIC serves nearly half of all infants born in the U.S. and reduces the risk of infant mortality by 33 percent. Yet WIC agencies across the country grapple with constrictive technology that impacts program participation. With the support of Schmidt Futures and technical assistance from the WIC program in Montana, Nava is working on an initiative to catalyze the modernization of Montana WIC and learn about opportunities to improve and scale the program nationally.",
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
                                              "value": "Over 6 million pregnant people, breastfeeding parents, infants, and children get help accessing healthy food, education, and other services through the federal nutrition program known as the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC). WIC embraces innovation to meet participant needs, serving nearly half of all infants born in the U.S., and reducing the risk of infant mortality by 33 percent. Still, when it comes to adopting technology, agencies across the country grapple with the constraints of existing technology systems.",
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
                                              "value": "Agencies looking to use technology to make it easier for people to apply for and keep their WIC benefits, such as online scheduling, must navigate a central management information system, or MIS, which holds information about participants. Building new technology on the MIS platform requires time and expertise, leaving agencies with few options for vendors to work with. Alternatively, agencies can buy standalone tools, such as a feature that allows online scheduling. But then staff are burdened with manually sharing data between the MIS and other systems. Agencies don’t have many cost effective and efficient options to build digital services that are flexible, resilient, and truly human-centered.",
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
                                              "value": "Improving access and equity with an API standard",
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
                                              "value": "That’s why Nava, with the support of Schmidt Futures and technical assistance from the WIC program in Montana, is working on an initiative to catalyze modernization of Montana WIC and learn about opportunities to improve and scale the program nationally.",
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
                                                  "id": "rwXKDtsu2SVGJgUhEhElZ",
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
                                              "value": "Nava is developing and testing technology to make it easier for people to apply for and keep their WIC benefits. Part of that vision includes researching and testing Application Programming Interfaces, or APIs, which connect new digital tools with existing technology systems. Disparate APIs are currently used by some WIC agencies, but there is not an API standard that works across all WIC agencies nationally. Nava envisions creating a WIC-specific API standard that allows different WIC agencies across the country to quickly share and adopt digital tools. With this flexible, adaptable implementation power, WIC agencies would be  better able to meet participant and staff needs, improving access and equity in government service delivery.",
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
                                              "value": "Together, Montana and Nava built a screener tool prototype to help with enrollment to support Montana’s vision to improve access to WIC. The prototype will also help us research and learn about a potential solution that would allow WIC agencies across the country to more easily share and adopt new technology: an API standard. We’ll continue to share what we learn with the larger WIC community in partnership with the National WIC Association.",
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
                                              "id": "rwXKDtsu2SVGJgUhEhElZ"
                                          },
                                          "__typename": "ReportCallout",
                                          "body": "Over 6 million pregnant people, breastfeeding parents, infants, and children",
                                          "colorTheme": "gold",
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
                              "id": "3rToQxTmkdRJCZog7iYqWi"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3rToQxTmkdRJCZog7iYqWi/33b049c3126fad38722d9ea99a844506/Person-4-Scene-2B.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-WIC-Sketch-Simple",
                          "description": "An illustration of an Asian, genderqueer person sitting at a table with an open notebook.\n"
                      },
                      "contextIllustration": {
                          "sys": {
                              "id": "5hY3YH5N4bLooLxN7qud4c"
                          },
                          "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5hY3YH5N4bLooLxN7qud4c/d05476d2316c71fad8e8e7ccde20504d/Person-4-Scene-2.png",
                          "width": 4000,
                          "height": 2250,
                          "title": "PBR-WIC-Sketch-Context",
                          "description": "An illustration of an Asian, genderqueer person sitting at a table with an open notebook. They are joined by two Indigenous American women, one of whom is holding a baby."
                      },
                      "featuredCallOut": {
                          "sys": {
                              "id": "2JknYQs20BMjMIb4RQShg6"
                          },
                          "body": "50% of all babies born in the U.S. are eligible for WIC",
                          "colorTheme": "gold",
                          "variant": "statistic",
                          "attribution": null,
                          "attributionRole": null
                      },
                      "linkedPostUrl": "https://www.navapbc.com/insights/api-standard-wic-mis"
                  }
              ]
          },
          "items": [
              {
                  "id": "2nGtN71fgYF3mLG45XVNBZ",
                  "__typename": "ReportIllustrationOverlayStory",
                  "sys": {
                      "id": "2nGtN71fgYF3mLG45XVNBZ"
                  },
                  "title": "Integrating public benefits programs in Nebraska",
                  "hideStory": false,
                  "anchor": "nebraska-ib",
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
                                          "value": "States looking to integrate eligibility and enrollment benefits often encounter differing and at times contradictory submission requirements dictated by federal agencies. It’s a challenge we encountered when working with the state of Nebraska to integrate its eligibility and enrollment benefits, where we helped reduce the number of required applications from 14 to one.",
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
                                          "value": "Integrating eligibility and enrollment benefits is an increasingly important undertaking for state governments around the country. People who qualify for multiple public benefit programs shouldn’t have to fill out multiple applications that require the same basic information to access these benefits. But states already in the process of integrating benefits are encountering an issue: differing and at times contradictory submission requirements dictated by the federal agencies running these benefits programs. ",
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
                                          "value": "At Nava, we’ve encountered this issue firsthand. We helped the states of Nebraska and Vermont in their ongoing effort to integrate public benefit programs. But in the process of working with these states, we saw how something as small as a single form requirement on an application has unforeseen downstream impacts.",
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
                                          "value": "This patchwork of compliance requirements across federal agencies creates a burdensome experience for applicants trying to access benefits. This makes it harder to integrate benefits, a worthy undertaking that falls in line with the President’s latest executive orders on improving customer experience and equity when it comes to government programs. Aligning these fragmented requirements is one step toward building a truly human-centered process for state benefits programs.",
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
                                          "value": "Designing a workable solution to integrate applications",
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
                                          "value": "Nava worked with Nebraska to help design its Integrated Benefits portal, launched in 2022, as a single place to log in, apply for, and eventually manage enrollment in all income-based benefits programs provided by the state. ",
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
                                              "id": "14xPqte62F9d5paO5PLshh",
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
                                          "value": "Through this work, we discovered that FNS and CMS applications had distinct submission requirements that not only created unnecessarily complicated experiences for applicants, but also created a challenge for designers working to integrate these applications. ",
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
                                          "value": "For example, both FNS and CMS share a requirement that the only information necessary to apply for certain benefits are name, address, and contact information – sometimes called a “minimal submit” or “quick submit” requirement. But if an applicant submits more information in their application, FNS will accept whatever else they fill in. CMS will require the applicant to then fill out all the remaining required information in order to submit the application. ",
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
                                          "value": "That means an applicant applying to Medicaid through CMS who fills in their name, address, and contact info, but also enters in their household size, will not be able to submit unless they track down and enter in everything else that the application requires. This can be a burdensome process for the applicant that might require tracking down unknown or hard to find information, despite the fact that only those three pieces of information are actually required to get an application in the door.",
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
                                          "value": "Ultimately, we resolved these differing requirements with a temporary, workable solution, or minimum viable product. We displayed a message to applicants that outlined these differences, meaning applicants applying for a healthcare program and a non-healthcare program were recommended to apply for healthcare separately. This solution, while viable, also illustrates the limitations of technology and content in solving issues that exist on a policy level.",
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
                                          "id": "14xPqte62F9d5paO5PLshh"
                                      },
                                      "__typename": "ReportCallout",
                                      "body": "[An integrated application] eliminates the need to enter the same information multiple times for each program…ensures that unnecessary questions are not asked, and provides the ability to edit information once for all programs—all of which significantly decreases the amount of time to apply for all benefits and improves the quality of the information provided.",
                                      "colorTheme": "gold",
                                      "variant": "quote",
                                      "attribution": "Dee Dee Recic",
                                      "attributionRole": "a product manager with the state of Nebraska"
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
                          "id": "64i5qHLSoRwIoQSdyK5SU1"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/64i5qHLSoRwIoQSdyK5SU1/d495b17974283199f1ac48bf88f6e49b/Person-4-Scene-1B.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-NE-Sketch-Simple",
                      "description": "An illustration of a genderqueer Asian person sitting at a table. They are talking and holding a sheet of paper. "
                  },
                  "contextIllustration": {
                      "sys": {
                          "id": "a9T3PPRw6KO7xYEqPvHFa"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/a9T3PPRw6KO7xYEqPvHFa/9d1ad687e8c22e2a8185bb043d617b38/Person-4-Scene-1.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-Neb-UI-Sketch-Context",
                      "description": "An illustration of a genderqueer Asian person talking in a business meeting with a Black man, a white woman, and an Asian man. "
                  },
                  "featuredCallOut": {
                      "sys": {
                          "id": "3DtNRGD7JWkgOTO2P6cw7g"
                      },
                      "body": "14 applications reduced to one",
                      "colorTheme": "gold",
                      "variant": "statistic",
                      "attribution": null,
                      "attributionRole": null
                  },
                  "linkedPostUrl": "https://www.navapbc.com/insights/healing-policy-papercuts"
              },
              {
                  "id": "6PdyEbgb4BKtkRPWBIuJTY",
                  "__typename": "ReportIllustrationOverlayStory",
                  "sys": {
                      "id": "6PdyEbgb4BKtkRPWBIuJTY"
                  },
                  "title": "Making it easier for families to enroll in Montana WIC and beyond",
                  "hideStory": false,
                  "anchor": "montana-wic",
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
                                          "value": "WIC serves nearly half of all infants born in the U.S. and reduces the risk of infant mortality by 33 percent. Yet WIC agencies across the country grapple with constrictive technology that impacts program participation. With the support of Schmidt Futures and technical assistance from the WIC program in Montana, Nava is working on an initiative to catalyze the modernization of Montana WIC and learn about opportunities to improve and scale the program nationally.",
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
                                          "value": "Over 6 million pregnant people, breastfeeding parents, infants, and children get help accessing healthy food, education, and other services through the federal nutrition program known as the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC). WIC embraces innovation to meet participant needs, serving nearly half of all infants born in the U.S., and reducing the risk of infant mortality by 33 percent. Still, when it comes to adopting technology, agencies across the country grapple with the constraints of existing technology systems.",
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
                                          "value": "Agencies looking to use technology to make it easier for people to apply for and keep their WIC benefits, such as online scheduling, must navigate a central management information system, or MIS, which holds information about participants. Building new technology on the MIS platform requires time and expertise, leaving agencies with few options for vendors to work with. Alternatively, agencies can buy standalone tools, such as a feature that allows online scheduling. But then staff are burdened with manually sharing data between the MIS and other systems. Agencies don’t have many cost effective and efficient options to build digital services that are flexible, resilient, and truly human-centered.",
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
                                          "value": "Improving access and equity with an API standard",
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
                                          "value": "That’s why Nava, with the support of Schmidt Futures and technical assistance from the WIC program in Montana, is working on an initiative to catalyze modernization of Montana WIC and learn about opportunities to improve and scale the program nationally.",
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
                                              "id": "rwXKDtsu2SVGJgUhEhElZ",
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
                                          "value": "Nava is developing and testing technology to make it easier for people to apply for and keep their WIC benefits. Part of that vision includes researching and testing Application Programming Interfaces, or APIs, which connect new digital tools with existing technology systems. Disparate APIs are currently used by some WIC agencies, but there is not an API standard that works across all WIC agencies nationally. Nava envisions creating a WIC-specific API standard that allows different WIC agencies across the country to quickly share and adopt digital tools. With this flexible, adaptable implementation power, WIC agencies would be  better able to meet participant and staff needs, improving access and equity in government service delivery.",
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
                                          "value": "Together, Montana and Nava built a screener tool prototype to help with enrollment to support Montana’s vision to improve access to WIC. The prototype will also help us research and learn about a potential solution that would allow WIC agencies across the country to more easily share and adopt new technology: an API standard. We’ll continue to share what we learn with the larger WIC community in partnership with the National WIC Association.",
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
                                          "id": "rwXKDtsu2SVGJgUhEhElZ"
                                      },
                                      "__typename": "ReportCallout",
                                      "body": "Over 6 million pregnant people, breastfeeding parents, infants, and children",
                                      "colorTheme": "gold",
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
                          "id": "3rToQxTmkdRJCZog7iYqWi"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3rToQxTmkdRJCZog7iYqWi/33b049c3126fad38722d9ea99a844506/Person-4-Scene-2B.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-WIC-Sketch-Simple",
                      "description": "An illustration of an Asian, genderqueer person sitting at a table with an open notebook.\n"
                  },
                  "contextIllustration": {
                      "sys": {
                          "id": "5hY3YH5N4bLooLxN7qud4c"
                      },
                      "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5hY3YH5N4bLooLxN7qud4c/d05476d2316c71fad8e8e7ccde20504d/Person-4-Scene-2.png",
                      "width": 4000,
                      "height": 2250,
                      "title": "PBR-WIC-Sketch-Context",
                      "description": "An illustration of an Asian, genderqueer person sitting at a table with an open notebook. They are joined by two Indigenous American women, one of whom is holding a baby."
                  },
                  "featuredCallOut": {
                      "sys": {
                          "id": "2JknYQs20BMjMIb4RQShg6"
                      },
                      "body": "50% of all babies born in the U.S. are eligible for WIC",
                      "colorTheme": "gold",
                      "variant": "statistic",
                      "attribution": null,
                      "attributionRole": null
                  },
                  "linkedPostUrl": "https://www.navapbc.com/insights/api-standard-wic-mis"
              }
          ]
      },
      {
          "id": "mHO34z4Zi0CmZeQO0kZAU",
          "__typename": "ReportSectionCustom",
          "sys": {
              "id": "mHO34z4Zi0CmZeQO0kZAU"
          },
          "title": "Conclusion",
          "anchor": "reportConclusion",
          "type": "Conclusion 2021",
          "colorTheme": "gold",
          "richBody": {
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
                                  "value": "Equity is an essential value to building sustainable public services that can help generations to come. Nava has prioritized equity in how we approach our work since our start. But we have so much left to tackle. Building equity is an ongoing practice that we’ll continue to hone. Along the way, we might make mistakes. But our aim is to always step back, assess, and make sure we’re headed in the right direction.",
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
                                  "value": "It’s also a foundational principle in how Nava cultivates our organization, teams, and company culture. If you’re interested in joining our mission, check out our open roles or sign up for our newsletter.",
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
          "signaturesCollection": {
              "items": []
          },
          "items": []
      }
  ]
};
