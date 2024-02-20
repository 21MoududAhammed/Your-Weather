import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";
function WeatherProvider({ children }) {
  const { loading, error, weatherData } = useWeather();

  return (
    <WeatherContext.Provider value={{ loading, error, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
