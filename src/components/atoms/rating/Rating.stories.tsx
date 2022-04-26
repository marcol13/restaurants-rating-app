import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Rating } from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingElement = Template.bind({});
RatingElement.args = {
    value: 3.0
};
