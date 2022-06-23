// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  HighlightedInformationList from './HighlightedInformationList';
export default {
  title: 'Blocks /  Highlighted Information List',
  component: HighlightedInformationList,
} as ComponentMeta<typeof HighlightedInformationList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HighlightedInformationList> = (args) => <HighlightedInformationList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  "__typename": "HighlightedInformationList",
  "id": "info list",
   "items": [
    
        {
            "id": "3hutAfeQ6RfeBCPBRCVt92",
            "__typename": "FeatureCard",
            "sys": {
                "id": "3hutAfeQ6RfeBCPBRCVt92"
            },
            "title": "Easy-to-use and equitable services",
            "body": "for all",
            "icon": {
                "sys": {
                    "id": "BHfODV7LqscqYQUBTzUmJ"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/BHfODV7LqscqYQUBTzUmJ/ebf659daaa7cc3f2e02af05ff9d28cb3/Customer_experiences_icon.svg",
                "width": 39,
                "height": 35,
                "title": "Customer experiences icon",
                "description": ""
            }
        },
        {
            "id": "5V5TEf2L4y9FndEWUSqLLJ",
            "__typename": "FeatureCard",
            "sys": {
                "id": "5V5TEf2L4y9FndEWUSqLLJ"
            },
            "title": "Better program outcomes",
            "body": "for beneficiaries and government staff",
            "icon": {
                "sys": {
                    "id": "4jwzWHTwjr1lwkXMxIK8N9"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/4jwzWHTwjr1lwkXMxIK8N9/7f3ecbbe9f44818aeb8fd8a40c172055/Program_outcomes_icon.svg",
                "width": 39,
                "height": 39,
                "title": "Program outcomes icon",
                "description": ""
            }
        },
        {
            "id": "2kuRNDAb05OFxUMOao06RE",
            "__typename": "FeatureCard",
            "sys": {
                "id": "2kuRNDAb05OFxUMOao06RE"
            },
            "title": "Adaptable and resilient agency operations ",
            "body": "in a changing world",
            "icon": {
                "sys": {
                    "id": "5qbmNPXi1mTKLrY7xvj0Dh"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5qbmNPXi1mTKLrY7xvj0Dh/b0522ea7f5004234a1c069d542257973/Agency_technology_icon.svg",
                "width": 39,
                "height": 39,
                "title": "Agency technology icon",
                "description": ""
            }
        }
    
   ]
   
};
