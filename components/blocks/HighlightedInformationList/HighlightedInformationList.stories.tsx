// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  HighlightedInformationList from './HighlightedInformationList';
export default {
  title: 'Blocks /  Highlighted Information List',
  component: HighlightedInformationList,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    }
  },
} as ComponentMeta<typeof HighlightedInformationList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HighlightedInformationList> = (args) => <HighlightedInformationList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
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
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/3FosxQMrAo3C045k4ndLpv/c2fb4aec736d8694bd2082df1ddf137e/Customer_experiences_icon_V2.svg",
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
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/39JKyxZnihSsnL7o6lSmVE/0f928d79e8f76c9ee8501f2e0b2a1f4a/Program_outcomes_icon_V2.svg",
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
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/5lYJLDtTVvP5Mhm6fZlAQ2/c47d2fba1b8ac9623fef4381eca9daa2/Agency_technology_icon_V2.svg",
                "width": 39,
                "height": 39,
                "title": "Agency technology icon",
                "description": ""
            }
        }
    
   ]
   
};
