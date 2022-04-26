import React from "react";
import classNames from "classnames";
import styles from "./Icon.module.scss";
import { AiFillStar, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import {type IconType} from "react-icons"

type IconProps = {
  star: IconType;
  search: IconType;
  plus: IconType;
}

type AppProps = {
  iconType: keyof IconProps;
  className?: string;
  size?: keyof typeof sizeIcon;
  color?: keyof typeof colorIcon;
};

const icons : IconProps = {
  star: AiFillStar,
  search: AiOutlineSearch,
  plus: AiOutlinePlus,
};

const sizeIcon = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large
}

const colorIcon = {
  black: styles.black,
  grey: styles.grey,
  gold: styles.gold
}

export const Icon = ({
  iconType,
  className,
  size = "medium",
  color = "black"
}: AppProps) => {
  const IconTag = icons[iconType];

  return(
    <>
      <IconTag className={classNames(sizeIcon[size], colorIcon[color], className)}/>
    </>
  )
};
