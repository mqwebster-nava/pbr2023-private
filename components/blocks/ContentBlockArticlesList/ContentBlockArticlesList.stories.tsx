// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ContentBlockArticleList  from './ContentBlockArticlesList';
import { ContentCard } from '../../atom';
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Core Blocks / Content Block Article List',
  component: ContentBlockArticleList,
} as ComponentMeta<typeof ContentBlockArticleList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentBlockArticleList> = (args) => 
<ContentBlockArticleList {...args} >
<ContentCard
          title={"A day at Nava as an infrastructure engineer"}
          path={"/"}
        >
          A day at Nava with Wei Leong, an infrastructure engineer working on
          the Medicare Payment System Modernization team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a program strategist"} path={"/"}>
          A day at Nava with Martelle Esposito, a program strategist working on
          the Massachusetts Paid Family and Medical Leave team.
        </ContentCard>
        <ContentCard title={"A day at Nava as a software engineer"} path={"/"}>
          A day at Nava with Sharon Warner, a software engineer working on the
          Vermont Integrated Benefits team.
        </ContentCard>
</ContentBlockArticleList>
;

export const Primary = Template.bind({});
export const Alternative = Template.bind({});

Primary.args = {
    title: "Careers",
    body: "Come help us build the services of a better future for millions of people.",
};

