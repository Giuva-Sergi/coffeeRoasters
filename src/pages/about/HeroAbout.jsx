import styles from "./HeroAbout.module.css";

function HeroAbout() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContainer}>
        <h2>About us</h2>
        <p className={styles.heroDescription}>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
}

export default HeroAbout;
