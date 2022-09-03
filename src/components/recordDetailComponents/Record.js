import { Fragment, useEffect } from "react";

import classes from "./Record.module.css";
import useHttp from "../../hooks/use-http";

const Record = (props) => {
  // const [position, setPosition] = useState();
  const { error: teamError, fetchField: fetchTeams, data: teams } = useHttp();
  console.log(teamError);

  const {
    error: positionError,
    fetchField: fetchPositions,
    data: positions,
  } = useHttp();
  console.log(positionError);

  const {
    error: brandError,
    fetchField: fetchBrands,
    data: brands,
  } = useHttp();
  console.log(brandError);

  const { error: cpuError, fetchField: fetchCpus, data: cpus } = useHttp();
  console.log(cpus);
  console.log(cpuError);
  useEffect(() => {
    fetchTeams("teams");
    fetchPositions("positions");
    fetchBrands("brands");
    fetchCpus("cpus");
  }, [fetchTeams, fetchPositions, fetchBrands, fetchCpus]);
  // useEffect(() => {
  //   if (positions) {
  //     setPosition(
  //       positions.find((position) => position.id === user["position_id"]).name
  //     );
  //   }
  // }, [positions]);

  const {
    detailInfo: { user },
    detailInfo: { laptop },
  } = props;
  console.log(user);
  console.log(laptop);

  // if (!teams || !positions || !cpus || !brands) {
  //   return;
  // } else {
  // }
  const team = teams
    ? teams.find((team) => team.id === user["team_id"])?.name
    : "";
  console.log(team);
  const position = positions
    ? positions.find((position) => position.id === user["position_id"])?.name
    : "";
  const brand = brands
    ? brands.find((brand) => brand.id === laptop["brand_id"])?.name
    : "";
  // const cpu = cpus.find((cpu) => cpu.id == 1).name;
  // console.log(cpu);

  return (
    <Fragment>
      <h1 className={classes.heading}>ლეპტოპების ინფო</h1>
      <div className={classes.wrapper}>
        <div className={classes.personalInfo}>
          <div className={classes.imgWrapper}>
            <img
              src={`https://pcfy.redberryinternship.ge/${laptop.image}`}
              alt="imags"
            />
          </div>
          <div className={classes.infoBox}>
            <div className={classes.titles}>
              <p>სახელი:</p>
              <p>თიმი:</p>
              <p>პოზიცია:</p>
              <p>მეილი:</p>
              <p>ტელ.ნომერი:</p>
            </div>
            <div className={classes.values}>
              <p>{user.name + " " + user.surname}</p>
              <p>{team}</p>
              <p>{position}</p>
              <p>{user.email}</p>
              <p>{user["phone_number"]}</p>
            </div>
          </div>
        </div>
        <div className={classes.laptopInfo}>
          <div className={classes.leftSide}>
            <div className={classes.titles}>
              <p>ლეპტოპის სახელი</p>
              <p>ლეპტოპის ბრენდი</p>
              <p>RAM:</p>
              <p>მეხსიერების ტიპი</p>
            </div>
            <div className={`${classes.values} ${classes.certainLap}`}>
              <p>{laptop.name}</p>
              <p>{brand}</p>
              <p>{laptop.ram}</p>
              <p>{laptop["hard_drive_type"]}</p>
            </div>
          </div>

          <div className={classes.rightSide}>
            <div className={classes.titles}>
              <p>CPU:</p>
              <p>CPU-ს ბირთვი:</p>
              <p>CPU-ს ნაკადი:</p>
            </div>
            <div className={`${classes.values} ${classes.certainCpu}`}>
              <p>{laptop.cpu.name}</p>
              <p>{laptop.cpu.cores}</p>
              <p>{laptop.cpu.threads}</p>
            </div>
          </div>
        </div>
        <div className={classes.restOfLaptop}>
          <div className={classes.leftSide}>
            <div className={classes.titles}>
              <p className={classes.bigState}>ლეპტოპის მდგომარეობა:</p>
              <p className={classes.responsiveState}>მდგომარეობა:</p>
              <p>ლეპტოპის ფასი:</p>
            </div>
            <div className={`${classes.values} ${classes.certainRest}`}>
              <p>{laptop.state === "new" ? "ახალი" : "მეორადი"}</p>
              <p>{laptop.price}</p>
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes.titles}>
              <p>შევსების რიცხვი:</p>
            </div>
            <div className={`${classes.values} ${classes.certainDate}`}>
              <p>{laptop["purchase_date"]}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Record;
