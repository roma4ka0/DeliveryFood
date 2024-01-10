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
      name: props.name,
      price: props.price,
    };

    dispatch(addItem(newItem));
  };

  return (
    <section className={styles.MenuContainer}>
      <img src={props.img} alt="Menu Item" />
      <section>
        <h3>{props.name}</h3>
        <p className={styles.Description}>{props.description}</p>
        <section className={styles.ButtonAndPrice}>
          <button className={styles.Cart} onClick={AddItemHandler}>
            До кошика
            <img src={Cart} alt="Add to Cart" />
          </button>
          <p className={styles.Price}>{props.price} $</p>
        </section>
      </section>
    </section>
  );
};

export default RestarauntMenu;
