import classes from "./Popup.module.css";
import congratImage from "../../assets/popupimage/congrat.png";
import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <div className={classes.popup}>
      <div className={classes.imgWrapper}>
        <img src={congratImage} alt="congratImage" />
      </div>
      <h2>ჩანაწერი დამატებულია!</h2>
      <div className={classes.actions}>
        <Link className={classes.action} to="/records">
          სიაში გადაყვანა
        </Link>
        <Link className={classes.generalAction} to="/">
          მთავარი
        </Link>
      </div>
    </div>
  );
};
export default Popup;
