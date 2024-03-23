import espresso from "../../assets/home/desktop/image-gran-espresso.png";
import danche from "../../assets/home/desktop/image-danche.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import styles from "./Collection.module.css";

function Collection() {
  return (
    <section className={styles.collection}>
      <div className={styles.gradientContainer}>
        <span className={styles.bigText}>our collection</span>
      </div>
      <div className={styles.coffeeTypes}>
        <div>
          <div>
            <img
              src={espresso}
              alt="Gran espresso coffee image"
              className={styles.coffeePacket}
            />
          </div>
          <div>
            <h4>Gran Espresso</h4>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={planalto}
              alt="Planalto coffee image"
              className={styles.coffeePacket}
            />
          </div>
          <div>
            <h4>Planalto</h4>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={piccollo}
              alt="Piccollo coffee image"
              className={styles.coffeePacket}
            />
          </div>
          <div>
            <h4>Piccollo</h4>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={danche}
              alt="Danche coffee image"
              className={styles.coffeePacket}
            />
          </div>
          <div>
            <h4>Danche</h4>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
