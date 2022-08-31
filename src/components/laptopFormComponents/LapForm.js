import { useEffect, useRef, useState } from "react";
import { Link, resolvePath } from "react-router-dom";
import useInput from "../../hooks/use-input";
import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./LapForm.module.css";
import useHttp from "../../hooks/use-http";
import {
  laptopNameValidator,
  onlyNumberValidator,
} from "../../helpers/Validators";
import WarningIcon from "../../assets/formIcons/WarningIcon";
import { convertBase64 } from "../../helpers/Converter";
import { imageValidator } from "../../helpers/Validators";
import axios from "axios";

const LaptopForm = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const [baseImage, setBaseImage] = useState("");
  // const [memoryType, setMemoryType] = useState("");
  // const imgRef = useRef();
  // const [img, setImg] = useState("");
  // useEffect(() => {}, []);

  // const imgChangeHandler = (event) => {
  //   console.log(event.target.files[0]);
  //   setImg(event.target.files[0].name);
  // };

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       PromiseRejectionEvent(error);
  //     };
  //   });
  // };

  const {
    error: brandError,
    fetchField: fetchBrands,
    data: brands,
  } = useHttp();

  const { error: cpuError, fetchField: fetchCpus, data: cpus } = useHttp();

  useEffect(() => {
    fetchBrands("brands");
    fetchCpus("cpus");
  }, [fetchBrands, fetchCpus]);

  const {
    value: laptopImage,
    isValid: laptopImageIsValid,
    isTouchedHandler: setLaptopImageIsTouched,
    hasError: laptopImageHasError,
    valueChangeHandler: imgChangeHandler,
    inputBlurHandler: imgBlurHandler,
    reset: resetImageInput,
  } = useInput(imageValidator, true);
  console.log(laptopImage);

  useEffect(() => {
    const baseImageSetter = async () => {
      const base = await convertBase64(laptopImage);
      setBaseImage(base);
    };
    if (laptopImage) {
      baseImageSetter();
    }
  }, [laptopImage]);

  const {
    value: laptopName,
    isValid: laptopNameIsValid,
    isTouchedHandler: setLaptopIsTouched,
    hasError: laptopHasError,
    valueChangeHandler: laptopNameChangeHandler,
    inputBlurHandler: laptopNameBlurHandler,
    reset: resetLaptopInput,
  } = useInput(laptopNameValidator);

  const {
    value: brand,
    isValid: brandIsValid,
    isTouchedHandler: setBrandIsTouched,
    hasError: brandHasError,
    valueChangeHandler: brandChangeHandler,
    inputBlurHandler: brandBlurHandler,
    reset: resetBrandSelector,
  } = useInput((value) => value !== "");

  const {
    value: cpu,
    isValid: cpuIsValid,
    isTouchedHandler: setCpuIsTouched,
    hasError: cpuHasError,
    valueChangeHandler: cpuChangeHandler,
    inputBlurHandler: cpuBlurHandler,
    reset: resetCpuSelector,
  } = useInput((value) => value !== "");

  const {
    value: cpuCore,
    isValid: cpuCoreIsValid,
    isTouchedHandler: setCpuCoreIsTouched,
    hasError: cpuCoreHasError,
    valueChangeHandler: cpuCoreChangeHandler,
    inputBlurHandler: cpuCoreBlurHandler,
    reset: resetCpuCoreInput,
  } = useInput(onlyNumberValidator);

  const {
    value: cpuThread,
    isValid: cpuThreadIsValid,
    isTouchedHandler: setCpuThreadIsTouched,
    hasError: cpuThreadHasError,
    valueChangeHandler: cpuThreadChangeHandler,
    inputBlurHandler: cpuThreadBlurHandler,
    reset: resetCpuThreadInput,
  } = useInput(onlyNumberValidator);

  const {
    value: ram,
    isValid: ramIsValid,
    isTouchedHandler: setRamIsTouched,
    hasError: ramHasError,
    valueChangeHandler: ramChangeHandler,
    inputBlurHandler: ramBlurHandler,
    reset: resetRamInput,
  } = useInput(onlyNumberValidator);

  const {
    value: memoryType,
    isValid: memoryTypeIsValid,
    isTouchedHandler: setMemoryTypeIsTouched,
    hasError: memoryTypeHaserror,
    valueChangeHandler: memoryTypeChangeHandler,
    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetMemoryType,
  } = useInput((value) => value.trim() !== "");

  const {
    value: purchaseDate,
    // isValid: purchaseDateIsValid,
    isTouchedHandler: setPurchaseDateIsTouched,
    // hasError: purchaseDateHasError,
    valueChangeHandler: purchaseDateChangeHandler,
    inputBlurHandler: purchaseDateBlurHandler,
    reset: resetPurchaseDate,
  } = useInput((value) => value.trim() !== "");

  const {
    value: price,
    isValid: priceIsValid,
    isTouchedHandler: setPriceIsTouched,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPriceInput,
  } = useInput(onlyNumberValidator);

  const {
    value: laptopState,
    isValid: laptopStateIsValid,
    isTouchedHandler: setLaptopStateIsTouched,
    hasError: laptopStateHasError,
    valueChangeHandler: laptopStateChangeHandler,
    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetlaptopState,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = async (event) => {
    event.preventDefault();
    setLaptopImageIsTouched();
    setLaptopIsTouched();
    setBrandIsTouched();
    setCpuIsTouched();
    setCpuCoreIsTouched();
    setCpuThreadIsTouched();
    setRamIsTouched();
    setMemoryTypeIsTouched();
    setPurchaseDateIsTouched();
    setPriceIsTouched();
    setLaptopStateIsTouched();

    if (
      !laptopImageIsValid ||
      !laptopNameIsValid ||
      !brandIsValid ||
      !cpuIsValid ||
      !cpuCoreIsValid ||
      !cpuThreadIsValid ||
      !ramIsValid ||
      !memoryTypeIsValid
    ) {
      return;
    }

    // here is request send functionality
    const formValues = {
      token: "1c40792d27465fbe7c55aeb3cead277e",
      laptop_image: laptopImage,
      name: localStorage.getItem("enteredName"),
      surname: localStorage.getItem("enteredSurname"),
      team_id: +localStorage.getItem("teamId"),
      position_id: +localStorage.getItem("positionId"),
      phone_number: localStorage.getItem("phoneNumber"),
      email: localStorage.getItem("email"),
      laptop_name: laptopName,
      laptop_brand_id: 1,
      laptop_cpu: cpu,
      laptop_cpu_cores: +cpuCore,
      laptop_cpu_threads: +cpuThread,
      laptop_ram: +ram,
      laptop_hard_drive_type: memoryType.toUpperCase(),
      laptop_state: laptopState,
      laptop_purchase_date: purchaseDate,
      laptop_price: +price,
    };
    console.log(formValues);

    const data = new FormData();

    const formKeys = Object.keys(formValues);

    for (let formKey of formKeys) {
      console.log(formKey, formValues[formKey]);
      data.append(formKey, formValues[formKey]);
    }

    let res = await axios.post(
      "https://pcfy.redberryinternship.ge/api/laptop/create",
      data,
      {}
    );
    console.log(res);

    resetImageInput();
    resetLaptopInput();
    resetBrandSelector();
    resetCpuSelector();
    resetCpuCoreInput();
    resetCpuThreadInput();
    resetRamInput();
    resetMemoryType();
    resetPurchaseDate();
    resetPriceInput();
    resetlaptopState();
  };

  const laptopImageClasses = laptopImageHasError
    ? `${classes.imageUploader} ${classes.imageError}`
    : classes.imageUploader;

  const laptopNameClasses = laptopHasError
    ? `${classes.name} ${classes.invalid}`
    : `${classes.name}`;

  const brandClasses = brandHasError
    ? `${classes.brand} ${classes.error}`
    : classes.brand;
  const cpuClasses = cpuHasError
    ? `${classes.cpuSelector} ${classes.error}`
    : classes.cpuSelector;

  const cpuCoreClasses = cpuCoreHasError
    ? `${classes.cpuCores} ${classes.invalid}`
    : classes.cpuCores;

  const cpuThreadClasses = cpuThreadHasError
    ? `${classes.cpuThreads} ${classes.invalid}`
    : classes.cpuThreads;

  const ramClasses = ramHasError
    ? `${classes.ramCount} ${classes.invalid}`
    : classes.ramCount;

  const memoryTypeClasses = memoryTypeHaserror
    ? ` ${classes.radioInvalid}`
    : "";

  const priceClasses = priceHasError
    ? `${classes.price} ${classes.invalid}`
    : classes.price;

  const laptopStateClasses = laptopStateHasError
    ? ` ${classes.radioInvalid}`
    : "";

  const radioChangeHandler = (event) => {
    console.log(event.target.value);
    // setMemoryType(event.target.value);
  };

  // const imgChangeHandler = async (event) => {
  //   setSelectedImage(event.target.files[0]);
  //   const base = await convertBase64(event.target.files[0]);
  //   setBaseImage(base);
  //   console.log(base);
  // };
  console.log(selectedImage);

  return (
    <GeneralForm onSubmit={submitHandler}>
      <div className={laptopImageClasses}>
        <div className={classes.labelAndErrorWrapper}>
          {laptopImageHasError && <WarningIcon />}
          <label htmlFor="img">
            ჩააგდე ან ატვრთე <br /> ლეპტოპის ფოტო
          </label>
        </div>
        <div className={classes.inputImageWrapper}>
          <input
            onChange={imgChangeHandler}
            id="img"
            className={classes["custom-file-input"]}
            type="file"
          />
          {baseImage && (
            <img className={classes.uploadedImage} src={baseImage} />
          )}
        </div>
      </div>
      <div className={classes.names}>
        <div className={laptopNameClasses}>
          <label>ლეპტოპის სახელი</label>
          <input
            value={laptopName}
            onChange={laptopNameChangeHandler}
            onBlur={laptopNameBlurHandler}
            placeholder="HP"
          />
          {
            <p className={classes.bottomLabel}>
              ლათინური ასოები, ციფრები, !@#$%^&*()_+={" "}
            </p>
          }
        </div>
        <div className={brandClasses}>
          <select
            value={brand}
            onChange={brandChangeHandler}
            onBlur={brandBlurHandler}
            name="brand"
            id="brand"
          >
            <option hidden value="">
              ლეპტოპის ბრენდი
            </option>
            {brands.length > 0 ? (
              brands.map((brand) => (
                <option id={brand.ids} key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              ))
            ) : (
              <option>No data...</option>
            )}
          </select>
        </div>
      </div>
      <div className={classes.cpuInfo}>
        <div className={cpuClasses}>
          <select
            value={cpu}
            onChange={cpuChangeHandler}
            onBlur={cpuBlurHandler}
            name="cpus"
            id="cpus"
          >
            <option value="" hidden>
              CPU
            </option>
            {cpus.length > 0 ? (
              cpus.map((cpu) => (
                <option id={cpu.ids} key={cpu.id} value={cpu.name}>
                  {cpu.name}
                </option>
              ))
            ) : (
              <option>No data...</option>
            )}
          </select>
        </div>
        <div className={cpuCoreClasses}>
          <label>CPU-ს ბირთვი</label>
          <input
            value={cpuCore}
            onChange={cpuCoreChangeHandler}
            onBlur={cpuCoreBlurHandler}
            placeholder="14"
            type="number"
          />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
        <div className={cpuThreadClasses}>
          <label>CPU-ს ნაკადი</label>
          <input
            value={cpuThread}
            onChange={cpuThreadChangeHandler}
            onBlur={cpuThreadBlurHandler}
            placeholder="365"
            type="number"
          />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
      </div>
      <div className={classes.ramInfo}>
        <div className={ramClasses}>
          <label>ლეპტოპის RAM (GB)</label>
          <input
            value={ram}
            onChange={ramChangeHandler}
            onBlur={ramBlurHandler}
            placeholder="16"
            type="number"
          />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
        <div className={classes.memoryRadio}>
          <label className={memoryTypeClasses}>მეხსიერების ტიპი</label>
          {memoryTypeHaserror && <WarningIcon />}
          <div className={classes.radioBox}>
            <div className={classes.radioWrapper}>
              <input
                onChange={memoryTypeChangeHandler}
                type="radio"
                id="ssd"
                name="ramType"
                value="ssd"
              />
              <label>SSD</label>
            </div>
            <div className={classes.radioWrapper}>
              <input
                onChange={memoryTypeChangeHandler}
                type="radio"
                id="hdd"
                name="ramType"
                value="hdd"
              />
              <label>HDD</label>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dateAndPrice}>
        <div className={classes.date}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input
            value={purchaseDate}
            onChange={purchaseDateChangeHandler}
            onBlur={purchaseDateBlurHandler}
            type="date"
          />
        </div>
        <div className={priceClasses}>
          <label>ლეპტოპის ფასი</label>
          <input
            value={price}
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
            type="number"
          />
          <p className={classes.bottomLabel}>მხოლოდ ციფრები</p>
        </div>
      </div>
      <div className={classes.laptopCondition}>
        <label className={laptopStateClasses}>ლეპტოპის მდგომარეობა</label>
        <div className={classes.radioBox}>
          <div className={classes.radioWrapper}>
            <input
              onChange={laptopStateChangeHandler}
              type="radio"
              id="new"
              name="state"
              value="new"
            />
            <label>ახალი</label>
          </div>
          <div className={classes.radioWrapper}>
            <input
              onChange={laptopStateChangeHandler}
              type="radio"
              id="secondHanded"
              name="state"
              value="used"
            />
            <label>მეორადი</label>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Link to="/fillout/personal" className={classes.back}>
          უკან
        </Link>
        <button className={classes.save}>დამახსოვრება</button>
      </div>
    </GeneralForm>
  );
};

export default LaptopForm;
