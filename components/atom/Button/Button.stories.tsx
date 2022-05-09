import { Button } from './Button'
import type { ButtonProps } from './Button'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'outlined',"white", "dark"],
      control: { type: 'radio' },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Default Button</Button>

export const Basic: Story<ButtonProps> = Template.bind({})

Basic.args = {
  variant: 'default',
  
}

// export const Outlined: Story<ButtonProps> = Template.bind({})

// export const Black: Story<ButtonProps> = Template.bind({})

// Outlined.args = {
//   variant: 'outlined',
// }
// Black.args = {
//   variant:"black"
// }
