import { Link } from "react-router-dom";
import classes from "./Actions.module.css";

const Actions = () => {
  return (
    <div className={classes.actionsBox}>
      <Link className={classes.action} to="/fillout/personal">
        ჩანაწერის დამატება
      </Link>
      <Link className={classes.action} to="/records">
        ჩანაწერების სია
      </Link>
    </div>
  );
};

export default Actions;

//2b1f230c1f33f07e9324c7d3b01272bd
