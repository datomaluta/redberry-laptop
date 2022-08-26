import CenteredBothWrapper from "./CenteredBothWrapper";
import logo from "../assets/formimages/logoCircle.png";

import classes from "./GeneralForm.module.css";
import Header from "../components/header/Header";

const GeneralForm = (props) => {
  return (
    <CenteredBothWrapper>
      <Header />
      <form className={classes.form}>{props.children}</form>
      <img src={logo} alt="logo" />
    </CenteredBothWrapper>
  );
};

export default GeneralForm;
