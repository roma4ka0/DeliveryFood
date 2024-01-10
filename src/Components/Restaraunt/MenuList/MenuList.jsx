import React from "react";
import Menu from "../Menu/RestarauntMenu";
import menuData from "../../../Data/TanukiMenuData.json";
import { useParams } from "react-router-dom";

import image1 from "../../../Images/Menu/image1.png";
import image2 from "../../../Images/Menu/image2.png";
import image3 from "../../../Images/Menu/image3.png";
import image4 from "../../../Images/Menu/image4.png";
import image5 from "../../../Images/Menu/image5.png";
import image6 from "../../../Images/Menu/image6.png";

import styles from "./MenuList.module.css";

import FoodBandMenuData from "../../../Data/FoodBandMenuData.json";
import FoodPointMenuData from "../../../Data/FoodPointMenuData.json";
import GreedyPizzaMenuData from "../../../Data/GreedyPizzaMenuData.json";
import PizzaBurgerMenuData from "../../../Data/PizzaBurgerMenuData.json";
import PizzaPlusMenuData from "../../../Data/PizzaPlusMenuData.json";
import TanukiMenuData from "../../../Data/TanukiMenuData.json";

const images = [image1, image2, image3, image4, image5, image6];
const allMenus = [
  TanukiMenuData,
  FoodBandMenuData,
  FoodPointMenuData,
  GreedyPizzaMenuData,
  PizzaBurgerMenuData,
  PizzaPlusMenuData,
];

const MenuList = () => {
  const { restaurantId } = useParams();
  const menuIndex = parseInt(restaurantId, 10) - 1;
  const menuData = allMenus[menuIndex] || [];

  return (
    <section className={styles.Contain}>
      {menuData.map((item) => (
        <Menu
          key={item.id}
          id={item.id}
          img={images[item.id - 1]}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </section>
  );
};

export default MenuList;
