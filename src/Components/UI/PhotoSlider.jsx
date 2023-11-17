import React, { useState, useEffect } from "react";
import styles from "./PhotoSlider.module.css";
import PizzaBanner from "../../Images/PizzaBaner.png";
import BurgerBanner from "../../Images/BurgerBanner.png";
import SushiBanner from "../../Images/SushiBanner.png";

const images = [PizzaBanner, BurgerBanner, SushiBanner];
const texts = [
  "Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком",
  "Освежающие напитки и вкусные закуски доставят курьеры с соблюдением всех мер безопасности.",
  "Выберите свой любимый ресторан, и наши курьеры привезут вам вкуснейшие блюда прямо к вашей двери.",
];

const colors = ["#90ee90", "#87ceeb", "#4322"];

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWheel = (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    const container = document.getElementById("photoSliderContainer");

    const handleWheelEvent = (e) => {
      e.preventDefault();
      handleWheel(e);
    };

    container.addEventListener("wheel", handleWheelEvent);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      container.removeEventListener("wheel", handleWheelEvent);
      clearInterval(intervalId);
    };
  }, []);

  const containerStyle = {
    backgroundColor: colors[currentIndex],
  };

  return (
    <section
      id="photoSliderContainer"
      className={styles.CenterContainer}
      tabIndex="0"
    >
      <section
        className={styles.BackgroundBanner}
        style={{ ...containerStyle }}
      >
        <div className={styles.HeaderTextContain}>
          <h1>Онлайн-сервис</h1>
          <h1>доставки еды на дом</h1>
          <section className={styles.BannerDescription}>
            <p>{texts[currentIndex]}</p>
          </section>
        </div>
        <img src={images[currentIndex]} alt="Banner" />
      </section>
    </section>
  );
};

export default PhotoSlider;
