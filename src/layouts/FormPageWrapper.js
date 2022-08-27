import Header from "../components/header/Header";
import classes from "./FormPageWrapper.module.css";
import logo from "../assets/formimages/logoCircle.png";

const FormPageWrapper = (props) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      {props.children}
      <img src={logo} alt="logo" />
    </div>
  );
};

export default FormPageWrapper;
