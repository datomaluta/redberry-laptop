import { useNavigate } from "react-router-dom";
import BackIcon from "../assets/formIcons/BackIcon";
import classes from "./BackButton.module.css";

const BackButton = (props) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <button onClick={goBackHandler} className={classes.backButton}>
      <BackIcon />
    </button>
  );
};

export default BackButton;
