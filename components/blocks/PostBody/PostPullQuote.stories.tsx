// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PostPullQuote from './PostPullQuote';

export default {
  title: 'Blocks /  Post Body / Pull Quote',
  component: PostPullQuote,
} as ComponentMeta<typeof PostPullQuote>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostPullQuote> = (args) => <PostPullQuote {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    body: "CMS is ahead of the curve with cloud modernization in the federal government… as of April 2019, only 11 percent of federal IT systems were running in the cloud.",
};
