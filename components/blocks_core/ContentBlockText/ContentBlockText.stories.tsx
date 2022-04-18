// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ContentBlockText from './ContentBlockText';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Core Blocks / Content Block Text',
  component: ContentBlockText,
} as ComponentMeta<typeof ContentBlockText>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContentBlockText> = (args) => <ContentBlockText {...args} />;

export const Primary = Template.bind({});
export const Alternative = Template.bind({});

Primary.args = {
    title: "Careers",
    children: "Come help us build the services of a better future for millions of people.",
    type:"default"
};

Alternative.args = {
    title: "Careers",
    children: "Come help us build the services of a better future for millions of people.",
    type:"2 column"
};