import { useNavigate } from "react-router-dom";
import EmpForm from "../components/EmployeeFormComponents/EmpForm";
import FormPageWrapper from "../layouts/formPageLayout/FormPageWrapper";
import BackButton from "../UI/BackButton";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <FormPageWrapper>
      <BackButton />
      <EmpForm />
    </FormPageWrapper>
  );
};

export default EmployeeForm;
