import { useParams } from "react-router-dom";
import classes from "./Record.module.css";

const DummyData = {
  src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  personName: "აკაკი",
  team: "დიზაინერები",
  surname: "წერეთელი",
  positon: "ილუსტრატორი",
  mail: "ako@redberry.ge",
  phoneNumber: "+995591921669",
  laptopName: "Razor bla bla",
  laptopBrand: "HP",
  ram: 16,
  memoryType: "SSD",
  cpu: "Intel 5",
  cpuCores: 13,
  cpuThreads: 67,
  laptopState: "მეორადი",
  date: "12/06/2021",
  price: 1500,
};

const Record = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div className={classes.wrapper}>
      <div className={classes.personalInfo}>
        <div className={classes.imgWrapper}>
          <img src={DummyData.src} alt="imags" />
        </div>
        <div className={classes.infoBox}>
          {/* <div className={classes.row}>
            <p>სახელი:</p>
            <span>{DummyData.personName + " " + DummyData.surname}</span>
          </div>
          <div className={classes.row}>
            <p>თიმი:</p>
            <span>{DummyData.team}</span>
          </div>
          <div className={classes.row}>
            <p>პოზიცია:</p>
            <span>{DummyData.positon}</span>
          </div>
          <div className={classes.row}>
            <p>მეილი:</p>
            <span>{DummyData.mail}</span>
          </div>
          <div className={classes.row}>
            <p>ტელ.ნომერი:</p>
            <span>{DummyData.phoneNumber}</span>
          </div> */}
          <div className={classes.titles}>
            <p>სახელი:</p>
            <p>თიმი:</p>
            <p>პოზიცია:</p>
            <p>მეილი:</p>
            <p>ტელ.ნომერი:</p>
          </div>
          <div className={classes.values}>
            <p>აკაკი წერეთელი</p>
            <p>დიზაინერები</p>
            <p>ილუსტრატორი</p>
            <p>ako@redberry.ge</p>
            <p>+992591921669</p>
          </div>
        </div>
      </div>
      <div className={classes.laptopInfo}>
        <div className={classes.leftSide}>
          <div className={classes.row}>
            <p>ლეპტოპის სახელი:</p>
            <span>{DummyData.laptopName}</span>
          </div>
          <div className={classes.row}>
            <p>ლეპტოპის ბრენდი:</p>
            <span>{DummyData.laptopBrand}</span>
          </div>
          <div className={classes.row}>
            <p>RAM:</p>
            <span>{DummyData.ram}</span>
          </div>
          <div className={classes.row}>
            <p>მეხსიერების ტიპი:</p>
            <span>{DummyData.memoryType}</span>
          </div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.row}>
            <p>CPU:</p>
            <span>{DummyData.cpu}</span>
          </div>
          <div className={classes.row}>
            <p>CPU-ს ბირთვი:</p>
            <span>{DummyData.cpuCores}</span>
          </div>
          <div className={classes.row}>
            <p>ლეპტოპის ნაკადი:</p>
            <span>{DummyData.cpuThreads}</span>
          </div>
        </div>
      </div>
      <div className={classes.restOfLaptop}>
        <div className={classes.rightSide}>
          <div className={classes.row}>
            <p>ლეპტოპის მდგომარეობა:</p>
            <span>{DummyData.laptopState}</span>
          </div>
        </div>
        <div className={classes.row}>
          <p>ლეპტოპის ფასი:</p>
          <span>{DummyData.price}</span>
        </div>
      </div>
      <div className={classes.leftSide}>
        <div className={classes.row}>
          <p>შევსების რიცხვი:</p>
          <span>{DummyData.date}</span>
        </div>
      </div>
    </div>
  );
};
export default Record;
