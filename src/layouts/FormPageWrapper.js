import classes from "./FormPageWrapper.module.css";

const FormPageWrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default FormPageWrapper;
