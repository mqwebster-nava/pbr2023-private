import type { Story, Meta } from '@storybook/react/types-6-0'
import HorizontalLine, { HorizontalLineProps } from "./HorizontalLine";

export default {
  title: 'Atoms/Form Input Button',
  component: HorizontalLine,
  parameters: {
    docs: {
      description: {
        component: 'Button used to submit forms',
      },
    },
  },
  argTypes: {
    variant: {
        options: ["dark", "light"],
        control: { type: "radio" },
      },
      hideFromVoiceOver: { control: 'boolean', description:"for decorative dividers" },
  },
} as Meta

const Template: Story<HorizontalLineProps> = (args) => <div className='w-full'><HorizontalLine {...args}/></div>

export const Default: Story<HorizontalLineProps> = Template.bind({})
Default.args = {
  variant: "dark",
  hideFromVoiceOver:false
}

