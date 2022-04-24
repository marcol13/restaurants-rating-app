import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonIcon } from "./ButtonIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ButtonIconElement = Template.bind({});
ButtonIconElement.args = {
};
