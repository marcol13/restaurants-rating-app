import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type TypesProps = {
  submit: string;
  edit: string;
  delete: string;
};

const buttonTypes = {
  submit: styles.submit,
  edit: styles.edit,
  delete: styles.delete,
};

type AppProps = {
  type?: keyof TypesProps;
  children: string | JSX.Element;
  className?: string;
  onClick?: (prop: any) => void;
  onMouseEnter?: (prop: any) => void;
  onMouseLeave?: (prop: any) => void;
};

export const Button = ({
  type,
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: AppProps) => {
  return (
    <button
      className={classNames(buttonTypes[type!], className, styles.button)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseLeave}
    >
      {children}
    </button>
  );
};
