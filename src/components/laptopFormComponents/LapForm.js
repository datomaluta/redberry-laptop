import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./LapForm.module.css";

const LaptopForm = () => {
  return (
    <GeneralForm>
      <div className={classes.imageUploader}>
        <label htmlFor="img">
          ჩააგდე ან ატვრთე <br /> ლეპტოპის ფოტო
        </label>
        <input id="img" className={classes["custom-file-input"]} type="file" />
      </div>
      <div className={classes.names}>
        <div className={classes.name}>
          <label>ლეპტოპის სახელი</label>
          <input />
          <p className={classes.bottomLabel}>
            ლათინური ასოები, ციფრები, !@#$%^&*()_+={" "}
          </p>
        </div>
        <div className={classes.brand}>
          <select name="cars" id="cars">
            <option hidden value="volvo">
              თიმი
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className={classes.cpuInfo}>
        <div className={classes.cpuSelector}>
          <select name="cars" id="cars">
            <option value="" hidden>
              CPU
            </option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className={classes.cpuCores}>
          <label>CPU-ს ბირთვი</label>
          <input />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
        <div className={classes.cpuThreads}>
          <label>CPU-ს ნაკადი</label>
          <input />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
      </div>
      <div className={classes.ramInfo}>
        <div className={classes.ramCount}>
          <label>ლეპტოპის RAM (GB)</label>
          <input />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
        <div className={classes.ramRadio}>
          <label>მეხსიერების ტიპი</label>
          <div className={classes.radioBox}>
            <div className={classes.radioWrapper}>
              <input type="radio" id="ssd" name="ramType" value="ssd" />
              <label>SSD</label>
            </div>
            <div className={classes.radioWrapper}>
              <input type="radio" id="hdd" name="ramType" value="hdd" />
              <label>HDD</label>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dateAndPrice}>
        <div className={classes.date}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input type="date" />
        </div>
        <div className={classes.price}>
          <label>ლეპტოპის ფასი</label>
          <input />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
      </div>
      <div className={classes.laptopCondition}>
        <label>ლეპტოპის მდგომარეობა</label>
        <div className={classes.radioBox}>
          <div className={classes.radioWrapper}>
            <input type="radio" id="ssd" name="ramType" value="ssd" />
            <label>ახალი</label>
          </div>
          <div className={classes.radioWrapper}>
            <input type="radio" id="hdd" name="ramType" value="hdd" />
            <label>მეორადი</label>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.back}>უკან</button>
        <button className={classes.save}>დამახსოვრება</button>
      </div>
    </GeneralForm>
  );
};

export default LaptopForm;
