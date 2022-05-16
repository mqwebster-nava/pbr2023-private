import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ContactSection from './ContactSection';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Blocks / Contact Form Section',
  component: ContactSection,
} as ComponentMeta<typeof ContactSection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContactSection> = (args) => <ContactSection {...args} />;

export const Default = Template.bind({});
