export const setStorageItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value && JSON.parse(value);
  } catch {
    // catch IE browser error
  }
};
