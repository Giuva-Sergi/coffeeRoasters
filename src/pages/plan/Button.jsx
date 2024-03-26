import styles from "./Button.module.css";

function Button({ step, dispatch, userPreferences }) {
  const { button, id, isActive, selectedOption } = step;

  // console.log(userPreferences.includes("Capsule"));
  return (
    <button
      disabled={
        button === "Grind option" && userPreferences.includes("Capsule")
      }
      onClick={() => dispatch({ type: "OPEN_ACCORDION", id })}
      className={
        isActive ? `${styles.active} ${styles.btnStep}` : `${styles.btnStep}`
      }
    >
      <span>{`0${id}`}</span>
      {button}
    </button>
  );
}

export default Button;
