import styles from "./HomeMain.module.css";
import PizzaBanner from "../../../Images/PizzaBaner.png";

import Search from "../../../Images/search.png";
import DishList from "../DishList/DishList";

const HomeMain = () => {
  return (
    <section>
      <div className={styles.CenterContainer}>
        <section className={styles.BackgroundBanner}>
          <div className={styles.HeaderTextContain}>
            <h1>Онлайн-сервіс</h1>
            <h1>доставки їжі додому</h1>
            <section className={styles.BannerDescription}>
              <p>Страви з улюбленого ресторану привезе</p>
              <p>кур'єр у рукавичках, масці та з антисептиком</p>
            </section>
          </div>
          <img src={PizzaBanner} about="Banner" />
        </section>
      </div>

      <section className={styles.RestaurantContain}>
        <section className={styles.RestaurantHeader}>
          <h1>Ресторани</h1>
          <section className={styles.RestaurantSearch}>
            <img src={Search} alt="Search" />
            <input placeholder="Поиск блюд и ресторанов" />
          </section>
        </section>

        <DishList />
      </section>
    </section>
  );
};

export default HomeMain;
