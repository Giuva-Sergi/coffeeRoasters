import styles from "./HeroPlan.module.css";
function HeroPlan() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContainer}>
        <h2>Create plan</h2>
        <p className={styles.heroDescription}>
          Coffee the way you wanted it to be. For coffee delivered tomorrow, or
          next week. For whatever brew method you use. For choice, for
          convenience, for quality.
        </p>
      </div>
    </section>
  );
}

export default HeroPlan;
