export const clearLocalStorage = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("laptopData");
};

export const getDataFromLocalStorage = (value) => {
  const result = localStorage.getItem(value);
  if (!result) {
    return;
  }
  return JSON.parse(result);
};
