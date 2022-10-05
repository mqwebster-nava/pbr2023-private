import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportHeaderHero from "./ReportHeader2019";

export default {
  title: "Blocks /  Report Header / Hero",
  component: ReportHeaderHero,
} as ComponentMeta<typeof ReportHeaderHero>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportHeaderHero> = (args) => (
  <ReportHeaderHero {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Public Benefit Report",
  banner: "/images/pbrs/2019-head.png",
  altText: "",
  pdfLink: "/files/2019NavaPublicBenefitReport.pdf",
};
