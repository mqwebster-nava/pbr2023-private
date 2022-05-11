// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PostBlockQuote from './PostBlockQuote';

export default {
  title: 'Blocks /  Post Body / Block Quote',
  component: PostBlockQuote,
} as ComponentMeta<typeof PostBlockQuote>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostBlockQuote> = (args) => <PostBlockQuote {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    body: "This tool allows a positive user experience for claimants while...requirement from DOL. The creative and functional mechanism for tying data back to the database, and focus on user experience should be emulated in future improvements.",
    attribution:"Firstname Lastname, Position and Title "
};
