import styles from "./HomeMain.module.css";
import PhotoSlider from "../../UI/PhotoSlider";
import Search from "../../../Images/search.png";
import DishList from "../DishList/DishList";

const HomeMain = () => {
  return (
    <section>
      <PhotoSlider />
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
