// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ContentBlockArticleList  from './ContentBlockArticlesList';
import { ContentCard } from '../../atom';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks /  Content Block Article List',
  component: ContentBlockArticleList,
} as ComponentMeta<typeof ContentBlockArticleList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentBlockArticleList> = (args) => 
<ContentBlockArticleList {...args} ></ContentBlockArticleList>
;

export const Primary = Template.bind({});

Primary.args = {
  title: "Filtered Post List",
  buttonText: "Read more",
  buttonPath: "/",
  posts: [
    {
      path: "/",
      type: "Insight",
      title: "A day at Nava as an infrastructure engineer",
      children:
        "A day at Nava with Wei Leong, an infrastructure engineer working on the Medicare Payment System Modernization team.",
    },
    {
      path: "/",
      type: "Toolkit",
      title: "Plain language templates for user research",
      children:
        "Using plain language is essential to protecting privacy and getting informed consent in user research.",
    },
    {
      path: "/",
      type: "Insight",
      title: "A day at Nava as an infrastructure engineer",
      children:
        "A day at Nava with Wei Leong, an infrastructure engineer working on the Medicare Payment System Modernization team.",
      promoImage: {
        id: "5D9BooUBjHC6MYX45Xyk7T",
        url: "https://images.ctfassets.net/t2ekr6eg3fr3/5D9BooUBjHC6MYX45Xyk7T/5a2a30e213b7cd58240f7123d9815927/_uploads_Equitable_20recruiting_20story-slide-image-v01.jpg",
        title: "Equitable Recruiting Story Slide Image V01",
        description:
          "A chart divided into four quadrants shows that high-impact, low-effort work is a good place to start, while low-impact, high-effort work should be avoided.",
        width: 1500,
        height: 845,
      },
    },
  ],
  body: "Come help us build the services of a better future for millions of people.",
  max: 3,
};

