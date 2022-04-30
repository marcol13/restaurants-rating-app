import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "./EditPage.module.scss";
import global from "./../GlobalPages.module.scss";
import classNames from "classnames";
import { Input, Text, Button } from "../../components/atoms";
import { ButtonIcon } from "../../components/molecules";
import { RateStars } from "../../components/organisms";
import { Link, useParams } from "react-router-dom";
import burger from "./../../assets/img/burger.jpg";

export const EditPage = () => {
  const [restaurant, setRestaurant] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState<string>();
  const [price, setPrice] = useState(0);
  const [quality, setQuality] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8002/restaurants?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => result.data[0])
      .then(({name, image, description, price, quality}) => {
        setRestaurant(name)
        setDescription(description)
        setPreview(image)
        setPrice(price)
        setQuality(quality)
      })
  }, []);

  const priceCallback = useCallback((price: number) => {
    setPrice(price);
  }, []);

  const qualityCallback = useCallback((quality: number) => {
    setQuality(quality);
  }, []);

  const ref = useRef();

  console.log(`${quality} ${price}`)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.item(0);
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && allowedTypes.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result! as string);
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("wrong type");
    }
  };

  return (
    <div className={classNames(global.container, styles.container)}>
      <div className={styles.firstRow}>
        <Input
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
          placeholder="Nazwa restauracji"
          className={styles.inputRestaurant}
        />
        <Link to="/">
          <Button type="submit" className={styles.submit}>Zmień</Button>
          {/* <ButtonIcon
            size="large"
            onClick={() => {
              console.log(
                `restaurant: ${restaurant}, description: ${description}, price: ${price}, quality: ${quality}, preview: ${preview}`
              );
            }}
          /> */}
        </Link>
      </div>
      <div className={styles.secondRow}>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Opis oceny"
          isTextField={true}
          className={styles.inputDescription}
        />
      </div>
      <div className={styles.thirdRow}>
        <div className={styles.imageField}>
          <Input
            onChange={(e) => {
              console.log(e.target.value);
              handleImageChange(e);
            }}
            placeholder="Obrazek"
            type="file"
            props={ref}
          />
          <img src={preview || burger} alt="burger" />
        </div>
        <div className={styles.ratingField}>
          <div>
            <Text type="h4">Cena</Text>
            <RateStars parrentCallback={priceCallback} initialValue={price}/>
          </div>
          <div>
            <Text type="h4">Jakość</Text>
            <RateStars parrentCallback={qualityCallback} initialValue={quality}/>
          </div>
        </div>
      </div>
    </div>
  );
};
