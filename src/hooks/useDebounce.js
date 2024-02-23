import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const ref = useRef(null);

  //it will clean up the setTimeout, while user call this hook 
  useEffect(() => {
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, []);


  const debouncedCallback = (...args) => {
    //clear the setTimeout, if it's available 
    if (ref.current) {
      clearTimeout(ref.current);
    }
    // set a new time to execute 
    ref.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export { useDebounce };
