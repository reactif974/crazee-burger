export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (id, array) => {
  return array.find((item) => item.id === id);
};

export const filter = (array, id) => {
  return array.filter((item) => item.id !== id);
};

export const removeObjectById = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};
