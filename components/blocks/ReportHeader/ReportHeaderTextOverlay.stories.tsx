import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportHeaderTextOverlay from "./ReportHeaderTextOverlay";

export default {
  title: "Blocks / Core Blocks / Report Header / Text Overlay",
  component: ReportHeaderTextOverlay,
} as ComponentMeta<typeof ReportHeaderTextOverlay>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportHeaderTextOverlay> = (args) => (
  <ReportHeaderTextOverlay {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  reportTheme: "Progress takes work",
  title: "Public Benefit Report",
  banner: "/images/pbrs/2018-head.png",
  altText: "",
  pdfLink: "/files/2018NavaPublicBenefitReport.pdf",
};
