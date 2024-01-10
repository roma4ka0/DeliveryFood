import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../Menu/RestarauntMenu";
import { useParams } from "react-router-dom";

import image1 from "../../../Images/Menu/image1.png";
import image2 from "../../../Images/Menu/image2.png";
import image3 from "../../../Images/Menu/image3.png";
import image4 from "../../../Images/Menu/image4.png";
import image5 from "../../../Images/Menu/image5.png";
import image6 from "../../../Images/Menu/image6.png";

import styles from "./MenuList.module.css";

const images = [image1, image2, image3, image4, image5, image6];

const MenuList = () => {
  const [menuData, setMenuData] = useState([]);
  const { restaurantId } = useParams();

  useEffect(() => {
    const menuUrls = {
      1: "https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/TanukiMenuData.json",
      2: "https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/FoodBandMenuData.json",
      3: "https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/FoodPointMenuData.json",
      4: "https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/GreedyPizzaMenuData.json",
      5: "https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/PizzaBurgerMenuData.json",
      6: "https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/PizzaPlusMenuData.json",
    };

    const menuUrl = menuUrls[restaurantId] || "";
    if (menuUrl) {
      axios
        .get(menuUrl)
        .then((response) => {
          setMenuData(response.data || []);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных меню:", error);
        });
    }
  }, [restaurantId]);

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
