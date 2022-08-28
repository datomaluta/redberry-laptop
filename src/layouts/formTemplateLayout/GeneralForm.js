import classes from "./GeneralForm.module.css";
import { Fragment } from "react";

const GeneralForm = (props) => {
  return (
    <Fragment>
      <form onSubmit={props.onSubmit} className={classes.form}>
        {props.children}
      </form>
    </Fragment>
  );
};

export default GeneralForm;
