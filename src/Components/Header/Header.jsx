import styles from "./Header.module.css";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Home from "../../Images/home.png";
import User from "../../Images/user.png";
import CartImage from "../../Images/cart.png";
import { useState } from "react";

const Header = () => {
  const [isOpenCart, setOpenCart] = useState(false);

  const openCart = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  return (
    <section className={styles.HeaderContain}>
      <NavLink className={styles.Logo} to="/DeliveryFood">
        <img src={Logo} alt="Логотип" />
        <span>
          <p>Delivery</p>
          <p>Food</p>
        </span>
      </NavLink>
      <section className={styles.HeaderSearch}>
        <img src={Home} alt="Домашня сторінка" />
        <input placeholder="Адреса доставки" />
      </section>
      <section className={styles.HeaderButtons}>
        <button className={styles.Login}>
          <img src={User} alt="Користувач" />
          Увійти
        </button>
        <button className={styles.Cart} onClick={openCart}>
          <img src={CartImage} alt="Кошик" />
          Кошик
        </button>

        <Cart isOpen={isOpenCart} onCloseCart={closeCart} />
      </section>
    </section>
  );
};

export default Header;
