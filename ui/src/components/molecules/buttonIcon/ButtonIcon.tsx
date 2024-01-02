import React from "react";
import styles from "./ButtonIcon.module.scss";
import classNames from "classnames";
import { Button, Icon } from "../../atoms";

enum sizeIcon {
  small,
  medium,
  large,
}

type AppProps = {
  className?: string;
  size?: keyof typeof sizeIcon;
  onClick?: () => void;
};

export const ButtonIcon = ({ className, size, onClick }: AppProps) => {
  return (
    <Button
      className={classNames(styles.buttonIcon, className)}
      onClick={onClick}
    >
      <Icon iconType={"plus"} size={size} />
    </Button>
  );
};
