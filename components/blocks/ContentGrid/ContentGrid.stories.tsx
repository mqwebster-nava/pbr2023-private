// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ContentGrid  from './ContentGrid';
import { ContentCard } from '../../atom';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks /  Content Grid',
  component: ContentGrid,
} as ComponentMeta<typeof ContentGrid>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentGrid> = (args) => 
<ContentGrid {...args} ></ContentGrid>;

export const Posts = Template.bind({});
export const FeatureGrid = Template.bind({});
export const TeamGrid = Template.bind({});


FeatureGrid.args = {
    id:"test",
    "__typename": "ContentGrid",
    variant:"default",
    contentType:"feature cards",
    "items":[
        {
            title:"Support populations",
            body:"whose well-being is under threat from institutional, economic, societal, or environmental pressures"
        },
        {
            title:"Make digital services",
            body:"more simple, effective, accessible, and equitable"
        },
        {
            title:"Continue to positively impact",
            body:"the communities we serve long after our contract ends"
        },

    ]
}


TeamGrid.args = {
    "id": "VCxkKZMIzLeUNYIiiXS5G",
    variant:"default",
    contentType:"leadership bios",
     "items": [
        {
            "id": "program-director-angela-colter",
            "name":"Angela Colter",
            "role": "Program Director",
            "image": {
                "sys": {
                    "id": "26CEIuxhAypz4NwhtU1cUk"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/26CEIuxhAypz4NwhtU1cUk/a8dd41a91accb9d527d203a866b64484/_uploads_DayInLifeAngelaColter_Lede.jpeg",
                "width": 1400,
                "height": 934,
                "title": "DayInLifeAngelaColter_Lede.",
                "description": "Nava Program Director Angela Colter speaks on a panel on a conference."
            },
        },
        {
            "id": "program-director-angela-colter",
            "name":"Angela Colter",
            "role": "Program Director",
            "image": {
                "sys": {
                    "id": "26CEIuxhAypz4NwhtU1cUk"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/26CEIuxhAypz4NwhtU1cUk/a8dd41a91accb9d527d203a866b64484/_uploads_DayInLifeAngelaColter_Lede.jpeg",
                "width": 1400,
                "height": 934,
                "title": "DayInLifeAngelaColter_Lede.",
                "description": "Nava Program Director Angela Colter speaks on a panel on a conference."
            },
        },
        {
            "id": "program-director-angela-colter",
            "name":"Angela Colter",
            "role": "Program Director",
            "image": {
                "sys": {
                    "id": "26CEIuxhAypz4NwhtU1cUk"
                },
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/26CEIuxhAypz4NwhtU1cUk/a8dd41a91accb9d527d203a866b64484/_uploads_DayInLifeAngelaColter_Lede.jpeg",
                "width": 1400,
                "height": 934,
                "title": "DayInLifeAngelaColter_Lede.",
                "description": "Nava Program Director Angela Colter speaks on a panel on a conference."
            },
        },
    
    ]
  };
  

  
Posts.args = {
  "id": "VCxkKZMIzLeUNYIiiXS5G",
  "__typename": "ContentGrid",
  "sys": {
      "id": "VCxkKZMIzLeUNYIiiXS5G"
  },
  "title": "A day  at Nava",
  "body": "New projects, challenges, and opportunities mean no two days at Nava are alike.",
  "items": [
      {
          "id": "program-director-angela-colter",
          "sys": {
              "id": "program-director-angela-colter"
          },
          "date": "2021-06-30T04:00:00.000Z",
          "title": "A day at Nava as a program director",
          "slug": "a-day-at-nava-as-a-program-director",
          "contentType": "Working at Nava",
          "shortSummary": "Angela Colter, a program director, describes her past experience working in government and collaborating with Nava’s top-notch technical team.",
          "contentTags": [
              "A Day At Nava"
          ],
          "clientName": null,
          "promoImage": {
              "sys": {
                  "id": "26CEIuxhAypz4NwhtU1cUk"
              },
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/26CEIuxhAypz4NwhtU1cUk/a8dd41a91accb9d527d203a866b64484/_uploads_DayInLifeAngelaColter_Lede.jpeg",
              "width": 1400,
              "height": 934,
              "title": "DayInLifeAngelaColter_Lede.",
              "description": "Nava Program Director Angela Colter speaks on a panel on a conference."
          },
          "leadImage": {
              "sys": {
                  "id": "26CEIuxhAypz4NwhtU1cUk"
              },
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/26CEIuxhAypz4NwhtU1cUk/a8dd41a91accb9d527d203a866b64484/_uploads_DayInLifeAngelaColter_Lede.jpeg",
              "width": 1400,
              "height": 934,
              "title": "DayInLifeAngelaColter_Lede.",
              "description": "Nava Program Director Angela Colter speaks on a panel on a conference."
          }
      },
      {
          "id": "security-engineer-mohib-rizvi",
          "sys": {
              "id": "security-engineer-mohib-rizvi"
          },
          "date": "2022-07-13T15:29:00.000Z",
          "title": "A day at Nava as a security engineer",
          "slug": "a-day-at-nava-as-a-security-engineer",
          "contentType": "Working at Nava",
          "shortSummary": "Mohib Rizvi, a security engineer, describes building security architecture and the importance of mission-driven work.",
          "contentTags": [
              "A Day At Nava"
          ],
          "clientName": null,
          "promoImage": null,
          "leadImage": null
      },
      {
          "id": "senior-engineer-kat-tipton",
          "sys": {
              "id": "senior-engineer-kat-tipton"
          },
          "date": "2022-02-23T23:29:00.000Z",
          "title": "A day at Nava as a senior engineer",
          "slug": "a-day-at-nava-as-a-senior-engineer",
          "contentType": "Working at Nava",
          "shortSummary": "Kat Tipton, a senior engineer, describes the joys of software archeology and Nava’s strong culture of mentorship.",
          "contentTags": [
              "careers",
              "a day at Nava"
          ],
          "clientName": null,
          "promoImage": {
              "sys": {
                  "id": "2qQsmbNME5qYzqaGBGgvGF"
              },
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2qQsmbNME5qYzqaGBGgvGF/2239479ab6ec5ff014387bf473af7169/_uploads_DayInLife_KatTipton.jpeg",
              "width": 1600,
              "height": 900,
              "title": "DayInLife_KatTipton.",
              "description": "Kat Tipton poses outside of a row of hedges."
          },
          "leadImage": {
              "sys": {
                  "id": "2qQsmbNME5qYzqaGBGgvGF"
              },
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2qQsmbNME5qYzqaGBGgvGF/2239479ab6ec5ff014387bf473af7169/_uploads_DayInLife_KatTipton.jpeg",
              "width": 1600,
              "height": 900,
              "title": "DayInLife_KatTipton.",
              "description": "Kat Tipton poses outside of a row of hedges."
          }
      }
  ]
};
