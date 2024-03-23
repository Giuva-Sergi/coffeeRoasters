import styles from "./Home.module.css";
import HeroHome from "./HeroHome";
import Collection from "./Collection";
import Services from "./Services";
import HowItWorks from "./HowItWorks";

function Home() {
  return (
    <main className={styles.main}>
      <HeroHome />
      <Collection />
      <Services />
      <HowItWorks />
    </main>
  );
}

export default Home;
