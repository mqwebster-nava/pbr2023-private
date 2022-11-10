import { ComponentStory, ComponentMeta } from '@storybook/react';
import  TextBodyBlock from './TextBodyBlock';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Text Body Block',
  component: TextBodyBlock,
} as ComponentMeta<typeof TextBodyBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextBodyBlock> = (args) => <TextBodyBlock {...args} />;

export const Default = Template.bind({});
