import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputElement = Template.bind({});
InputElement.args = {
  value: "",
  onChange: () => {},
};

export const TextFieldElement = Template.bind({});
TextFieldElement.args = {
  value: "",
  onChange: () => {},
  isTextField: true,
};
