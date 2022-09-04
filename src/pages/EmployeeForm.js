import EmpForm from "../components/EmployeeFormComponents/EmpForm";
import FormPageWrapper from "../layouts/formPageLayout/FormPageWrapper";
import BackButton from "../UI/BackButton";

const EmployeeForm = () => {
  return (
    <FormPageWrapper>
      <BackButton />
      <EmpForm />
    </FormPageWrapper>
  );
};

export default EmployeeForm;
