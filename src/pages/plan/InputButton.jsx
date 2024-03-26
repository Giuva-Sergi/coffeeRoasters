import styles from "./InputButton.module.css";

function InputButton({ id, name, info, dispatch }) {
  const { title, details, selected } = info;

  function handleOnClick() {
    dispatch({ type: "SELECT_OPTION", payload: { title, id } });
  }

  return (
    <div
      onClick={handleOnClick}
      className={
        selected ? `${styles.input} ${styles.selected}` : `${styles.input}`
      }
    >
      <input type="radio" id={title} name={name} value={title} />
      <label htmlFor={title}>{title}</label>
      <p>{details}</p>
    </div>
  );
}

export default InputButton;
