import { Link } from "react-router-dom";
import classes from "./RecordItem.module.css";

const RecordItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.imgWrapper}>
        <img src={props.src} alt="laptopimage" />
      </div>
      <div className={classes.info}>
        <p className={classes.personName}>{props.name}</p>
        <p className={classes.laptopName}>{props.laptopName}</p>
        <Link className={classes.moreBtn} to={`/records/${props.id}`}>
          მეტის ნახვა
        </Link>
      </div>
    </div>
  );
};

export default RecordItem;
