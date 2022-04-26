import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RateStars } from "./RateStars";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "RateStars",
  component: RateStars,
} as ComponentMeta<typeof RateStars>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RateStars> = (args) => (
  <RateStars {...args} />
);

export const StarButtonElement = Template.bind({});
StarButtonElement.args = {
};
