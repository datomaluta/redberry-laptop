import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const setValue = (value) => {
    console.log(value);
    setEnteredValue(value);
  };

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    // localStorage.setItem(`enteredValue`, event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouchedHandler,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    setValue,
    reset,
  };
};

export default useInput;
