import styles from "./Modal.module.css";
function Modal({ visibility, onHandleVisibility }) {
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
            “I drink my coffee as{" "}
            <span className={styles.highlight}> Filter</span>, with a
            <span className={styles.highlight}> Decaf</span> type of bean.
            <span className={styles.highlight}> 250g</span> ground ala
            <span className={styles.highlight}> Cafetiére</span>, sent to me
            <span className={styles.highlight}> Every Week</span>.”
          </p>
          <p className={styles.notification}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className={styles.ctaContainer}>
            <span className={styles.total}>$14.00/ mo</span>
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
