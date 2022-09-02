import { useCallback, useState } from "react";

const useInput = (validateValue, initialValue = "", isImage = false) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const setValue = useCallback((value) => {
    setEnteredValue(value);
  }, []);

  const valueChangeHandler = (event) => {
    if (isImage) {
      setEnteredValue(event.target.files[0]);
    } else {
      setEnteredValue(event.target.value);
    }
  };

  const test = {
    enteredName: "dato",
    enteredSurname: "maluta",
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
