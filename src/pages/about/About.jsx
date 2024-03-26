import styles from "./About.module.css";
import HeroAbout from "./HeroAbout";
import Commitment from "./Commitment";
import Quality from "./Quality";
import Headquarters from "./Headquarters";

function About() {
  return (
    <main className={styles.main}>
      <HeroAbout />
      <Commitment />
      <Quality />
      <Headquarters />
    </main>
  );
}

export default About;
