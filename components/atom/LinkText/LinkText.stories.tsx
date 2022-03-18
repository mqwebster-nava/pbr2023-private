

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkText } from './LinkText';


export default {
  title: 'Atoms / Link Text',
  component: LinkText,
} as ComponentMeta<typeof LinkText>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LinkText> = (args) => <LinkText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    href:"/",
    children:"Example Link Text",
}