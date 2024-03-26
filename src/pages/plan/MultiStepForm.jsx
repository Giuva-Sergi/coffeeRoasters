import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import Button from "./Button";
import Accordion from "./Accordion";
import OrderSummary from "./OrderSummary";
import CtaButton from "./CtaButton";
import styles from "./MultiStepForm.module.css";

function MultiStepForm() {
  const { steps, dispatch, userPreferences, isCapsule } = useMultiStepForm();
  console.log(isCapsule);
  console.log(userPreferences);

  return (
    <section className={styles.steps}>
      <div className={styles.btnContainer}>
        {steps.map((step) => (
          <Button
            key={step.id}
            step={step}
            dispatch={dispatch}
            // userPreferences={userPreferences}
            isCapsule={isCapsule}
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
        <OrderSummary preferences={userPreferences} />
        <CtaButton />
      </div>
    </section>
  );
}

export default MultiStepForm;