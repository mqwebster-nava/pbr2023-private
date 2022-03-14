// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Navbar from './navbar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Wrappers / Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
};
