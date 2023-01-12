// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostSummarySection from "./PostSummarySection";

export default {
  title: "Blocks /  Post Body / Post Summary Section",
  component: PostSummarySection,
} as ComponentMeta<typeof PostSummarySection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostSummarySection> = (args) => (
  <div className={"responsive-container"}>
    <PostSummarySection {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  title: "In this guide:",
  body: (
    <ul>
      <li>
        - Designing an effective welcome, getting started, or checklist page to
        explain a complex process or service experience.
      </li>
      <li>
       - Highlighting information that people will need to complete a form or
        benefits process.
      </li>
      <li>
       - Encouraging people to take specific actions, such as gathering documents
        or confirming their eligibility.
      </li>
    </ul>
  ),
};
