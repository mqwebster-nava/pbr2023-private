import { Button } from './Button'
import type { ButtonProps } from './Button'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    variant: {
      options: ['default', 'outlined',"white", "dark"],
      control: { type: 'radio' },
    },
    buttonAriaLabel: { control: 'text' },
    analyticsLabel: { control: 'text' }
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}/>

export const Basic: Story<ButtonProps> = Template.bind({})

Basic.args = {
  variant: 'default',
    // @ts-ignore 
  children:"Default Button",
  href: "/",
}
