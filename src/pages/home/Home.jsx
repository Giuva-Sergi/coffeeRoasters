import styles from "./Home.module.css";
import HeroHome from "./HeroHome";
import Collection from "./Collection";

function Home() {
  return (
    <main className={styles.main}>
      <HeroHome />
      <Collection />
    </main>
  );
}

export default Home;
