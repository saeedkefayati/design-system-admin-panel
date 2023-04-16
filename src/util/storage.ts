const getStorageItem = (key: string) => {
  return localStorage.getItem(key);
};

const setStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

const getTokenStorage = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : undefined;
};

export {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
  clearStorage,
  getTokenStorage,
};
