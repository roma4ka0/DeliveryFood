import styles from "./Dish.module.css";
import RatingIMG from "../../../Images/RatingIMG.png";

const Dish = (props) => {
  return (
    <section className={styles.DishContain}>
      <img src={props.image} />
      <section className={styles.DishDescription}>
        <section className={styles.DishNameSection}>
          <h2 className={styles.DishName}>{props.DishName}</h2>
          <p className={styles.DishTime}>50 хв</p>
        </section>
        <section className={styles.DishRatingAndPrice}>
          <img src={RatingIMG} />
          <p className={styles.Rating}>5</p>
          <p className={styles.Price}>От 180 ₴</p>
          <ul>
            <li>Піцца</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Dish;
