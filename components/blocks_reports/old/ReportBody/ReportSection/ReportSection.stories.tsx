import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReportSection from "./ReportSection";

export default {
  title: "Blocks / Report Body / Report Section",
  component: ReportSection,
  picturePosition: {
    options: ["left", "right"],
    control: { type: "radio" },
  },
  isWhiteBG: {
    options: [true, false],
    control: { type: "radio" },
  },
} as ComponentMeta<typeof ReportSection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ReportSection> = (args) => (
  <ReportSection {...args} />
);

export const LeftPicturePosition = Template.bind({});

export const RightPicturePosition = Template.bind({});

const defaultArgs = {
  content: {
    title: "Creating responsive health care services for 58 million people",
    introduction: `We’re partnering with Centers for Medicare & Medicaid Services (CMS) to modernize how Medicare pays doctors.\n\nUsing a human-centered, agile approach, we’re improving the efficiency, flexibility, and reliability of claims processing. In turn, this will raise quality of care, facilitate smarter spending, and support a healthier Medicare population.`,
    body: `### Supporting first-class care\n\nMedicare delivers critical health care services to more than [58 million people](https://www.cms.gov/files/document/2018-mdcr-enroll-ab-2.pdf) or 18% of the entire U.S. population. Most are [over the age of 65 and/or living with disabilities](https://www.cms.gov/files/document/2018-mdcr-enroll-ab-3.pdf). Medicare provides more than [$2 billion](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet) of vital services per day, or [$750.2 billion annually](https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata/nhe-fact-sheet), for vulnerable populations. Its value to the country, health care providers, and patients is enormous.\n\nThe payments for these services provide financial
      stability to our entire health care system. Health care providers—from big, urban hospitals to small, rural private practices—rely on this cash flow. But inflexibility of payment models and the work required to document and process claims prevent doctors from being able to provide the best possible care to
      their patients.`,
  },
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

LeftPicturePosition.args = {
  ...defaultArgs,
  isWhiteBG: true,
  picture: "/images/pbrs/2019-1.png",
  picturePosition: "left",
};

RightPicturePosition.args = {
  ...defaultArgs,
  isWhiteBG: false,
  picture: "/images/pbrs/2019-2.png",
  picturePosition: "right",
};
