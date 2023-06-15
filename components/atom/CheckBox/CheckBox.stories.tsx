import type { StoryFn, Meta } from "@storybook/react";
import { CheckBox, CheckBoxProps } from "./CheckBox";

export default {
  title: "Atoms/Form Input Checkbox",
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      defaultValue: "checkbox-1",
      description: "Button text",
    },
    label: {
      control: "text",
      defaultValue: "Label",
      description: "Name of label",
    },
  },
} as Meta;

const Template: StoryFn<CheckBoxProps> = (args) => (
  <div className="w-full">
    <CheckBox {...args} />
  </div>
);

export const Basic: StoryFn<CheckBoxProps> = Template.bind({});
Basic.args = {};
