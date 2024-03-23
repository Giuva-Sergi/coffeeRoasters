import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Coffee roasters logo" />
      <nav>
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
