import styles from "./About.module.css";
import HeroAbout from "./HeroAbout";
import Commitment from "./Commitment";

function About() {
  return (
    <main className={styles.main}>
      <HeroAbout />
      <Commitment />
    </main>
  );
}

export default About;
