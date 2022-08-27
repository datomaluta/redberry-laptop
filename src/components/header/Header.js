import classes from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className={classes.header}>
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
