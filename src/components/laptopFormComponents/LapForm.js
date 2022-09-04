import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./LapForm.module.css";
import useHttp from "../../hooks/use-http";
import {
  dateValidator,
  laptopNameValidator,
  onlyNumberValidator,
} from "../../helpers/Validators";
import WarningIcon from "../../assets/formIcons/WarningIcon";
import { convertBase64 } from "../../helpers/Converter";
import { imageValidator } from "../../helpers/Validators";
import axios from "axios";
import {
  clearLocalStorage,
  getDataFromLocalStorage,
} from "../../helpers/LocalStorageFunctions";
import { useNavigate } from "react-router-dom";
import cameraPhoto from "../../assets/formimages/photoCamera.png";

import LoadingSpinner from "../../UI/LoadingSpinner";
import UploadedIcon from "../../assets/formIcons/UploadedIcon";

const LaptopForm = () => {
  const [requestError, setRequestError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [brandId, setBrandId] = useState("");
  const [baseImage, setBaseImage] = useState("");
  const navigate = useNavigate();
  const laptopDataFromlocal = getDataFromLocalStorage("laptopData");
  const userDataFromLocal = getDataFromLocalStorage("userData");

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
    // inputBlurHandler: imgBlurHandler,
    reset: resetImageInput,
  } = useInput(imageValidator, "", true);

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
  } = useInput(laptopNameValidator, laptopDataFromlocal?.laptopName);

  const {
    value: brand,
    isValid: brandIsValid,
    isTouchedHandler: setBrandIsTouched,
    hasError: brandHasError,
    valueChangeHandler: brandChangeHandler,
    inputBlurHandler: brandBlurHandler,
    reset: resetBrandSelector,
  } = useInput((value) => value !== "", laptopDataFromlocal?.brand);

  useEffect(() => {
    if (brands.length > 0 && brand.length > 0) {
      const selectedBrand = brands.find(
        (currBrand) => currBrand.name === brand
      );
      setBrandId(selectedBrand.id);
      console.log(selectedBrand.id);
      localStorage.setItem("brandId", selectedBrand.id);
    }
  }, [brands, brand]);

  const {
    value: cpu,
    isValid: cpuIsValid,
    isTouchedHandler: setCpuIsTouched,
    hasError: cpuHasError,
    valueChangeHandler: cpuChangeHandler,
    inputBlurHandler: cpuBlurHandler,
    reset: resetCpuSelector,
  } = useInput((value) => value !== "", laptopDataFromlocal?.cpu);

  const {
    value: cpuCore,
    isValid: cpuCoreIsValid,
    isTouchedHandler: setCpuCoreIsTouched,
    hasError: cpuCoreHasError,
    valueChangeHandler: cpuCoreChangeHandler,
    inputBlurHandler: cpuCoreBlurHandler,

    reset: resetCpuCoreInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.cpuCore);

  const {
    value: cpuThread,
    isValid: cpuThreadIsValid,
    isTouchedHandler: setCpuThreadIsTouched,
    hasError: cpuThreadHasError,
    valueChangeHandler: cpuThreadChangeHandler,
    inputBlurHandler: cpuThreadBlurHandler,

    reset: resetCpuThreadInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.cpuThread);

  const {
    value: ram,
    isValid: ramIsValid,
    isTouchedHandler: setRamIsTouched,
    hasError: ramHasError,
    valueChangeHandler: ramChangeHandler,
    inputBlurHandler: ramBlurHandler,

    reset: resetRamInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.ram);

  const {
    value: memoryType,
    isValid: memoryTypeIsValid,
    isTouchedHandler: setMemoryTypeIsTouched,
    hasError: memoryTypeHaserror,
    valueChangeHandler: memoryTypeChangeHandler,

    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetMemoryType,
  } = useInput((value) => value.trim() !== "", laptopDataFromlocal?.memoryType);

  const {
    value: purchaseDate,
    isValid: purchaseDateIsValid,
    isTouchedHandler: setPurchaseDateIsTouched,
    hasError: purchaseDateHasError,
    valueChangeHandler: purchaseDateChangeHandler,
    inputBlurHandler: purchaseDateBlurHandler,

    reset: resetPurchaseDate,
  } = useInput(dateValidator, laptopDataFromlocal?.purchaseDate);
  console.log(purchaseDate.length);

  const {
    value: price,
    isValid: priceIsValid,
    isTouchedHandler: setPriceIsTouched,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPriceInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.price);

  const {
    value: laptopState,
    isValid: laptopStateIsValid,
    isTouchedHandler: setLaptopStateIsTouched,
    hasError: laptopStateHasError,
    valueChangeHandler: laptopStateChangeHandler,
    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetlaptopState,
  } = useInput((value) => value.trim() !== "", laptopDataFromlocal?.state);

  const submitHandler = async (event) => {
    event.preventDefault();

    // make fields touched for better ux error handling
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
      !memoryTypeIsValid ||
      !laptopStateIsValid ||
      !priceIsValid ||
      !purchaseDateIsValid
    ) {
      return;
    }

    // here is request send functionality
    const formValues = {
      token: "1430dbe763b0852044c745ac14a4d9ec",
      laptop_image: laptopImage,
      name: userDataFromLocal.enteredName,
      surname: userDataFromLocal.enteredSurname,
      team_id: +userDataFromLocal.teamId,
      position_id: +userDataFromLocal.positionId,
      phone_number: userDataFromLocal.enteredPhoneNumber,
      email: userDataFromLocal.enteredEmail,
      laptop_name: laptopName,
      laptop_brand_id: +brandId,
      laptop_cpu: cpu,
      laptop_cpu_cores: +cpuCore,
      laptop_cpu_threads: +cpuThread,
      laptop_ram: +ram,
      laptop_hard_drive_type: memoryType.toUpperCase(),
      laptop_state: laptopState,
      laptop_purchase_date: purchaseDate,
      laptop_price: +price,
      // token: "1430dbe763b0852044c745ac14a4d9ec",
      // laptop_image: laptopImage,
      // name: userDataFromLocal.enteredName,
      // surname: userDataFromLocal.enteredSurname,
      // team_id: +userDataFromLocal.teamId,
      // position_id: +userDataFromLocal.positionId,
      // phone_number: userDataFromLocal.enteredPhoneNumber,
      // email: userDataFromLocal.enteredEmail,
      // laptop_name: laptopDataFromlocal.laptopName,
      // laptop_brand_id: +laptopDataFromlocal.brandId,
      // laptop_cpu: laptopDataFromlocal.cpu,
      // laptop_cpu_cores: +laptopDataFromlocal.cpuCore,
      // laptop_cpu_threads: +laptopDataFromlocal.cpuThread,
      // laptop_ram: +laptopDataFromlocal.ram,
      // laptop_hard_drive_type: laptopDataFromlocal.memoryType.toUpperCase(),
      // laptop_state: laptopState,
      // laptop_purchase_date: purchaseDate,
      // laptop_price: +laptopDataFromlocal.price,
    };

    const data = new FormData();

    const formKeys = Object.keys(formValues);

    for (let formKey of formKeys) {
      console.log(formKey, formValues[formKey]);
      data.append(formKey, formValues[formKey]);
    }

    try {
      setRequestError(null);
      setIsLoading(true);
      let res = await axios.post(
        "https://pcfy.redberryinternship.ge/api/laptop/create",
        data,
        {}
      );
      setIsLoading(false);
      navigate("/success");
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

      clearLocalStorage();
    } catch (err) {
      console.log("hello from errror");
      console.log(err.message);
      console.log(err);
      setRequestError("Request error, Something went wrong!");
      setIsLoading(false);
    }
  };

  // when one of this field change, local storage also be updated
  useEffect(() => {
    const laptopData = {
      laptopName: laptopName,
      brand: brand,
      brandId: brandId,
      cpu: cpu,
      cpuCore: cpuCore,
      cpuThread: cpuThread,
      ram: ram,
      state: laptopState,
      memoryType: memoryType,
      purchaseDate: purchaseDate,
      price: price,
    };
    localStorage.setItem("laptopData", JSON.stringify(laptopData));
  }, [
    laptopName,
    brand,
    cpu,
    cpuCore,
    cpuThread,
    ram,
    memoryType,
    purchaseDate,
    price,
    laptopState,
    brandId,
  ]);

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

  const dateClasses = purchaseDateHasError
    ? `${classes.date} ${classes.invalid}`
    : classes.date;

  return (
    <GeneralForm onSubmit={submitHandler}>
      {isLoading && <LoadingSpinner />}
      {requestError && <h1>{requestError}</h1>}
      {brandError || (cpuError && <h1>Failed to fetch cpu/brand data</h1>)}
      <div
        className={
          !laptopImage
            ? laptopImageClasses
            : `${laptopImageClasses} ${classes.existImage}`
        }
      >
        <div className={classes.labelAndErrorWrapper}>
          {laptopImageHasError && <WarningIcon />}
          {!laptopImage && (
            <label className={classes.imgLabel} htmlFor="img">
              ჩააგდე ან ატვირთე <br /> ლეპტოპის ფოტო
            </label>
          )}
          {!laptopImage && (
            <img
              className={classes.cameraIcon}
              src={cameraPhoto}
              alt="camera"
            />
          )}
        </div>
        <div className={classes.inputImageWrapper}>
          <input
            onChange={imgChangeHandler}
            id="img"
            className={
              laptopImage
                ? `${classes["custom-file-input"]} ${classes.haveImage}`
                : classes["custom-file-input"]
            }
            type="file"
          />
        </div>
        {/* after image upload content */}
        {laptopImage && (
          <div className={classes.imageStatusName}>
            <UploadedIcon />
            <div className={classes.imageInfo}>
              <p className={classes.imageName}>{laptopImage.name}</p>
              <p className={classes.imageSize}>
                {(laptopImage.size / 1024 / 1024).toFixed(1)} mb
              </p>
            </div>
          </div>
        )}
        {baseImage && (
          <div className={classes.imgWrapper}>
            <img
              className={classes.uploadedImage}
              src={baseImage}
              alt="uploadedimg"
            />
          </div>
        )}
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
            className={classes.cpuSelect}
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
                // checked={ssdIsChecked}
                checked={memoryType === "ssd"}
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
                // checked={hddIsChecked}
                checked={memoryType === "hdd"}
              />
              <label>HDD</label>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dateAndPrice}>
        <div className={dateClasses}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input
            value={purchaseDate}
            onChange={purchaseDateChangeHandler}
            onBlur={purchaseDateBlurHandler}
            placeholder="დდ / თთ / წწ"
            // type="date"
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
              checked={laptopState === "new"}
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
              checked={laptopState === "used"}
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
