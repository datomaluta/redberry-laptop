import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./EmpForm.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useHttp from "../../hooks/use-http";

const Form = () => {
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState();
  const [error, setError] = useState(null);
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameRef = useRef();
  const surnameRef = useRef();
  const navigate = useNavigate();

  // const { error, fetchField: fetchTeams, data: teams } = useHttp();

  const fetchTeams = async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/teams"
      );

      if (!response.ok) {
        console.log("error occured");
        throw new Error("Request failed!");
      }
      const data = await response.json();
      setTeams(data.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  const fetchPositions = async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions"
      );

      if (!response.ok) {
        console.log("error occured");
        throw new Error("Request failed!");
      }
      const data = await response.json();
      setPositions(data.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  useEffect(() => {
    // const test = (data) => {
    //   setTeams(data);
    // };
    fetchTeams();
    fetchPositions();
  }, []);
  console.log(teams);

  const nextPageHandler = (event) => {
    event.preventDefault();

    if (nameIsValid) {
      console.log(nameRef.current.value);
      // navigate("/fillout/laptop");
    }
  };

  const teamChangeHandler = (event) => {
    const selectedObj = teams.find((team) => team.name === event.target.value);
    setSelectedTeamId(selectedObj.id);
  };

  return (
    <GeneralForm>
      {error && <h2>{error}</h2>}
      <div className={classes.names}>
        <div className={classes.firstName}>
          <label>სახელი</label>
          <input ref={nameRef} />
        </div>
        <div className={classes.lastName}>
          <label>გვარი</label>
          <input />
        </div>
      </div>
      <div className={classes.teamSelector}>
        <select onChange={teamChangeHandler} name="teams" id="teams">
          <option hidden value="">
            თიმი
          </option>
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
      <div className={classes.positionSelector}>
        <select name="positions" id="positions">
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
      <div className={classes.mail}>
        <label>მეილი</label>
        <input />
      </div>
      <div className={classes.phone}>
        <label>ტელეფონის ნომერი</label>
        <input />
      </div>
      <div className={classes.btnWrapper}>
        <button onClick={nextPageHandler}>შემდეგი</button>
      </div>
    </GeneralForm>
  );
};

export default Form;
