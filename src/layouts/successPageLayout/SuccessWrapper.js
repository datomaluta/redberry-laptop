import classes from "./SuccessWrapper.module.css";

const SuccessWrapper = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};

export default SuccessWrapper;
