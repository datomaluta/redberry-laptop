import { useState, useRef } from "react";
import classes from "./Dropdown.module.css";
import DropIcon from "../../assets/formIcons/DropIcon";

const Dropdown = (props) => {
  console.log(props.disabled);
  console.log(props.values);
  console.log(props.defaultValue);

  const [isActive, setIsActive] = useState(false);
  console.log(props.hasError);
  const makeDropDownActive = () => {
    setIsActive((prevState) => !prevState);
    props.onTouch();
  };
  const selectValue = (event) => {
    props.setSelect(event.target.textContent);
    const value = event.target.getAttribute("value");
    console.log(value);
    setIsActive(false);
  };
  const dropDownClasses = props.hasError
    ? `${classes.dropdownBtn} ${classes.invalid}`
    : classes.dropdownBtn;
  return (
    <div
      className={
        props.disabled
          ? `${classes.dropdown} ${classes.disabled}`
          : classes.dropdown
      }
      //   className={classes.dropdown}
    >
      <div className={dropDownClasses} onClick={makeDropDownActive}>
        {props.currentValue || props.defaultValue}
        <span>
          <DropIcon />
        </span>
      </div>
      {isActive && (
        <div className={classes.dropdownContent}>
          {props.values.map((value) => (
            <div
              key={value.id}
              id={value.id}
              value={value.name}
              className={classes.dropdownItem}
              onClick={selectValue}
            >
              {value.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
