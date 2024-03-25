import { Link } from "react-router-dom";
import styles from "./CtaButton.module.css";

function CtaButton() {
  return (
    <Link to="/create-plan" className={styles.ctaButton}>
      Create your plan
    </Link>
  );
}

export default CtaButton;
