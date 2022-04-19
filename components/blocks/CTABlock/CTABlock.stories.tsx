// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CTABlock from './CTABlock';
import { Button } from 'components/atom/Button/Button';
export default {

  title: 'Blocks /  CTA Block',
  component: CTABlock,
} as ComponentMeta<typeof CTABlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CTABlock> = (args) => <CTABlock {...args} />;

export const Primary = Template.bind({});
export const Newsletter = Template.bind({});

Primary.args = {
    title: "Get In Touch",
    buttonText: "Contact us",
    buttonPath:"/contact",
    children: "test test test"
};

Newsletter.args = {
    type:"Newsletter"
}