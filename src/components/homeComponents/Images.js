import logo from "../../assets/homePageImages/redberrylogo.png";
import bigImage from "../../assets/homePageImages/bigImage.png";
import classes from "./Images.module.css";

const Images = () => {
  return (
    <div className={classes.imagesBox}>
      <div className={classes.logoImageBox}>
        <img src={logo} alt="logoImage" />
      </div>
      <div className={classes.bigImageBox}>
        <img src={bigImage} alt="layoutImage" />
      </div>
    </div>
  );
};

export default Images;
