import classes from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className={classes.header}>
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
            თანამშრომლის ინფო
          </li>

          <li
            className={`${
              location.pathname === "/fillout/laptop" ? classes.active : ""
            }`}
          >
            ლეპტოპის მახასიათებლები
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
