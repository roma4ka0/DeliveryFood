import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Home from "../../Images/home.png";
import User from "../../Images/user.png";
import Cart from "../../Images/cart.png";

const Header = () => {
  return (
    <section className={styles.HeaderContain}>
      <NavLink className={styles.Logo} to="/">
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
        <button className={styles.Cart}>
          <img src={Cart} alt="Кошик" />
          Кошик
        </button>
      </section>
    </section>
  );
};

export default Header;
