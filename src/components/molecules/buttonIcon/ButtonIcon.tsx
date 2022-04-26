import React from "react";
import styles from "./ButtonIcon.module.scss";
import classNames from "classnames";
import { Button, Icon } from "./../../atoms";

enum sizeIcon {
  small,
  medium,
  large,
}

type AppProps = {
  className?: string;
  size?: keyof typeof sizeIcon;
};

export const ButtonIcon = ({ className, size }: AppProps) => {
  return (
    <Button className={classNames(styles.buttonIcon, className)}>
      <Icon iconType={"plus"} size={size} />
    </Button>
  );
};
