import BackIcon from "../assets/formIcons/BackIcon";
import classes from "./BackButton.module.css";

const BackButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.backButton}>
      <BackIcon />
    </button>
  );
};

export default BackButton;
