import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportShoutoutSection from "./ReportShoutoutSection";

export default {
  title: "Blocks / Report Body / Report Section",
  component: ReportShoutoutSection,
} as ComponentMeta<typeof ReportShoutoutSection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportShoutoutSection> = (args) => (
  <ReportShoutoutSection {...args} />
);

export const Shoutouts = Template.bind({});

Shoutouts.args = {
  title: "Shoutouts",
  introduction: `At the end of every weekly all-staff meeting, it’s Nava tradition
  to show appreciation by “shouting out” particularly special things Navanauts did that week. It’s a privilege to close our week with gratitude for the work and each other.\n\nIt’s with great appreciation that we shout out the communities
  that support us, teach us, and cheer us on. Thank you Nava staff, alums, partners, the Navatots who were born this past year, and last but not least, Navapets for making the work in this report possible. See below for our complete list of shoutouts\n\nSpecial shoutout to [Brian Rea](http://www.brianrea.com/) for the illustrations in this report 🎉.`,
  lists: [],
  theme: {
    sage: {
      background: "bg-sage-50",
      text: "text-sage-pbr",
    },
    default: {
      text: "text-gray-900",
    },
  },
};
