import React, { useState } from "react";
import styles from "./ElementBar.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Text, Rating, Button } from "./../../atoms";

type AppProps = {
  elementId: number;
  imagePath: string;
  altImage: string;
  restaurantName: string;
  descriptionText: string;
  rating: number;
  className?: string;
};

export const ElementBar = ({
  elementId,
  imagePath,
  altImage,
  restaurantName,
  descriptionText,
  rating,
  className,
}: AppProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  if (isDeleted) return null;
  return (
    <div
      className={classNames(styles.container, className)}
      data-id={elementId}
    >
      <img src={imagePath} alt={altImage} className={styles.image} />
      <Text type={"h3"}>{restaurantName}</Text>
      <Text type={"p"}>{descriptionText}</Text>
      <Rating value={rating} />
      <div className={styles.buttonDiv}>
        <Link to={`/edit/${elementId}`}>
          <Button type="edit">Edytuj</Button>
        </Link>
        <Button type="delete" onClick={() => setIsDeleted(true)}>
          Usuń
        </Button>
      </div>
    </div>
  );
};
