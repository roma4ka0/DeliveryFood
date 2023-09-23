import React from "react";
import Menu from "../Menu/RestarauntMenu";

import image1 from "../../../Images/Menu/image1.png";
import image2 from "../../../Images/Menu/image2.png";
import image3 from "../../../Images/Menu/image3.png";
import image4 from "../../../Images/Menu/image4.png";
import image5 from "../../../Images/Menu/image5.png";
import image6 from "../../../Images/Menu/image6.png";

import styles from "./MenuList.module.css";

const MenuData = [
  {
    id: 1,
    name: "Рол вугор стандарт",
    image: image1,
    Description: "Рис, вугор, соус унаги, кунжут, водорості норі.",
    Price: 250,
  },
  {
    id: 2,
    name: "Каліфорнія лосось стандарт",
    image: image2,
    Description:
      "Рис, лосось, авокадо, огірок, майонез, масаго ікра, водорості норі.",
    Price: 395,
  },
  {
    id: 3,
    name: "Окінава стандарт",
    image: image3,
    Description:
      " Рис, відварна креветка, сир вершковий, лосось, огірок свіжий.",
    Price: 250,
  },
  {
    id: 4,
    name: "Цезар макі хl",
    image: image4,
    Description:
      "Рис, куряча грудка копчена, масаго ікра, томат, айсберг, соус цезар...",
    Price: 250,
  },
  {
    id: 5,
    name: "Ясай макі стандарт 185 г",
    image: image5,
    Description:
      "Рис, свіжий помідор, перець болгарський, авокадо, огірок, айсберг",
    Price: 250,
  },
  {
    id: 6,
    name: "Рол з креветкою стандарт",
    image: image6,
    Description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    Price: 250,
  },
];

const MenuList = () => {
  return (
    <section className={styles.Contain}>
      {MenuData.map((item) => (
        <Menu
          key={item.id}
          id={item.id}
          img={item.image}
          Name={item.name}
          Description={item.Description}
          Price={item.Price}
        />
      ))}
    </section>
  );
};

export default MenuList;
