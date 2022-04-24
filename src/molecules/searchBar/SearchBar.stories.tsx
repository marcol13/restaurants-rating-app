import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchBar } from "./SearchBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const SearchBarElement = Template.bind({});
SearchBarElement.args = {
  value: "",
  onChange: () => {},
};
