import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ReportIntroductionBlock from './ReportIntroduction';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Report Blocks / Report Introduction',
  component: ReportIntroductionBlock,
} as ComponentMeta<typeof ReportIntroductionBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportIntroductionBlock> = (args) => <ReportIntroductionBlock {...args} />;

export const Default = Template.bind({});
