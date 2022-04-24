import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type AppProps = {
  value: string;
  onChange: (...args: any[]) => void;
  className?: string;
  placeholder?: string;
};

export const Input = ({ value, onChange, className, placeholder }: AppProps) => {
  return (
    <>
      <input
        type="text"
        className={classNames(className, styles.input)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};
