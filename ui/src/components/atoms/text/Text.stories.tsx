import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextElement = Template.bind({});
TextElement.args = {
  type: "p",
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci hic saepe error voluptas iusto! Voluptas, tempora dignissimos. Placeat, eos eaque. Nisi, et autem commodi molestiae voluptatibus ad voluptate consequatur."
};
