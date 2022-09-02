import { memo, useEffect, useRef, useState } from "react";
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
import {
  clearLocalStorage,
  getDataFromLocalStorage2,
} from "../../helpers/LocalStorageFunctions";
import { useNavigate } from "react-router-dom";
import cameraPhoto from "../../assets/formimages/photoCamera.png";
import { getDataFromLocalStorage } from "../../helpers/LocalStorageFunctions";

const LaptopForm = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [brandId, setBrandId] = useState("");
  const [hddIsChecked, setHddIsChecked] = useState(false);
  const [ssdIsChecked, setSsdIsChecked] = useState(false);

  const [baseImage, setBaseImage] = useState("");
  const navigate = useNavigate();
  const laptopDataFromlocal = getDataFromLocalStorage2("laptopData");
  const userDataFromLocal = getDataFromLocalStorage2("userData");
  console.log(laptopDataFromlocal);
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
  console.log(laptopImage);

  const {
    value: laptopName,
    isValid: laptopNameIsValid,
    isTouchedHandler: setLaptopIsTouched,
    hasError: laptopHasError,
    valueChangeHandler: laptopNameChangeHandler,
    inputBlurHandler: laptopNameBlurHandler,
    setValue: setLaptopNameValue,
    reset: resetLaptopInput,
  } = useInput(laptopNameValidator, laptopDataFromlocal?.laptopName);

  const {
    value: brand,
    isValid: brandIsValid,
    isTouchedHandler: setBrandIsTouched,
    hasError: brandHasError,
    valueChangeHandler: brandChangeHandler,
    inputBlurHandler: brandBlurHandler,
    setValue: setBrandValue,
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
    setValue: setCpuValue,
    reset: resetCpuSelector,
  } = useInput((value) => value !== "", laptopDataFromlocal?.cpu);

  const {
    value: cpuCore,
    isValid: cpuCoreIsValid,
    isTouchedHandler: setCpuCoreIsTouched,
    hasError: cpuCoreHasError,
    valueChangeHandler: cpuCoreChangeHandler,
    inputBlurHandler: cpuCoreBlurHandler,
    setValue: setCpuCoresValue,
    reset: resetCpuCoreInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.cpuCore);

  const {
    value: cpuThread,
    isValid: cpuThreadIsValid,
    isTouchedHandler: setCpuThreadIsTouched,
    hasError: cpuThreadHasError,
    valueChangeHandler: cpuThreadChangeHandler,
    inputBlurHandler: cpuThreadBlurHandler,
    setValue: setCpuThreadsValue,
    reset: resetCpuThreadInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.cpuThread);

  const {
    value: ram,
    isValid: ramIsValid,
    isTouchedHandler: setRamIsTouched,
    hasError: ramHasError,
    valueChangeHandler: ramChangeHandler,
    inputBlurHandler: ramBlurHandler,
    setValue: setRamValue,
    reset: resetRamInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.ram);

  const {
    value: memoryType,
    isValid: memoryTypeIsValid,
    isTouchedHandler: setMemoryTypeIsTouched,
    hasError: memoryTypeHaserror,
    valueChangeHandler: memoryTypeChangeHandler,
    setValue: setMemoryTypeValue,
    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetMemoryType,
  } = useInput((value) => value.trim() !== "", laptopDataFromlocal?.memoryType);
  console.log(memoryType);

  const {
    value: purchaseDate,
    // isValid: purchaseDateIsValid,
    isTouchedHandler: setPurchaseDateIsTouched,
    // hasError: purchaseDateHasError,
    valueChangeHandler: purchaseDateChangeHandler,
    inputBlurHandler: purchaseDateBlurHandler,
    setValue: setPurchaseDateValue,
    reset: resetPurchaseDate,
  } = useInput(
    (value) => value.trim() !== "",
    laptopDataFromlocal?.purchaseDate
  );

  const {
    value: price,
    isValid: priceIsValid,
    isTouchedHandler: setPriceIsTouched,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    setValue: setPriceValue,
    reset: resetPriceInput,
  } = useInput(onlyNumberValidator, laptopDataFromlocal?.price);

  const {
    value: laptopState,
    isValid: laptopStateIsValid,
    isTouchedHandler: setLaptopStateIsTouched,
    hasError: laptopStateHasError,
    valueChangeHandler: laptopStateChangeHandler,
    setValue: setLaptopStateValue,
    // inputBlurHandler: memoryTypeBlurHandler,
    reset: resetlaptopState,
  } = useInput((value) => value.trim() !== "", laptopDataFromlocal?.state);

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
      name: userDataFromLocal.enteredName,
      surname: userDataFromLocal.enteredSurname,
      team_id: +userDataFromLocal.teamId,
      position_id: +userDataFromLocal.positionId,
      phone_number: userDataFromLocal.enteredPhoneNumber,
      email: userDataFromLocal.enteredEmail,
      laptop_name: laptopDataFromlocal.laptopName,
      laptop_brand_id: +laptopDataFromlocal.brandId,
      laptop_cpu: laptopDataFromlocal.cpu,
      laptop_cpu_cores: +laptopDataFromlocal.cpuCore,
      laptop_cpu_threads: +laptopDataFromlocal.cpuThread,
      laptop_ram: +laptopDataFromlocal.ram,
      laptop_hard_drive_type: laptopDataFromlocal.memoryType.toUpperCase(),
      laptop_state: laptopDataFromlocal.state,
      laptop_purchase_date: laptopDataFromlocal.purchaseDate || "",
      laptop_price: +laptopDataFromlocal.price,
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

    clearLocalStorage();
    navigate("/success");

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
  // console.log(selectedImage);

  // useEffect(() => {
  //   const name = localStorage.getItem("laptopName");
  //   const laptopBrand = localStorage.getItem("laptopBrand");
  //   const laptopCpu = localStorage.getItem("cpu");
  //   const laptopCpuCores = localStorage.getItem("cpuCores");
  //   const laptopCpuThreads = localStorage.getItem("cpuThreads");
  //   const laptopRam = localStorage.getItem("ram");
  //   const laptopMemoryType = localStorage.getItem("memoryType");
  //   const purchaseDate = localStorage
  //     .getItem("purchaseDate")
  //     ?.split("-")
  //     .join("/");
  //   console.log(purchaseDate);
  //   const laptopPrice = localStorage.getItem("price");
  //   const laptop_state = localStorage.getItem("state");

  //   setLaptopNameValue(name || "");
  //   setBrandValue(laptopBrand || "");
  //   setCpuValue(laptopCpu || "");
  //   setCpuCoresValue(laptopCpuCores || "");
  //   setCpuThreadsValue(laptopCpuThreads || "");
  //   setRamValue(laptopRam || "");
  //   setMemoryTypeValue(laptopMemoryType || "");
  //   setPurchaseDateValue(purchaseDate || "");
  //   setPriceValue(laptopPrice || "");
  //   setLaptopStateValue(laptop_state || "");
  // }, [
  //   setLaptopNameValue,
  //   setBrandValue,
  //   setCpuValue,
  //   setCpuCoresValue,
  //   setCpuThreadsValue,
  //   setRamValue,
  //   setMemoryTypeValue,
  //   setPurchaseDateValue,
  //   setPriceValue,
  //   setLaptopStateValue,
  // ]);
  console.log(purchaseDate);

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
    // localStorage.setItem("laptopName", laptopName);
    // localStorage.setItem("laptopBrand", brand);
    // localStorage.setItem("cpu", cpu);
    // localStorage.setItem("cpuCores", cpuCore);
    // localStorage.setItem("cpuThreads", cpuThread);
    // localStorage.setItem("ram", ram);
    // localStorage.setItem("memoryType", memoryType);
    // localStorage.setItem("purchaseDate", purchaseDate.split("/").join("-"));
    // localStorage.setItem("price", price);
    // localStorage.setItem("state", laptopState);
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

  // useEffect(() => {
  //   if (localStorage.getItem("memoryType") === "hdd") {
  //     setHddIsChecked(true);
  //   }
  //   if (localStorage.getItem("memoryType" === "ssd")) {
  //     setSsdIsChecked(true);
  //   }
  // }, []);

  return (
    <GeneralForm onSubmit={submitHandler}>
      <div className={laptopImageClasses}>
        <div className={classes.labelAndErrorWrapper}>
          {laptopImageHasError && <WarningIcon />}
          <label className={classes.imgLabel} htmlFor="img">
            ჩააგდე ან ატვრთე <br /> ლეპტოპის ფოტო
          </label>
          <img className={classes.cameraIcon} src={cameraPhoto} alt="camera" />
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
        <div className={classes.date}>
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
