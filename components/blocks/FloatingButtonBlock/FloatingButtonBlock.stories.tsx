import { ComponentStory, ComponentMeta } from '@storybook/react';
import  FloatingButtonBlock from './FloatingButtonBlock';

export default {
  title: 'Blocks / Floating Button Block',
  component: FloatingButtonBlock,
} as ComponentMeta<typeof FloatingButtonBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof FloatingButtonBlock> = (args) => <FloatingButtonBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    "buttonText":"All insights",
    "buttonPath":"/"
}