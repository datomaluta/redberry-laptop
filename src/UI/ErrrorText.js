import { Link } from "react-router-dom";
import classes from "./ErrorText.module.css";

const ErrorText = (props) => {
  return (
    <div className={classes.wrapper}>
      <h1>{props.errorText}</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorText;
