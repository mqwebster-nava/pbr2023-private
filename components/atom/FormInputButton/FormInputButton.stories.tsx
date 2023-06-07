import type { StoryFn, Meta } from "@storybook/react";
import FormInputButton, { FormInputButtonProps } from "./FormInputButton";

export default {
  title: "Atoms/Form Input Button",
  component: FormInputButton,
  parameters: {
    docs: {
      description: {
        component: "Button used to submit forms",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      defaultValue: "Submit",
      description: "Button text",
    },
    name: {
      control: "text",
      defaultValue: "submit",
      description: "Name of the button",
    },
    isFullWidth: { control: "boolean", defaultValue: false },
    id: {
      control: "text",
      defaultValue: "button-id",
      description: "ID used to retrieve button element",
    },
  },
} as Meta;

const Template: StoryFn<FormInputButtonProps> = (args) => (
  <div className="w-full">
    <FormInputButton {...args} />
  </div>
);

export const Basic: StoryFn<FormInputButtonProps> = Template.bind({});
Basic.args = {
  value: "Submit",
  isFullWidth: false,
};
