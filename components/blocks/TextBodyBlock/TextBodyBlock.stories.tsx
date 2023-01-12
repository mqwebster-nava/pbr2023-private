import { ComponentStory, ComponentMeta } from '@storybook/react';
import  TextBodyBlock from './TextBodyBlock';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Text Body Block',
  component: TextBodyBlock,
} as ComponentMeta<typeof TextBodyBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextBodyBlock> = (args) => <TextBodyBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "yhIlCvONVpox22oI8087f",
    "title": "Better foundations, not better facades",
    "type": null,
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
                            "value": "Over the next 18 months, they built several products and systems that still serve tens of millions of people today, dramatically improving the user experience and service reliability, while cutting call center wait times and hundreds of millions of dollars in costs.",
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
                            "value": "",
                            "marks": [],
                            "data": {}
                        },
                        {
                            "nodeType": "hyperlink",
                            "data": {
                                "uri": "/insights/twelve-years-of-healthcare-dot-gov"
                            },
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "HealthCare.gov was the catalyst",
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
                            "value": " for a number of things ready to sprout. It gave innovators within government the justification they needed to advance their changes. It provided a unifying narrative for attracting and growing technical teams within the government like 18F and USDS. It exposed the brittleness of the way technology was specified and procured. It laid bare the need for modern methods and vendors who used them. ",
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
                            "value": "Nava’s founders recognized that modern technology skills, paired with strong consulting skills, could help our public institutions adapt to the challenges of the digital age. In 2015, they formed Nava as a public benefit corporation to transform the services, programs, and agencies that we all depend on.",
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
    "colorTheme": null
};