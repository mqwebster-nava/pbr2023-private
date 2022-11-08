import ContentCard from "./ContentCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Content Card",
  component: ContentCard,
  argTypes: {
    summary: { control: "text", description: "Button text" },
    
    size: {
      options: ["quarter", "third", "half"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ContentCard>;

const Template: ComponentStory<typeof ContentCard> = (args) => (
  <div className={`${args.size=="quarter"?"w-1/4":args.size=="half"?"w-1/2":"w-1/3" } p-md`}>
    <ContentCard {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  path: "/",
  type: "Insight",
  title: "A day at Nava as an infrastructure engineer",
  kicker:"Example kicker",
  summary:
    "A day at Nava with Wei Leong, an infrastructure engineer working on the Medicare Payment System Modernization team.",
};
