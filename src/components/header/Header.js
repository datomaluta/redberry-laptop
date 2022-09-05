import classes from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userFormIsValid = useSelector((state) => state.user.userFormIsValid);
  const laptopFormIsValid = useSelector(
    (state) => state.laptop.laptopFormIsValid
  );
  console.log(userFormIsValid);
  const toLapFormHandler = () => {
    if (userFormIsValid) {
      navigate("/fillout/laptop");
    }
  };

  const toEmpFormHandler = () => {
    if (laptopFormIsValid) {
      navigate("/fillout/personal");
    }
  };

  return (
    <header className={classes.header}>
      {/* content for mobile version */}
      {location.pathname === "/fillout/personal" && (
        <div className={classes.headerInfo}>
          <p>თანამშრომლის ინფო</p>
          <span>1/2</span>
        </div>
      )}
      {location.pathname === "/fillout/laptop" && (
        <div className={classes.headerInfo}>
          <p> ლეპტოპის მახასიათებლები</p>
          <span>2/2</span>
        </div>
      )}
      <nav>
        <ul>
          <li
            className={`${
              location.pathname === "/fillout/personal" ? classes.active : ""
            }`}
          >
            <button className={classes.navButton} onClick={toEmpFormHandler}>
              თანამშრომლის ინფო
            </button>
          </li>

          <li
            className={`${
              location.pathname === "/fillout/laptop" ? classes.active : ""
            }`}
          >
            <button className={classes.navButton} onClick={toLapFormHandler}>
              ლეპტოპის მახასიათებლები
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
