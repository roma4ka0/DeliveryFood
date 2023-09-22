import React from "react";
import styles from "./RestarauntMenu.module.css";
import Cart from "../../../Images/CartWhite.png";

const RestarauntMenu = (props) => {
  return (
    <section className={styles.MenuContainer}>
      <img src={props.img} alt="Menu Item" />
      <section>
        <h3>{props.Name}</h3>
        <p className={styles.Description}>{props.Description}</p>
        <section className={styles.ButtonAndPrice}>
          <button className={styles.Cart}>
          В кошик
            <img src={Cart} alt="Add to Cart" />
          </button>
          <p className={styles.Price}>{props.Price} ₽</p>
        </section>
      </section>
    </section>
  );
};

export default RestarauntMenu;
