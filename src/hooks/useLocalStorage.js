import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  // getItem returns "null" while the localStorage is empty
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    //update localStorage whenever value or storageKey changes
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export { useLocalStorage };
