import styles from "./OrderSummary.module.css";
function OrderSummary({ preferences }) {
  const {
    preferences: pref,
    beanType,
    quantity,
    grindOption,
    deliveries,
  } = preferences;

  if (
    pref === "" &&
    beanType === "" &&
    quantity === "" &&
    grindOption === "" &&
    deliveries === ""
  ) {
    return (
      <div className={styles.summary}>
        <h5>order summary</h5>
        <p className={styles.order}>
          “Customize your plan with the available options then review and create
          your own order!”
        </p>
      </div>
    );
  }

  if (pref === "Capsule") {
    return (
      <div className={styles.summary}>
        <h5>order summary</h5>
        <p className={styles.order}>
          “I drink my coffee using <span>{pref}</span>, with a{" "}
          <span>{beanType || "..."}</span> type of bean.{" "}
          <span>{quantity || "..."}</span>, sent to me{" "}
          <span>{deliveries || "..."}</span>”
        </p>
      </div>
    );
  }

  return (
    <div className={styles.summary}>
      <h5>order summary</h5>
      <p className={styles.order}>
        “I drink my coffee as <span>{pref}</span>, with a{" "}
        <span>{beanType || "..."}</span> type of bean.{" "}
        <span>{quantity || "..."}</span> ground ala
        <span>{grindOption || "..."}</span>, sent to me{" "}
        <span>{deliveries || "..."}</span>”
      </p>
    </div>
  );
}

export default OrderSummary;
