import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const classList = !menuVisibility
    ? `${styles.primaryNav} ${styles.navHidden}`
    : `${styles.primaryNav}`;

  return (
    <header className={styles.header}>
      <img src={logo} alt="Coffee roasters logo" />
      <button
        aria-controls="primary-nav"
        aria-expanded={menuVisibility}
        className={styles.menuBtn}
        onClick={() => setMenuVisibility(!menuVisibility)}
      ></button>
      <nav id="primary-nav" className={classList}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" onClick={() => setMenuVisibility(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuVisibility(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/create-plan" onClick={() => setMenuVisibility(false)}>
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
