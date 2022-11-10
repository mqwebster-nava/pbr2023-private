import { ComponentStory, ComponentMeta } from '@storybook/react';
import  OpenRolesComponent from './OpenRolesComponent';

export default {
  title: 'Custom Blocks /  Open Roles Component',
  component: OpenRolesComponent,
} as ComponentMeta<typeof OpenRolesComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof OpenRolesComponent> = (args) => <OpenRolesComponent />;

export const Default = Template.bind({});

