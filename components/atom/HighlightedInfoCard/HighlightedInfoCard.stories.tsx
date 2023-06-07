import HighlightedInfoCard, {
  defaultIcon,
  HighlightedInfoCardProps,
} from "./HighlightedInfoCard";
import type { StoryFn, Meta } from "@storybook/react/";

export default {
  title: "Atoms/Highlighted Info Card",
  component: HighlightedInfoCard,
  argTypes: {},
} as Meta;

const Template: StoryFn<HighlightedInfoCardProps> = (args) => (
  <div className="w-[331px] p-md">
    <HighlightedInfoCard {...args} />
  </div>
);

export const Default: StoryFn<HighlightedInfoCardProps> = Template.bind({});
Default.args = {
  title: "Example Title",
  body: "Longer body text",
  icon: defaultIcon, // TODO what to do with the icon selection (?),
};
