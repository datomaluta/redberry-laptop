import logo from "../../assets/homePageImages/redberrylogo.png";
import bigImage from "../../assets/homePageImages/bigImage.png";
import classes from "./Images.module.css";
import responsiveImage from "../../assets/homePageImages/homephoto.png";

const Images = () => {
  return (
    <div className={classes.imagesBox}>
      <div className={classes.logoImageBox}>
        <img src={logo} alt="logoImg" />
      </div>
      <div className={classes.bigImageBox}>
        <img className={classes.bigImage} src={bigImage} alt="layoutImg" />
        <img
          className={classes.responsiveImage}
          src={responsiveImage}
          alt="responsiveimg"
        />
      </div>
    </div>
  );
};

export default Images;
