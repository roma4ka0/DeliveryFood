import styles from "./HomeMain.module.css";
import PhotoSlider from "../../UI/PhotoSlider";

import Search from "../../../Images/search.png";
import DishList from "../DishList/DishList";

import { useState } from "react";

const HomeMain = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <PhotoSlider />
      <section className={styles.RestaurantContain}>
        <section className={styles.RestaurantHeader}>
          <h1>Ресторани</h1>
          <section className={styles.RestaurantSearch}>
            <img src={Search} alt="Search" />
            <input
              placeholder="Пошук страв і ресторанів"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </section>
        </section>

        <DishList searchTerm={searchTerm} />
      </section>
    </section>
  );
};

export default HomeMain;
