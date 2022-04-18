import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportIntroSection from "./ReportIntroSection";

export default {
  title: "Blocks / Core Blocks / Report Section",
  component: ReportIntroSection,
} as ComponentMeta<typeof ReportIntroSection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportIntroSection> = (args) => (
  <ReportIntroSection {...args} />
);

export const Intro = Template.bind({});

Intro.args = {
  body: `
  ## Introduction

  We started Nava as a public benefit corporation with a lot of urgency—HealthCare.gov needed help, people needed access to care, and the public was losing trust in the government's ability to work in the digital age.

  We also started Nava with a lot of aspirations—that the lessons we’d learned fixing HealthCare.gov could help avoid future disasters entirely, and that taking a human-centered approach would in time change the standards, practices, and culture around delivering public digital services. We started Nava because we want to live in a world where public institutions are able to earn trust by quickly and effectively responding to people’s needs.

  But it feels like we're a long ways away from that right now. The global pandemic we're living through is unprecedented in our lifetimes. What's being made painfully clear is that the failure of critical public services causes real harm, both physical and financial. Our healthcare system is being overwhelmed, millions are pouring onto unemployment, and we're seeing an unprecedented number of people trying to access government programs. **It has never been more important for government services to be simple, effective, and accessible to all.**
  `,
  theme: {
    sage: {
      background: "bg-sage-50",
      text: "text-sage-pbr",
    },
    default: {
      text: "text-navy-900",
    },
  },
};
