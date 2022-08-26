import classes from "./CenteredWrapper.module.css";

const CenteredWrapper = (props) => {
  return <div className={classes.centered}>{props.children}</div>;
};

export default CenteredWrapper;
