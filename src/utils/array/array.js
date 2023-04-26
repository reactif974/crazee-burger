export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (array, id) => {
  return array.find((item) => item.id === id);
};

export const filter = (array, id) => {
  return array.filter((item) => item.id !== id);
};
