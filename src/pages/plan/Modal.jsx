import styles from "./Modal.module.css";
function Modal({ visibility, onHandleVisibility, userPreferences, total }) {
  const { preferences, beanType, deliveries, grindOption, quantity } =
    userPreferences;

  return (
    <div
      className={visibility ? `${styles.modal} ${styles.active}` : styles.modal}
    >
      <div className={styles.modalContainer}>
        <header className={styles.modalHeader}>
          <h2>Order Summary</h2>
        </header>
        <section className={styles.summary}>
          <p className={styles.orderDescription}>
            {"“I drink my coffee "}
            {preferences === "Capsule" ? (
              <>
                using <span className={styles.highlight}>{preferences}</span>,
                with a <span className={styles.highlight}>{beanType}</span> type
                of bean.
                <span className={styles.highlight}>{quantity}</span> sent to me{" "}
                <span className={styles.highlight}>{deliveries}</span>.
              </>
            ) : (
              <>
                as <span className={styles.highlight}>{preferences}</span>, with
                a <span className={styles.highlight}>{beanType}</span> type of
                bean.
                <span className={styles.highlight}>{quantity}</span> ground ala{" "}
                <span className={styles.highlight}>{grindOption}</span>, sent to
                me <span className={styles.highlight}>{deliveries}</span>.
              </>
            )}
          </p>
          <p className={styles.notification}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className={styles.ctaContainer}>
            <span className={styles.total}>$ {total}.00/ mo</span>
            <button
              className={styles.checkoutBtn}
              onClick={() => onHandleVisibility()}
            >
              Checkout
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;
