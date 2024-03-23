import styles from "./Services.module.css";
import coffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";

function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <h2>Why choose us ?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src={coffeeBean}
            alt="Icon of a coffee bean"
            className={styles.serviceImage}
          />
          <div>
            <h4>Best quality</h4>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={gift}
            alt="Icon of a gift"
            className={styles.serviceImage}
          />
          <div>
            <h4>Exclusive benefits</h4>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={truck}
            alt="Icon of a truck"
            className={styles.serviceImage}
          />
          <div>
            <h4>Free shipping</h4>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
