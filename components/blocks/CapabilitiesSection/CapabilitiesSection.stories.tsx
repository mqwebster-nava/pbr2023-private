import CapabilitiesSection, {
  CapabilitiesSectionProps,
  defaultIcon,
} from "./CapabilitiesSection";
import type { StoryFn, Meta } from "@storybook/react/";

export default {
  title: "Atoms/Capabilities Section",
  component: CapabilitiesSection,
  argTypes: {},
} as Meta;

const Template: StoryFn<CapabilitiesSectionProps> = (args) => (
  <div className="w-[331px] p-md">
    <CapabilitiesSection {...args} />
  </div>
);

export const Default: StoryFn<CapabilitiesSectionProps> = Template.bind({});
Default.args = {
  title: "Example Title",
  capabilityTitle: "Design",
  body: "De",
  items: [],
};
