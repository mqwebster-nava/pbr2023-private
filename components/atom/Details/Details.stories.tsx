import type { Story, Meta } from '@storybook/react/types-6-0'
import {Details, DetailsProps } from './Details'

export default {
  title: 'Atoms/Details',
  component: Details,
  parameters: {
    docs: {
      description: {
        component: 'Button used to submit forms',
      },
    },
  },
  argTypes: {
    summary: { control: 'text', defaultValue:"Submit", description:"Button text" },
    
  },
} as Meta

const Template: Story<DetailsProps> = (args) => <div className='w-full'><Details {...args}/></div>

export const Basic: Story<DetailsProps> = Template.bind({})
Basic.args = {
  summary: 'Details list',
   // @ts-ignore 
  children: <ul><li>A</li><li>B</li><li>C</li></ul>
}

