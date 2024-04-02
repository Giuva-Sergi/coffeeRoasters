import { Link } from "react-router-dom";
import styles from "./CtaButton.module.css";

function CtaButton({ message }) {
  return (
    <Link to="/create-plan" className={styles.ctaButton}>
      {message}
    </Link>
  );
}

export default CtaButton;
