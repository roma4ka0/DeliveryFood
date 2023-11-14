import React from "react";
import { useDispatch } from "react-redux";
import styles from "./RestarauntMenu.module.css";
import Cart from "../../../Images/CartWhite.png";
import { addItem } from "../../../Store/cartSlice";

const RestarauntMenu = (props) => {
  const dispatch = useDispatch();

  const AddItemHandler = () => {
    const newItem = {
      id: props.id,
      name: props.Name,
      price: props.Price,
    };

    dispatch(addItem(newItem));
  };

  return (
    <section className={styles.MenuContainer}>
      <img src={props.img} alt="Menu Item" />
      <section>
        <h3>{props.Name}</h3>
        <p className={styles.Description}>{props.Description}</p>
        <section className={styles.ButtonAndPrice}>
          <button className={styles.Cart} onClick={AddItemHandler}>
            До кошика
            <img src={Cart} alt="Add to Cart" />
          </button>
          <p className={styles.Price}>{props.Price} $</p>
        </section>
      </section>
    </section>
  );
};

export default RestarauntMenu;
