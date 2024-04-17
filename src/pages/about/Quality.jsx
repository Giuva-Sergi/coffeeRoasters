import styles from "./Quality.module.css";
import qualityDesktop from "../../assets/about/desktop/image-quality.jpg";
import qualityTablet from "../../assets/about/tablet/image-quality.jpg";
import qualityMobile from "../../assets/about/mobile/image-quality.jpg";
import Balancer from "react-wrap-balancer";

function Quality() {
  return (
    <section className={styles.quality}>
      <div className={styles.description}>
        <h3>Uncompromising quality</h3>
        <p>
          <Balancer>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </Balancer>
        </p>
      </div>
      <picture>
        <source media="(max-width: 728px)" srcSet={qualityMobile} />
        <source media="(max-width: 1140px)" srcSet={qualityTablet} />
        <img
          className={styles.picture}
          src={qualityDesktop}
          alt="Image of a cappuccino cup on a wooden table"
        />
      </picture>
    </section>
  );
}

export default Quality;
