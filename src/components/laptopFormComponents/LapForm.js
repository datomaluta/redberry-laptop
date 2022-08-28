import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import GeneralForm from "../../layouts/formTemplateLayout/GeneralForm";
import classes from "./LapForm.module.css";
import useHttp from "../../hooks/use-http";

const LaptopForm = () => {
  // const [memoryType, setMemoryType] = useState("");
  // const imgRef = useRef();
  // const [img, setImg] = useState("");
  // useEffect(() => {}, []);

  // const imgChangeHandler = (event) => {
  //   console.log(event.target.files[0]);
  //   setImg(event.target.files[0].name);
  // };
  // console.log(img);

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
    value: laptopName,
    isValid: laptopNameIsValid,
    isTouchedHandler: setLaptopIsTouched,
    hasError: laptopHasError,
    valueChangeHandler: laptopNameChangeHandler,
    inputBlurHandler: laptopNameBlurHandler,
    reset: resetLaptopInput,
  } = useInput((value) => value.trim() !== "");

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
  } = useInput((value) => value.trim() !== "");

  const {
    value: cpuThread,
    isValid: cpuThreadIsValid,
    isTouchedHandler: setCpuThreadIsTouched,
    hasError: cpuThreadHasError,
    valueChangeHandler: cpuThreadChangeHandler,
    inputBlurHandler: cpuThreadBlurHandler,
    reset: resetCpuThreadInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: ram,
    isValid: ramIsValid,
    isTouchedHandler: setRamIsTouched,
    hasError: ramHasError,
    valueChangeHandler: ramChangeHandler,
    inputBlurHandler: ramBlurHandler,
    reset: resetRamInput,
  } = useInput((value) => value.trim() !== "");

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
  } = useInput((value) => value.trim() !== "");

  const {
    value: laptopState,
    isValid: laptopStateIsValid,
    isTouchedHandler: setLaptopStateIsTouched,
    hasError: laptopStateHasError,
    valueChangeHandler: laptopStateChangeHandler,
    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetlaptopState,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (event) => {
    event.preventDefault();
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
    console.log("request sent");
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
    ? `${classes.memoryRadio} ${classes.invalid}`
    : classes.memoryRadio;

  const priceClasses = priceHasError
    ? `${classes.price} ${classes.invalid}`
    : classes.price;

  const laptopStateClasses = laptopStateHasError
    ? `${classes.laptopCondition} ${classes.invalid}`
    : classes.laptopCondition;

  const radioChangeHandler = (event) => {
    console.log(event.target.value);
    // setMemoryType(event.target.value);
  };

  console.log(laptopState);

  return (
    <GeneralForm onSubmit={submitHandler}>
      <div className={classes.imageUploader}>
        <label htmlFor="img">
          ჩააგდე ან ატვრთე <br /> ლეპტოპის ფოტო
        </label>
        <input
          // onChange={imgChangeHandler}
          // ref={imgRef}
          id="img"
          className={classes["custom-file-input"]}
          type="file"
        />
        {/* <span>{img}</span> */}
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
        <div className={memoryTypeClasses}>
          <label>მეხსიერების ტიპი</label>
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
      <div className={laptopStateClasses}>
        <label>ლეპტოპის მდგომარეობა</label>
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
              value="secondHanded"
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
