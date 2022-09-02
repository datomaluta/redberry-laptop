export const getDataFromLocalStorage = (value) => {
  const result = localStorage.getItem(value);
  if (!result) {
    return;
  }
  return result;
};
