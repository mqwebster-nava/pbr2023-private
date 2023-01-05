// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  EmbeddedVideo from './EmbeddedVideo';

export default {
  title: 'Blocks /  Post Body / Embedded Video',
  component: EmbeddedVideo,
} as ComponentMeta<typeof EmbeddedVideo>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof EmbeddedVideo> = (args) => <EmbeddedVideo {...args} />;

export const Default = Template.bind({});

Default.args = {
    title:"Progress Takes Work",
    description:"Nava's CEO and co-founder, Rohan Bhobe, moderate a panel about how they quantify progress, think long-term, endure difficult times, and be active stewards of their efforts.",
    linkId:"rKbLGUcl9F0"
};
