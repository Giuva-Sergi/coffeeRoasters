import HowItWorks from "../home/HowItWorks";
import MultiStepForm from "./MultiStepForm";
import styles from "./CreatePlan.module.css";
import HeroPlan from "./HeroPlan";
function CreatePlan() {
  return (
    <main className={styles.main}>
      <HeroPlan />
      <HowItWorks createPlan={true} />
      <MultiStepForm />
    </main>
  );
}

export default CreatePlan;
