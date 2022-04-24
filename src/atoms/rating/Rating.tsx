import React from "react";
import classNames from "classnames";
import styles from "./Rating.module.scss";

type AppProps = {
  value: number;
  className?: string;
};

const ratingStyles = {
  good: styles.good,
  moderate: styles.moderate,
  bad: styles.bad,
};

export const Rating = ({ value, className }: AppProps) => {
  const ratingStyle =
    value >= 4.0
      ? ratingStyles.good
      : value >= 2.5
      ? ratingStyles.moderate
      : ratingStyles.bad;

  return (
    <div className={classNames(className, styles.rating, ratingStyle)}>{value.toFixed(1)}</div>
  );
};
