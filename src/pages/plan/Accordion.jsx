import InputButton from "./InputButton";
import styles from "./Accordion.module.css";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";

function Accordion({ step, dispatch }) {
  const {
    id,
    button: buttonName,
    accordionTitle,
    radioButtons: buttons,
    isActive,
  } = step;

  return (
    <fieldset className={styles.formField}>
      <div
        className={styles.accordionHeader}
        onClick={() => dispatch({ type: "OPEN_ACCORDION", id })}
      >
        <h4 className={styles.accordionTitle}>{accordionTitle}</h4>
        <img
          src={arrow}
          alt="Arrow icon"
          className={isActive ? `${styles.rotate}` : undefined}
        />
      </div>
      <div
        className={
          isActive
            ? `${styles.radioBtnContainer} ${styles.active}`
            : `${styles.radioBtnContainer}`
        }
      >
        {buttons.map((button) => (
          <InputButton
            key={button.title}
            id={id}
            name={buttonName}
            info={button}
            dispatch={dispatch}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default Accordion;
