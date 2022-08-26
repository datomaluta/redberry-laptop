import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">თანამშრომლის ინფო</NavLink>
          </li>
          <li>
            <NavLink to="/">ლეპტოპის მახასიათებლები</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
