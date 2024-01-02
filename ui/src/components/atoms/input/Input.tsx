import React from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type AppProps = {
  value?: string;
  onChange: (...args: any[]) => void;
  className?: string;
  placeholder?: string;
  isTextField?: boolean;
  type?: keyof typeof inputType;
  props?: any
};

const inputType = {
  text: styles.text,
  file: styles.file,
};

export const Input = ({
  value,
  onChange,
  className,
  placeholder,
  isTextField = false,
  type = "text",
  ...props
}: AppProps) => {
  // console.log(...type)
  return (
    <>
      {!isTextField && (
        <input
          type={type}
          className={classNames(className, inputType[type], styles.universal)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...(type === "file" ? { accept: "image/png, image/jpeg" } : {})}
          {...props}
        />
      )}
      {isTextField && (
        <textarea
          className={classNames(className, styles.textarea, styles.universal)}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      )}
    </>
  );
};
