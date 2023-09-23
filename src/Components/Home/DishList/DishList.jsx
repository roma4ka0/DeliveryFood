import React from "react";
import Dish from "../Dish/Dish";

import image1 from "../../../Images/Restaurant/image1.png";
import image2 from "../../../Images/Restaurant/image2.png";
import image3 from "../../../Images/Restaurant/image3.png";
import image4 from "../../../Images/Restaurant/image4.png";
import image5 from "../../../Images/Restaurant/image5.png";
import image6 from "../../../Images/Restaurant/image6.png";

import styles from "./DishList.module.css";

const dishData = [
  {
    id: 1,
    name: "Піца плюс",
    image: image1,
    to: "/DeliveryFood/restaurant",
  },
  {
    id: 2,
    name: "Тануки",
    image: image2,
    to: "/DeliveryFood/restaurant",
  },
  {
    id: 3,
    name: "FoodBand",
    image: image3,
    to: "/DeliveryFood/restaurant",
  },
  {
    id: 4,
    name: "Жадина-піца",
    image: image4,
    to: "/DeliveryFood/restaurant",
  },
  {
    id: 5,
    name: "Крапка їжі",
    image: image5,
    to: "/DeliveryFood/restaurant",
  },
  {
    id: 6,
    name: "PizzaBurger",
    image: image6,
    to: "/DeliveryFood/restaurant",
  },
];

const DishList = () => {
  return (
    <section className={styles.Contain}>
      {dishData.map((dish) => (
        <Dish
          key={dish.id}
          DishName={dish.name}
          image={dish.image}
          to={dish.to}
        />
      ))}
    </section>
  );
};

export default DishList;
