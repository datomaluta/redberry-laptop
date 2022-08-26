import { Fragment } from "react";
import Form from "../components/EmployeeFormComponents/Form";
import Header from "../components/header/Header";
import FormPageWrapper from "../layouts/FormPageWrapper";
// import logo from "../assets/formimages/logoCircle.png";

const EmployeeForm = () => {
  return (
    <FormPageWrapper>
      {/* <Header /> */}
      <Form />
      {/* <img src={logo} alt="logo" /> */}
    </FormPageWrapper>
  );
};

export default EmployeeForm;
