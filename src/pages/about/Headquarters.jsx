import styles from "./Headquarters.module.css";
import uk from "../../assets/about/desktop/illustration-uk.svg";
import australia from "../../assets/about/desktop/illustration-australia.svg";
import canada from "../../assets/about/desktop/illustration-canada.svg";

function Headquarters() {
  return (
    <section className={styles.headquarters}>
      <h4>Our headquarters</h4>
      <div className={styles.headquartersContainer}>
        <div className={styles.card}>
          <img src={uk} alt="Illustration of United Kingdom" />
          <h3>United Kingdom</h3>
          <address>
            68 Asfordby Rd
            <br />
            Alcaston
            <br />
            SY6 1YA
            <br />
            +44 1241 918425
          </address>
        </div>
        <div className={styles.card}>
          <img src={canada} alt="Illustration of Canada" />
          <h3>Canada</h3>
          <address>
            1528 Eglinton Avenue <br />
            Toronto
            <br />
            Ontario M4P 1A6 <br />
            +1 416 485 2997
          </address>
        </div>
        <div className={styles.card}>
          <img src={australia} alt="Illustration of Australia" />
          <h3>Australia</h3>
          <address>
            36 Swanston Street
            <br />
            Kewell
            <br />
            Victoria
            <br />
            +61 4 9928 3629
          </address>
        </div>
      </div>
    </section>
  );
}

export default Headquarters;
