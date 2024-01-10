import React from "react";
import Dish from "../Dish/Dish";
import dishData from "../../../Data/dishData.json";

import image1 from "../../../Images/Restaurant/image1.png";
import image2 from "../../../Images/Restaurant/image2.png";
import image3 from "../../../Images/Restaurant/image3.png";
import image4 from "../../../Images/Restaurant/image4.png";
import image5 from "../../../Images/Restaurant/image5.png";
import image6 from "../../../Images/Restaurant/image6.png";

import styles from "./DishList.module.css";

const images = [image1, image2, image3, image4, image5, image6];

const DishList = ({ searchTerm }) => {
  const filteredDishes = dishData.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.Contain}>
      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          DishName={dish.name}
          image={images[dish.id - 1]}
          to={dish.to}
        />
      ))}
    </section>
  );
};

export default DishList;
