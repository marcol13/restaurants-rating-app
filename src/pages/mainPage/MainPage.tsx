import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import global from "./../GlobalPages.module.scss";
import classNames from "classnames";
import { ElementBar } from "./../../components/organisms";
import { ButtonIcon, SearchBar } from "./../../components/molecules";
import { Input, Text } from "./../../components/atoms";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const [elements, setElements] = useState([]);

  const getData = async (url = "http://localhost:8002/restaurants") => {
    return (
      fetch(url, {
        method: "GET",
      })
        // .then((response) => {
        //   if (response.status === 200) return response.body;
        //   else throw new Error("Nie udało się pobrać danych");
        // })
        .then((response) => response.json())
        .then((result) => setElements(result.data))
        .catch((error) => console.log(error))
    );
  };

  useEffect(() => {
    fetch("http://localhost:8002/restaurants", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setElements(result.data));
  }, []);

  console.log(elements);

  return (
    <div className={global.container}>
      <div className={styles.nav}>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchBar}
        />
        <Link to="/add">
          <ButtonIcon size="medium" />
        </Link>
      </div>
      <div className={styles.restarants}>
        {elements.map(({image, name, description, price, quality, id}) => {
          return (
            <ElementBar
              imagePath={image}
              altImage={image}
              restaurantName={name}
              descriptionText={description}
              rating={(price + quality) / 2}
              className={styles.itemBar}
              elementId={id}
              key={id}
            />
          );
        })}
        <ElementBar
          imagePath="https://d1e3z2jco40k3v.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?rev=f2980b5e47d3472da0142bc30113c968&vd=20200704T053827Z&hash=42F58857DE48407DFBF083BA2EFE70BA"
          altImage="burger"
          restaurantName="McDonald"
          descriptionText="Fajne jedzenie! Szkoda, że Kevin jeszcze nie dojechał..."
          rating={4}
          className={styles.itemBar}
          elementId={1}
        />
      </div>
    </div>
  );
};
