import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PostEventSpeakersRow from './PostEventSpeakersRow';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Post Event Speakers Row',
  component: PostEventSpeakersRow,
} as ComponentMeta<typeof PostEventSpeakersRow>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostEventSpeakersRow> = (args) => <PostEventSpeakersRow {...args} />;

export const Default = Template.bind({});
