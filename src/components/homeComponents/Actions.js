import { Link } from "react-router-dom";
import classes from "./Actions.module.css";

const Actions = () => {
  return (
    <div className={classes.actionsBox}>
      <Link className={classes.action} to="/fillout/personal">
        ჩანაწერის დამატება
      </Link>
      <Link className={classes.action} to="/">
        ჩანაწერების სია
      </Link>
    </div>
  );
};

export default Actions;
