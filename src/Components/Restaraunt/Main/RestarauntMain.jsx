import styles from "./Restaraunt.module.css";
import Rating from "../../../Images/RatingIMG.png";
import MenuList from "../MenuList/MenuList";

const RestarauntMain = () => {
  return (
    <section className={styles.MainContainer}>
      <section className={styles.HeaderRestoraunt}>
        <h1>Танукі</h1>
        <img src={Rating} />
        <p className={styles.Rating}>4.99</p>
        <p className={styles.Price}>Від 5 $</p>
        <ul>
          <li>Піцці і суші</li>
        </ul>
      </section>
      <MenuList />
    </section>
  );
};

export default RestarauntMain;
