export const clearLocalStorage = () => {
  localStorage.removeItem("enteredName");
  localStorage.removeItem("enteredSurname");
  localStorage.removeItem("team");
  localStorage.removeItem("position");
  localStorage.removeItem("email");
  localStorage.removeItem("phoneNumber");
  localStorage.removeItem("laptopName");
  localStorage.removeItem("laptopBrand");
  localStorage.removeItem("cpu");
  localStorage.removeItem("cpuCores");
  localStorage.removeItem("cpuThreads");
  localStorage.removeItem("ram");
  localStorage.removeItem("memoryType");

  localStorage.removeItem("purchaseDate");
  localStorage.removeItem("price");
  localStorage.removeItem("state");
};
