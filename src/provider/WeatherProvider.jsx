import useWeather from "../hooks/useWeather";
import { weatherContext } from "../context/weatherContext";
function WeatherProvider({ children }) {
  const { loading, error, weatherData }  = useWeather();
  
  return (
    <weatherContext.Provider value={{loading, error, weatherData}}>
      {children}
    </weatherContext.Provider>
  );
}

export { WeatherProvider };
