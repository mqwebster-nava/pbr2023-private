import HighlightedInfoCard, {defaultIcon, HighlightedInfoCardProps} from "./HighlightedInfoCard";
import type { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: "Atoms/Highlighted Info Card",
  component: HighlightedInfoCard,
  argTypes: {
    
  },
}  as Meta

const Template: Story<HighlightedInfoCardProps> = (args) => <div className='w-[331px] p-md'><HighlightedInfoCard {...args}/></div>

export const Default: Story<HighlightedInfoCardProps> = Template.bind({})
Default.args = {
    title: "Example Title",
    body: "Longer body text",
    icon: defaultIcon, // TODO what to do with the icon selection (?),
}
