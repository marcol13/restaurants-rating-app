import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ElementBar } from "./ElementBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ElementBar",
  component: ElementBar,
} as ComponentMeta<typeof ElementBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ElementBar> = (args) => (
  <ElementBar {...args} />
);

export const ElementBarExample = Template.bind({});
ElementBarExample.args = {
  imagePath:
    "https://d1e3z2jco40k3v.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?rev=f2980b5e47d3472da0142bc30113c968&vd=20200704T053827Z&hash=42F58857DE48407DFBF083BA2EFE70BA",
  altImage: "burger",
  restaurantName: "McDonald",
  descriptionText: "Fajne jedzenie",
  rating: 4,
};
