// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PostImage from './PostImage';

export default {
  title: 'Blocks /  Post Body / Post Image',
  component: PostImage,
} as ComponentMeta<typeof PostImage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostImage> = (args) => <PostImage {...args} />;

export const Default = Template.bind({});

Default.args = {
    border:"gray",
    caption:"Nava's CEO and co-founder, Rohan Bhobe, moderate a panel about how they quantify progress, think long-term, endure difficult times, and be active stewards of their efforts.",
    image:{
        sys: { id: 'mq5nTWUTQNVx3K2Mllmto' },
        url: 'https://images.ctfassets.net/t2ekr6eg3fr3/5GtuMJSPi9BkvCSjLvGK3K/a0fda4ad866609323b1c4da970d86468/image1.png',
        width: 2220,
        height: 888,
        title: 'Values gallery V1',
        description: ''
      }
};
