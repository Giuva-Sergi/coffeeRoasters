import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <header className={styles.header}>
      <img src={logo} alt="Coffee roasters logo" />
      <button
        aria-controls="primary-nav"
        aria-expanded={menuVisibility}
        className={styles.menuBtn}
      ></button>
      <nav id="primary-nav" className={styles.primaryNav}>
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
    </header>
  );
}

export default Navbar;
