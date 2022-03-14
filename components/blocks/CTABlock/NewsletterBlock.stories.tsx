// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Newsletter from './NewsletterBlock';
import { Button } from 'components/atom/Button/Button';
export default {

  title: 'Blocks / CTA Block / Newsletter',
  component: Newsletter,
} as ComponentMeta<typeof Newsletter>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Newsletter> = (args) => <Newsletter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};