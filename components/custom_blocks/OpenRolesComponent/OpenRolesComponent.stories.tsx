import { ComponentStory, ComponentMeta } from '@storybook/react';
import  OpenRolesComponent from './OpenRolesComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Custom Blocks /  Open Roles Component',
  component: OpenRolesComponent,
} as ComponentMeta<typeof OpenRolesComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof OpenRolesComponent> = (args) => <OpenRolesComponent {...args} />;

export const Default = Template.bind({});

