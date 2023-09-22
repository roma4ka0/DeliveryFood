import styles from "./Restaraunt.module.css";
import Rating from "../../../Images/RatingIMG.png";
import MenuList from "../MenuList/MenuList";

const RestarauntMain = () => {
  return (
    <section className={styles.MainContainer}>
      <section className={styles.HeaderRestoraunt}>
        <h1>Тануки</h1>
        <img src={Rating} />
        <p className={styles.Rating}>4.5</p>
        <p className={styles.Price}>От 900 ₽</p>
        <ul>
          <li>Піца та суші</li>
        </ul>
      </section>
      <MenuList />
    </section>
  );
};

export default RestarauntMain;
