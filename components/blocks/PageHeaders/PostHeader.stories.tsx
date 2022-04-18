// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PostHeader from './PostHeader';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Page Header / Post Header',
  component: PostHeader,
} as ComponentMeta<typeof PostHeader>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostHeader> = (args) => <PostHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title:"Simplifying the social safety net",
  longSummary:"Nava visited communities across the country to understand the everyday experiences of people who rely on and manage the social safety net. These conversations showed us where there are opportunities to try out new processes and tools.",
  leadImage:"",
  contentType:"Insight",
};
