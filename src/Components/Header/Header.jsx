import styles from "./Header.module.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import AuthModal from "../AuthModal/AuthModal";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Home from "../../Images/home.png";
import User from "../../Images/user.png";
import CartImage from "../../Images/cart.png";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/loginSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const UserName = useSelector((state) => state.login.UserName);
  const [IsOpenAuth, setOpenAuth] = useState(false);
  const [isOpenCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (IsOpenAuth && !isLogin) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [IsOpenAuth, isLogin]);

  const openCart = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  const openAuthModal = () => {
    setOpenAuth(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    <Navigate to="/DeliveryFood" replace />;
  };

  const closeAuthModal = () => {
    setOpenAuth(false);
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

      {isLogin && <p className={styles.UserName}>{UserName}</p>}
      <section className={styles.HeaderButtons}>
        {!isLogin && (
          <button className={styles.Login} onClick={openAuthModal}>
            <img src={User} alt="Користувач" />
            Увійти
          </button>
        )}

        {IsOpenAuth && !isLogin && (
          <AuthModal isOpen={IsOpenAuth} onCloseCart={closeAuthModal} />
        )}

        {isLogin && (
          <button className={styles.Login} onClick={handleLogout}>
            <img src={User} alt="Користувач" />
            Вийти
          </button>
        )}

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
