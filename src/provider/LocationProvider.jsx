import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
    location: "",
  });
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider };
