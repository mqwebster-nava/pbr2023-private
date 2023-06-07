import { ReactChildren } from "react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
    variant: {
      options: ["default", "outlined", "white", "dark"],
      control: { type: "radio" },
    },
    buttonAriaLabel: { control: "text" },
    analyticsLabel: { control: "text" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Basic: StoryFn<ButtonProps> = Template.bind({});

Basic.args = {
  variant: "default",
  // @ts-ignore
  children: "Default Button",
  href: "/",
};
