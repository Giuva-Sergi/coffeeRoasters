import styles from "./OrderSummary.module.css";
function OrderSummary({ preferences }) {
  return (
    <div className={styles.summary}>
      <h5>order summary</h5>
      <p className={styles.order}>
        “I drink my coffee as <span>Filter</span>, with a <span>Decaf</span>{" "}
        type of bean. <span>250g</span> ground ala <span>Cafetiére</span>, sent
        to me <span>Every Week.</span>”
      </p>
    </div>
  );
}

export default OrderSummary;
