export const storeLocal = (username, key, value) => {
  if (!username) return;
  localStorage.setItem(username, JSON.stringify({ [key]: value }));
};

export const retrieveFromLocalStorage = (username, key) => {
  if (!username) return;
  const storedData = JSON.parse(localStorage.getItem(username));
  if (!storedData) return;
  return storedData[key];
};
