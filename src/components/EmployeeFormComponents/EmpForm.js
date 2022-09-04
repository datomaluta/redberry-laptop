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

import { getDataFromLocalStorage } from "../../helpers/LocalStorageFunctions";

const Form = () => {
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const [selectedPositionId, setSelectedPositionId] = useState("");

  const navigate = useNavigate();

  const userDataFromLocal = getDataFromLocalStorage("userData");
  console.log(userDataFromLocal);

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

    reset: resetNameInput,
  } = useInput(generalValidator, userDataFromLocal?.enteredName);

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    isTouchedHandler: setSurnameIsTouched,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurnameInput,
  } = useInput(generalValidator, userDataFromLocal?.enteredSurname);

  const {
    value: team,
    isValid: teamIsValid,
    isTouchedHandler: setTeamIsTouched,
    hasError: teamHasError,
    valueChangeHandler: teamChangeHandler,
    inputBlurHandler: teamBlurHandler,
    reset: resetTeamSelector,
  } = useInput((value) => value !== "", userDataFromLocal?.team);

  const {
    value: position,
    isValid: positionIsValid,
    isTouchedHandler: setPositionIsTouched,
    hasError: positionHasError,
    valueChangeHandler: positionChangeHandler,
    inputBlurHandler: positionBlurHandler,
    reset: resetPositionSelector,
  } = useInput((value) => value !== "", userDataFromLocal?.position);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isTouchedHandler: setEmailIsTouched,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator, userDataFromLocal?.enteredEmail);

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    isTouchedHandler: setPhoneNumberIsTouched,
    hasError: phoneNumberInputHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(phoneNumberValidator, userDataFromLocal?.enteredPhoneNumber);

  useEffect(() => {
    if (teams.length > 0 && team.length > 0) {
      const selectedObj = teams.find((currTeam) => currTeam.name === team);
      localStorage.setItem("teamId", selectedObj.id);
      setSelectedTeamId(selectedObj.id);
    }
    // resetPositionSelector();
  }, [team, teams]);

  useEffect(() => {
    if (positions.length > 0 && position.length > 0) {
      const selectedObj = positions.find(
        (currPosition) => currPosition.name === position
      );
      localStorage.setItem("positionId", selectedObj.id);
      setSelectedPositionId(selectedObj.id);
    }
    // resetPositionSelector();
  }, [position, positions]);

  useEffect(() => {
    const userData = {
      enteredName: enteredName,
      enteredSurname: enteredSurname,
      team: team,
      teamId: selectedTeamId,
      position: position,
      positionId: selectedPositionId,
      enteredEmail: enteredEmail,
      enteredPhoneNumber: enteredPhoneNumber,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  }, [
    enteredName,
    enteredSurname,
    team,
    position,
    enteredEmail,
    enteredPhoneNumber,
    selectedTeamId,
    selectedPositionId,
  ]);

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

    navigate("/fillout/laptop");

    // Reset fields to initial contition
    resetNameInput();
    resetSurnameInput();
    resetTeamSelector();
    resetPositionSelector();
    resetEmail();
    resetPhoneNumber();
  };

  // classes for fields
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
            name="firstname"
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
            name="surname"
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
        <p className={classes.bottomLabel}>უნდა მთავრდებოდეს @redberry.ge-ით</p>
      </div>
      <div className={phoneNumberClasses}>
        <label>ტელეფონის ნომერი</label>
        <input
          value={enteredPhoneNumber}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
          placeholder="+995 598 00 07 01"
        />
        <p className={classes.bottomLabel}>
          უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
        </p>
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={nextPageHandler}>შემდეგი</button>
      </div>
    </GeneralForm>
  );
};

export default Form;
