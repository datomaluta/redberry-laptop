// export const clearLocalStorage = () => {
//   localStorage.removeItem("enteredName");
//   localStorage.removeItem("enteredSurname");
//   localStorage.removeItem("team");
//   localStorage.removeItem("position");
//   localStorage.removeItem("email");
//   localStorage.removeItem("phoneNumber");
//   localStorage.removeItem("laptopName");
//   localStorage.removeItem("laptopBrand");
//   localStorage.removeItem("cpu");
//   localStorage.removeItem("cpuCores");
//   localStorage.removeItem("cpuThreads");
//   localStorage.removeItem("ram");
//   localStorage.removeItem("memoryType");
//   localStorage.removeItem("purchaseDate");
//   localStorage.removeItem("price");
//   localStorage.removeItem("state");
// };

export const clearLocalStorage = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("laptopData");
};

export const getDataFromLocalStorage = (value) => {
  const result = localStorage.getItem(value);
  if (!result) {
    return "";
  }
  return result;
};

export const getDataFromLocalStorage2 = (value) => {
  const result = localStorage.getItem(value);
  if (!result) {
    return;
  }
  return JSON.parse(result);
};
