import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";
import { ElementBar } from "./../../components/organisms";
import { ButtonIcon, SearchBar } from "./../../components/molecules";
import { Input, Text } from "./../../components/atoms";

export const MainPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchBar} />
        <ButtonIcon size="medium" />
      </div>
      <div className={styles.restarants}>
        <ElementBar
          imagePath="https://d1e3z2jco40k3v.cloudfront.net/-/media/kamispl-2016/franks-pl/recipes_img/2000x1125/big_0003_pikantny_teksanski_burger.png?rev=f2980b5e47d3472da0142bc30113c968&vd=20200704T053827Z&hash=42F58857DE48407DFBF083BA2EFE70BA"
          altImage="burger"
          restaurantName="McDonald"
          descriptionText="Fajne jedzenie! Szkoda, że Kevin jeszcze nie dojechał..."
          rating={4}
          className={styles.itemBar}
        />
      </div>
    </div>
  );
};
