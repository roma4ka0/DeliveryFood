import React, { useState, useEffect } from "react";
import styles from "./PhotoSlider.module.css";
import PizzaBanner from "../../Images/PizzaBaner.png";
import BurgerBanner from "../../Images/BurgerBanner.png";
import SushiBanner from "../../Images/SushiBanner.png";

const images = [PizzaBanner, BurgerBanner, SushiBanner];
const texts = [
  "Кур'єр в перчатках, масці та з антисептиком привезе страви з вашого улюбленого ресторану.",
  "Освіжаючі напої та смачні закуски будуть доставлені кур'єрами з дотриманням всіх заходів безпеки.",
  "Виберіть свій улюблений ресторан, і наші кур'єри привезуть вам найсмачніші страви прямо до вашого дому.",
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
          <h1>Онлайн-сервіс</h1>
          <h1>доставки їжі на дім</h1>
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
