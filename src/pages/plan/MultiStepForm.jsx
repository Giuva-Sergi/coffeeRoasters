import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import Button from "./Button";
import Accordion from "./Accordion";
import OrderSummary from "./OrderSummary";
import CtaButton from "./CtaButton";
import styles from "./MultiStepForm.module.css";

function MultiStepForm() {
  const { steps, dispatch } = useMultiStepForm();
  const userPreferences = steps.map((step) => step.selectedOption);
  // console.log(userPreferences);
  return (
    <section className={styles.steps}>
      <div className={styles.btnContainer}>
        {steps.map((step) => (
          <Button
            key={step.id}
            step={step}
            dispatch={dispatch}
            userPreferences={userPreferences}
          />
        ))}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {steps.map((step) => (
            <Accordion
              key={step.id}
              step={step}
              dispatch={dispatch}
              userPreferences={userPreferences}
            />
          ))}
        </form>
        <OrderSummary />
        <CtaButton />
      </div>
    </section>
  );
}

export default MultiStepForm;
