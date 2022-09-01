import LapForm from "../components/laptopFormComponents/LapForm";
import FormPageWrapper from "../layouts/formPageLayout/FormPageWrapper";
import BackButton from "../UI/BackButton";

const LaptopForm = () => {
  return (
    <FormPageWrapper>
      <BackButton />
      <LapForm />
    </FormPageWrapper>
  );
};

export default LaptopForm;
