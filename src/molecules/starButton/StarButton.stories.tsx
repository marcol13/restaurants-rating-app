import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StarButton } from "./StarButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "StarButton",
  component: StarButton,
} as ComponentMeta<typeof StarButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StarButton> = (args) => (
  <StarButton {...args} />
);

export const StarButtonElement = Template.bind({});
StarButtonElement.args = {
  colorIcon: "black",
  onClick: () => {},
};
