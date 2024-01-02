import React from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

type AppProps = {
  type?: keyof typeof textType;
  children: string;
  className?: string;
};

type ButtonProps = {
  type?: keyof typeof textType;
  children: string;
  className?: string;
  onClick: () => void;
};

const textType = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  p: styles.p,
};

export const Text = ({ type = "p", children, className }: AppProps) => {
  return <p className={classNames(className, textType[type])}>{children}</p>;
};

export const TextButton = ({
  type = "p",
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <Text type={type} className={className}>
        {children}
      </Text>
    </button>
  );
};
