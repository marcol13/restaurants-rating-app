import React from "react";
import styles from "./StarButton.module.scss";
import classNames from "classnames";
import { Button, Icon } from "./../../atoms";

type AppProps = {
  className?: string;
  colorIcon: keyof typeof colorIcon;
  onClick: (prop: any) => void;
  onMouseEnter?: (prop: any) => void;
  onMouseLeave?: (prop: any) => void;
  uid?: number;
};

enum colorIcon {
  gold,
  grey,
  black,
}

export const StarButton = ({
  className,
  colorIcon,
  onClick,
  onMouseEnter,
  onMouseLeave,
  uid,
}: AppProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(className, styles.div)}
    >
      <Button onClick={onClick} className={styles.button}>
        <Icon iconType={"star"} color={colorIcon} />
      </Button>
    </div>
  );
};
