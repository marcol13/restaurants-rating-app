import React, { useState } from "react";
import styles from "./RateStars.module.scss";
import classNames from "classnames";
import { StarButton } from "../../molecules";

type AppProps = {
  className?: string;
};

function getFirstFalse(array: boolean[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) return i;
  }
  return array.length;
}

export const RateStars = ({ className }: AppProps) => {
  const [rating, setRating] = useState(new Array(5).fill(false));
  const [mouseRating, setMouseRating] = useState(rating);
  const [clickedRating, setClickedRating] = useState(rating);

  const onAction = (index: number) => {
    const array = new Array(index + 1)
      .fill(true)
      .concat(new Array(4 - index).fill(false));
    if (
      array.every((val, index) => {
        return val === mouseRating[index];
      }) === true
    ) {
      const falseArray = new Array(5).fill(false);
      setRating(falseArray);
      setMouseRating(falseArray);
      setClickedRating(falseArray);
      console.log("abcde");
    } else {
      setRating(array);
      setMouseRating(array);
      setClickedRating(array);
    }
  };

  const handleMouseEnter = (index: number) => {
    const array = new Array(index + 1)
      .fill(true)
      .concat(new Array(4 - index).fill(false));
    console.log(
      `array ${getFirstFalse(array)} rating ${getFirstFalse(rating)}`
    );
    if (getFirstFalse(array) > getFirstFalse(clickedRating)) {
      console.log("abcdef");
      setMouseRating(rating);
      setRating(array);
    }
  };

  const handleMouseLeave = (index: number) => {
    console.log(`leave ${index + 1}`);
    setRating(clickedRating);
  };

  return (
    <div className={classNames(className)}>
      {rating.map((el, index) => {
        return (
          <StarButton
            colorIcon={el === true ? "gold" : "grey"}
            onClick={() => {
              onAction(index);
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className={classNames(styles.button)}
            key={index}
          />
        );
      })}
    </div>
  );
};
