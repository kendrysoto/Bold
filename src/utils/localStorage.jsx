export const setToLocalStorage = (nameData, data) => {
  localStorage.setItem(nameData, JSON.stringify(data));
};

export const getToLocalStorage = (nameData) => {
  return localStorage.getItem(nameData);
};
