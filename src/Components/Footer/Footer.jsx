import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import Instagram from "../../Images/Socials/Instagram.png";
import Facebook from "../../Images/Socials/Facebook.png";
import VK from "../../Images/Socials/VK.png";

const Footer = () => {
  return (
    <section className={styles.FooterContainer}>
      <section className={styles.FooterCenterContainer}>
        <section className={styles.LogoContainer}>
          <NavLink className={styles.Logo} to="/DeliveryFood">
            <img src={Logo} />
            <span>
              <p>Delivery</p>
              <p>Food</p>
            </span>
          </NavLink>
        </section>
        <ul className={styles.LinksFooter}>
          <li>
            <Link>Ресторанам</Link>
          </li>
          <li>
            <Link>Кур'єрам</Link>
          </li>
          <li>
            <Link>Пресс-центр</Link>
          </li>
          <li>
            <Link>Контакти</Link>
          </li>
        </ul>
        <ul className={styles.SocialLinksFooter}>
          <li>
            <Link>
              <img src={Instagram} alt="Інстаграм" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={Facebook} alt="Фейсбук" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={VK} alt="ВК" />
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Footer;
