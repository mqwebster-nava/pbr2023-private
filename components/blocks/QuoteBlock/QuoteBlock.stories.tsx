// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  QuoteBlock from './QuoteBlock';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks /  Quote Block',
  component: QuoteBlock,
  argTypes: {
    color: {
      options: ['gold', 'purple'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof QuoteBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof QuoteBlock> = (args) => <QuoteBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color:'gold',
    content: "The government is responsible for serving the entire nation, and it’s rewarding to play a role in improving how they deliver their services. These improvements impact the lives and well-being of many people across the nation, especially those in vulnerable populations.",
    author:"Mohib Rizvi",
    authorRole:"Security Engineer",
   
};
