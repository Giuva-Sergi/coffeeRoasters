import styles from "./Quality.module.css";
import qualityDesktop from "../../assets/about/desktop/image-quality.jpg";
import qualityTablet from "../../assets/about/tablet/image-quality.jpg";
import qualityMobile from "../../assets/about/mobile/image-quality.jpg";
function Quality() {
  return (
    <section className={styles.quality}>
      <div className={styles.description}>
        <h3>Uncompromising quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <picture>
        <source media="(max-width: 728px)" srcset={qualityMobile} />
        <source media="(max-width: 1024px)" srcset={qualityTablet} />
        <img
          className={styles.picture}
          src={qualityDesktop}
          alt="Image of a cappucino cup on a wooden table"
        />
      </picture>
    </section>
  );
}

export default Quality;
