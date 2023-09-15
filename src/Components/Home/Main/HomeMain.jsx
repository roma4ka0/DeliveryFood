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
            <h1>Онлайн-сервис</h1>
            <h1>доставки еды на дом</h1>
            <section className={styles.BannerDescription}>
              <p>Блюда из любимого ресторана привезет</p>
              <p>курьер в перчатках, маске и с антисептиком</p>
            </section>
          </div>
          <img src={PizzaBanner} />
        </section>
      </div>

      <section className={styles.RestaurantContain}>
        <section className={styles.RestaurantHeader}>
          <h1>Рестораны</h1>
          <section className={styles.RestaurantSearch}>
            <img src={Search} />
            <input placeholder="Поиск блюд и ресторанов" />
          </section>
        </section>

        <DishList />
      </section>
    </section>
  );
};

export default HomeMain;
