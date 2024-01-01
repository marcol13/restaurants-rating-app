import { useState } from "react";
import styles from "./ElementBar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Text, Rating, Button } from "./../../atoms";
import { apiURL } from "../../../utils/const";

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

  const navigate = useNavigate();

  const deleteElement = async () => {
    await fetch(`${apiURL}/restaurants/delete/${elementId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => console.log(response.json()));
    setIsDeleted(true);
    navigate("/");
  };

  if (isDeleted) return null;
  return (
    <div
      className={classNames(styles.container, className)}
      data-id={elementId}
    >
      <div className={styles.imageDiv}>
        <img src={imagePath} alt={altImage} />
      </div>
      <Text type={"h3"}>{restaurantName}</Text>
      <Text type={"p"} className={styles.description}>{descriptionText}</Text>
      <div className={styles.ratingDiv}>
        <Rating value={rating} />
      </div>
      <div className={styles.buttonDiv}>
        <Link to={`/edit/${elementId}`}>
          <Button type="edit">Edytuj</Button>
        </Link>
        <Button type="delete" onClick={deleteElement}>
          Usuń
        </Button>
      </div>
    </div>
  );
};
