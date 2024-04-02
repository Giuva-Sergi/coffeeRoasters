import styles from "./CtaButton.module.css";

function CtaButton({ isReady, onHandleVisibility }) {
  return (
    <button
      className={styles.ctaButton}
      disabled={!isReady}
      onClick={() => onHandleVisibility()}
    >
      Create my plan!
    </button>
  );
}

export default CtaButton;
