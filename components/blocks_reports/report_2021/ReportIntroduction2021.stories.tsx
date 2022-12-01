import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import  ReportIntroduction2021  from './ReportIntroduction2021';

export default {
  title: 'Report Blocks/Custom Section/(2021)Report Introduction',
  component: ReportIntroduction2021,
  args: {
    title: 'string',
    anchor: 'string',
    richBody: 'any' as unknown as any,
    signatures: 'any' as unknown as any,
    variant: 'string',
    reportYear: "2021"
  },
} as ComponentMeta<typeof ReportIntroduction2021>;

const Template: ComponentStory<typeof ReportIntroduction2021> = (args) => (
  <ReportIntroduction2021 {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
  ],
  "signatures": [
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
};
