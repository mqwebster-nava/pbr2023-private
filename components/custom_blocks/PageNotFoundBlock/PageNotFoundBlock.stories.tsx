import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PageNotFoundBlock from './PageNotFoundBlock';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Blocks / Page Not Found',
  component: PageNotFoundBlock,
} as ComponentMeta<typeof PageNotFoundBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PageNotFoundBlock> = (args) => <PageNotFoundBlock />;

export const Default = Template.bind({});
