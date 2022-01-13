import LeftRepeater from './LeftRepeater'
import type { RepeaterProps } from './LeftRepeater'
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Rows/Left Repeater',
  component: LeftRepeater,
} as Meta


const Template: Story<RepeaterProps> = (args) => <LeftRepeater {...args}>Default Repeater</LeftRepeater>

export const Primary: Story<RepeaterProps> = Template.bind({})


