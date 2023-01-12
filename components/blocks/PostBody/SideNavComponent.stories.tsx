// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  SideNavComponent from './SideNavComponent';
// TODO 
export default {
  title: 'Blocks /  Post Body / Side Nav',
  component: SideNavComponent,
} as ComponentMeta<typeof SideNavComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SideNavComponent> = (args) => <SideNavComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
    h2Sections:[],
    activeSection:""
};
