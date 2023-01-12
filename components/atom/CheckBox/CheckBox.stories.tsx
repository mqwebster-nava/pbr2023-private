import type { Story, Meta } from '@storybook/react/types-6-0'
import {CheckBox,  CheckBoxProps } from './CheckBox'

export default {
  title: 'Atoms/Form Input Button',
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component: 'Checkbox',
      },
    },
  },
  argTypes: {
    value: { control: 'text', defaultValue:"checkbox-1", description:"Button text" },
    label: { control: 'text', defaultValue:"Label",  description:"Name of label" },
  },
} as Meta

const Template: Story<CheckBoxProps> = (args) => <div className='w-full'><CheckBox {...args}/></div>

export const Basic: Story<CheckBoxProps> = Template.bind({})
Basic.args = {
  
}

