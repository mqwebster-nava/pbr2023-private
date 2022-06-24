import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportContent from "./ReportContent";

export default {
  title: "Blocks /  Report Content",
  component: ReportContent,
  isGreenBG: {
    options: [true, false],
    control: { type: "radio" },
  },
} as ComponentMeta<typeof ReportContent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportContent> = (args) => (
  <ReportContent {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  theme: {
    sage: {
      text: "text-sage-pbr",
    },
    default: {
      text: "text-gray-900",
    },
  },
  isGreenBG: true,
  content: `## Introduction

  We did not set out to start a company – we were brought together during an urgent and chaotic time to help fix HealthCare.gov. But while we were brought in as a temporary team, the issues we saw were anything but temporary. The structural and systemic challenges we saw reflected deep cracks in our civic life. Fault lines spanning generations, broken and brittle relationships between people and the government that’s meant to serve them. At the same time, we found partners and dedicated civil servants showing up, day after day, for the people. We decided, together, to find ways we could help.

  We started Nava with a mission: to improve the accessibility, effectiveness, and simplicity of government services. We formed as a public benefit corporation because we believe that all corporations have a deep social responsibility to the people affected by their work, and to the broader public. For organizations working to improve public programs that affect millions of lives, this should be the norm, not the exception.
  `,
};
