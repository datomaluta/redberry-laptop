import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./EmpForm.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import {
  emailValidator,
  generalValidator,
  phoneNumberValidator,
} from "../../helpers/Validators";
import { onlyGeorgia } from "../../helpers/Validators";

const Form = () => {
  const [selectedTeamId, setSelectedTeamId] = useState();

  const navigate = useNavigate();

  const { error: teamError, fetchField: fetchTeams, data: teams } = useHttp();
  const {
    error: positionError,
    fetchField: fetchPositions,
    data: positions,
  } = useHttp();

  useEffect(() => {
    fetchTeams("teams");
    fetchPositions("positions");
  }, [fetchTeams, fetchPositions]);

  // useInput hook use for each field
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    isTouchedHandler: setNameIsTouched,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    setValue: setNameValue,
    reset: resetNameInput,
  } = useInput(generalValidator);

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    isTouchedHandler: setSurnameIsTouched,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    setValue: setSurnameValue,
    reset: resetSurnameInput,
  } = useInput(generalValidator);

  const {
    value: team,
    isValid: teamIsValid,
    isTouchedHandler: setTeamIsTouched,
    hasError: teamHasError,
    valueChangeHandler: teamChangeHandler,
    inputBlurHandler: teamBlurHandler,
    setValue: setTeamValue,
    reset: resetTeamSelector,
  } = useInput((value) => value !== "");

  const {
    value: position,
    isValid: positionIsValid,
    isTouchedHandler: setPositionIsTouched,
    hasError: positionHasError,
    valueChangeHandler: positionChangeHandler,
    inputBlurHandler: positionBlurHandler,
    setValue: setPositionValue,
    reset: resetPositionSelector,
  } = useInput((value) => value !== "");

  console.log(position);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isTouchedHandler: setEmailIsTouched,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    setValue: setEmailValue,
    reset: resetEmail,
  } = useInput(emailValidator);

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    isTouchedHandler: setPhoneNumberIsTouched,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    setValue: setPhoneNumberValue,
    reset: resetPhoneNumber,
  } = useInput(phoneNumberValidator);

  // useEffect for team and position selectors connection
  // find in teams team, which name is equal selected team name
  useEffect(() => {
    if (teams.length > 0 && team.length > 0) {
      const selectedObj = teams.find((currTeam) => currTeam.name === team);
      setSelectedTeamId(selectedObj.id);
    }
    // resetPositionSelector();
  }, [team, teams]);

  useEffect(() => {
    const name = localStorage.getItem("enteredName");
    const surname = localStorage.getItem("enteredSurname");
    const team = localStorage.getItem("team");
    const position = localStorage.getItem("position");
    const email = localStorage.getItem("email");
    const phoneNumber = localStorage.getItem("phoneNumber");
    console.log(name);
    setNameValue(name);
    setSurnameValue(surname);
    setTeamValue(team);
    setPositionValue(position);
    setEmailValue(email);
    setPhoneNumberValue(phoneNumber);
    console.log(position);
  }, []);

  useEffect(() => {
    if (enteredName.trim() !== "") {
      localStorage.setItem("enteredName", enteredName);
    }
    if (enteredSurname.trim() !== "") {
      localStorage.setItem("enteredSurname", enteredSurname);
    }
    if (team.trim() !== "") {
      localStorage.setItem("team", team);
    }
    if (position.trim() !== "") {
      localStorage.setItem("position", position);
    }
    if (enteredEmail.trim() !== "") {
      localStorage.setItem("email", enteredEmail);
    }
    if (enteredPhoneNumber.trim() !== "") {
      localStorage.setItem("phoneNumber", enteredPhoneNumber);
    }
  }, [
    enteredName,
    enteredSurname,
    team,
    position,
    enteredEmail,
    enteredPhoneNumber,
  ]);

  // useEffect(() => {

  // }, [team]);

  const nextPageHandler = (event) => {
    event.preventDefault();

    // set fields touched for better validation UX
    setNameIsTouched();
    setSurnameIsTouched();
    setTeamIsTouched();
    setPositionIsTouched();
    setEmailIsTouched();
    setPhoneNumberIsTouched();

    if (
      !enteredNameIsValid ||
      !enteredSurnameIsValid ||
      !teamIsValid ||
      !positionIsValid ||
      !enteredEmailIsValid ||
      !enteredPhoneNumberIsValid
    ) {
      return;
    }

    console.log("Next page");

    // Reset fields to initial contition
    resetNameInput();
    resetSurnameInput();
    resetTeamSelector();
    resetPositionSelector();
    resetEmail();
    resetPhoneNumber();
  };

  // classes for when validation failed
  const nameClasses = nameInputHasError
    ? `${classes.invalid} ${classes.firstName} `
    : classes.firstName;

  const surnameClasses = surnameInputHasError
    ? `${classes.invalid} ${classes.lastName}`
    : classes.lastName;

  const teamClasses = teamHasError
    ? `${classes.error} ${classes.teamSelector}`
    : classes.teamSelector;

  const positionClasses = positionHasError
    ? `${classes.error} ${classes.positionSelector}`
    : classes.positionSelector;

  const emailClasses = emailInputHasError ? `${classes.invalid} ` : "";

  const phoneNumberClasses = phoneNumberInputHasError
    ? `${classes.invalid}`
    : "";

  console.log(enteredName);

  return (
    <GeneralForm>
      {(teamError || positionError) && <h2>{teamError || positionError}</h2>}
      <div className={classes.names}>
        <div className={nameClasses}>
          <label>სახელი</label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            placeholder="გრიშა"
          />
          {nameInputHasError ? (
            <p>გამოიყენე მხოლოდ ქართული ასოები</p>
          ) : (
            <p className={classes.bottomLabel}>
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </p>
          )}
        </div>
        <div className={surnameClasses}>
          <label>გვარი</label>
          <input
            value={enteredSurname}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            placeholder="ბაგრატიონი"
          />
          {surnameInputHasError ? (
            <p>გამოიყენე მხოლოდ ქართული ასოები</p>
          ) : (
            <p className={classes.bottomLabel}>
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </p>
          )}
        </div>
      </div>
      <div className={teamClasses}>
        <select
          value={team}
          required
          onChange={teamChangeHandler}
          onBlur={teamBlurHandler}
          name="teams"
          id="teams"
        >
          <option hidden>თიმი</option>
          {teams.length > 0 ? (
            teams.map((team) => (
              <option id={team.id} key={team.id} value={team.name}>
                {team.name}
              </option>
            ))
          ) : (
            <option>No more data...</option>
          )}
        </select>
      </div>
      <div className={positionClasses}>
        <select
          disabled={!teamIsValid}
          value={position}
          onChange={positionChangeHandler}
          onBlur={positionBlurHandler}
          name="positions"
          id="positions"
        >
          <option hidden value="">
            პოზიცია
          </option>
          {positions.length > 0 ? (
            positions.map(
              (team) =>
                team["team_id"] === selectedTeamId && (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                )
            )
          ) : (
            <option>No more data...</option>
          )}
        </select>
      </div>
      <div className={emailClasses}>
        <label>მეილი</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          placeholder="grish666@redberry.ge"
        />
        {emailInputHasError ? (
          <p>შეიყვანე ვალიდური მეილი</p>
        ) : (
          <p className={classes.bottomLabel}>
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>
        )}
      </div>
      <div className={phoneNumberClasses}>
        <label>ტელეფონის ნომერი</label>
        <input
          value={enteredPhoneNumber}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
          placeholder="+995 598 00 07 01"
        />
        {phoneNumberInputHasError ? (
          <p>შეიყვანე ვალიდური ნომერი</p>
        ) : (
          <p className={classes.bottomLabel}>
            უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
          </p>
        )}
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={nextPageHandler}>შემდეგი</button>
      </div>
    </GeneralForm>
  );
};

export default Form;
