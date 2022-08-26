import classes from "./CenteredBothWrapper.module.css";

const CenteredBothWrapper = (props) => {
  return <div className={classes.centered}>{props.children}</div>;
};

export default CenteredBothWrapper;
