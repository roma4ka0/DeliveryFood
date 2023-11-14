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
            <h1>доставки їжі на дім</h1>
            <section className={styles.BannerDescription}>
              <p>Страви з юлюбленого ресторана привезе</p>
              <p>кур'єр у рукавичках, масці і з антисептиком</p>
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
            <input placeholder="Пошук страв і ресторанів" />
          </section>
        </section>

        <DishList />
      </section>
    </section>
  );
};

export default HomeMain;
