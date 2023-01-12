// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleFeed from "./ArticleFeed";
export default {
  title: "Blocks /  Article Feed",
  component: ArticleFeed,
  parameters: {
    docs: {
      description: {
        component: "Button used to submit forms",
      },
    },
  },
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    layout: {
      options: ["1 large 2 small cards row", "3 card row"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ArticleFeed>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ArticleFeed> = (args) => (
  <ArticleFeed {...args}></ArticleFeed>
);

export const Primary = Template.bind({});

Primary.args = {
  title: "A day  at Nava",
  body: "New projects, challenges, and opportunities mean no two days at Nava are alike.",
  layout: "3 card row",
  id: "VCxkKZMIzLeUNYIiiXS5G",
  items: [
    {
      __typename: "Post",
      id: "program-director-angela-colter",
      date: "2021-06-30T04:00:00.000Z",
      title: "A day at Nava as a program director",
      slug: "a-day-at-nava-as-a-program-director",
      contentType: "Working at Nava",
      shortSummary:
        "Angela Colter, a program director, describes her past experience working in government and collaborating with Nava’s top-notch technical team.",
      contentTags: ["A Day At Nava"],
      clientName: null,
      promoImage: {
        sys: {
          id: "26CEIuxhAypz4NwhtU1cUk",
        },
        url: "https://images.ctfassets.net/t2ekr6eg3fr3/26CEIuxhAypz4NwhtU1cUk/a8dd41a91accb9d527d203a866b64484/_uploads_DayInLifeAngelaColter_Lede.jpeg",
        width: 1600,
        height: 900,
        title: "DayInLifeAngelaColter_Lede.",
        description:
          "Nava Program Director Angela Colter speaks on a panel on a conference.",
      },
    },
    {
      __typename: "Post",
      id: "security-engineer-mohib-rizvi",
      date: "2022-07-13T15:29:00.000Z",
      title: "A day at Nava as a security engineer",
      slug: "a-day-at-nava-as-a-security-engineer",
      contentType: "Working at Nava",
      shortSummary:
        "Mohib Rizvi, a security engineer, describes building security architecture and the importance of mission-driven work.",
      contentTags: ["A Day At Nava"],
      clientName: null,
      promoImage: null,
      leadImage: null,
    },
    {
      sys: {
        id: "senior-engineer-kat-tipton",
      },
      __typename: "Post",
      date: "2022-02-23T23:29:00.000Z",
      title: "A day at Nava as a senior engineer",
      slug: "a-day-at-nava-as-a-senior-engineer",
      contentType: "Working at Nava",
      shortSummary:
        "Kat Tipton, a senior engineer, describes the joys of software archeology and Nava’s strong culture of mentorship.",
      contentTags: ["careers", "a day at Nava"],
      clientName: null,
      promoImage: {
        sys: {
          id: "2qQsmbNME5qYzqaGBGgvGF",
        },
        url: "https://images.ctfassets.net/t2ekr6eg3fr3/2qQsmbNME5qYzqaGBGgvGF/2239479ab6ec5ff014387bf473af7169/_uploads_DayInLife_KatTipton.jpeg",
        width: 1600,
        height: 900,
        title: "DayInLife_KatTipton.",
        description: "Kat Tipton poses outside of a row of hedges.",
      },
    },
  ],
};
