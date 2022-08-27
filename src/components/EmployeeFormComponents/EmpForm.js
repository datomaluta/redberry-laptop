import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./EmpForm.module.css";

const Form = () => {
  return (
    <GeneralForm>
      <div className={classes.names}>
        <div className={classes.firstName}>
          <label>სახელი</label>
          <input />
        </div>
        <div className={classes.lastName}>
          <label>გვარი</label>
          <input />
        </div>
      </div>
      <div className={classes.teamSelector}>
        <select name="cars" id="cars">
          <option value="volvo">თიმი</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={classes.positionSelector}>
        <select name="cars" id="cars">
          <option value="volvo">პოზიცია</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={classes.mail}>
        <label>მეილი</label>
        <input />
      </div>
      <div className={classes.phone}>
        <label>ტელეფონის ნომერი</label>
        <input />
      </div>
      <div className={classes.btnWrapper}>
        <button>შემდეგი</button>
      </div>
    </GeneralForm>
  );
};

export default Form;
