import CtaButton from "./CtaButton";
import styles from "./HeroHome.module.css";
function HeroHome() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContainer}>
        <h1>Great coffee made simple.</h1>
        <p className={styles.heroDescription}>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <CtaButton message={"Create your plan"} />
      </div>
    </section>
  );
}

export default HeroHome;
