import logo from "../assets/shared/desktop/logo-footer.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Coffee roaster logo" className={styles.logoImg} />
      <nav className={styles.footerNav}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about us</Link>
          </li>
          <li>
            <Link to="/create-plan">create your plan</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <Link to="#">
          <img src={facebook} alt="Facebook icon" />
        </Link>
        <Link to="#">
          <img src={twitter} alt="Twitter icon" />
        </Link>
        <Link to="#">
          <img src={instagram} alt="Instagram icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
