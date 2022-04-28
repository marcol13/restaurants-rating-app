import React, { useState } from "react";
import styles from "./ElementBar.module.scss";
import classNames from "classnames";
import { Text, Rating, Button } from "./../../atoms";

type AppProps = {
  imagePath: string;
  altImage: string;
  restaurantName: string;
  descriptionText: string;
  rating: number;
  className?: string;
};

export const ElementBar = ({
  imagePath,
  altImage,
  restaurantName,
  descriptionText,
  rating,
  className
}: AppProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) return null;
  return (
    <div className={classNames(styles.container, className)}>
      <img src={imagePath} alt={altImage} className={styles.image} />
      <Text type={"h3"}>{restaurantName}</Text>
      <Text type={"p"}>{descriptionText}</Text>
      <Rating value={rating} />
      <div className={styles.buttonDiv}>
        <Button type="edit">Edytuj</Button>
        <Button type="delete" onClick={() => setIsDeleted(true)}>
          Usuń
        </Button>
      </div>
    </div>
  );
};
