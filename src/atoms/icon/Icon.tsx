import React from "react";
import classNames from "classnames";
import styles from "./Icon.module.scss";
import { AiFillStar, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

type AppProps = {
  iconType: string;
  className?: string;
  color?: string;
  size?: string;
};

const icons = {
  star: AiFillStar,
  search: AiOutlineSearch,
  plus: AiOutlinePlus,
};

export const Icon = ({ iconType, className, color = "red", size = "medium" }: AppProps) => {
//   let IconTag = icons[iconType]
};
