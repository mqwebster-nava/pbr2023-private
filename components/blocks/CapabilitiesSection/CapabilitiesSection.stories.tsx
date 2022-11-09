import CapabilitiesSection, { CapabilitiesSectionProps, defaultIcon} from "./CapabilitiesSection";
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: "Atoms/Highlighted Info Card",
  component: CapabilitiesSection,
  argTypes: {
    
  },
}  as Meta

const Template: Story<CapabilitiesSectionProps> = (args) => <div className='w-[331px] p-md'><CapabilitiesSection {...args}/></div>

export const Default: Story<CapabilitiesSectionProps> = Template.bind({})
Default.args = {
    title: "Example Title",
  capabilityTitle: "Design",
  body: "De",
  items: [],
}
