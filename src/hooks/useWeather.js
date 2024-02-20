import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const { location } = useContext(LocationContext);
  
  const selectedLocation = location; // that user is searching

  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    climateDescription: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const fetchWeather = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Data Fetching....",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        throw new Error(`Fetching data failed: ${response.status}`);
      } else {
        const data = await response.json();
        //set data about current weather
        setWeatherData({
          ...weatherData,
          location: data?.name,
          climate: data?.weather[0]?.main,
          climateDescription: data?.weather[0]?.main,
          temperature: data?.main?.temp,
          maxTemperature: data?.main?.temp_max,
          minTemperature: data?.main?.temp_min,
          humidity: data?.main?.humidity,
          cloudPercentage: data?.clouds?.all,
          wind: data?.wind?.speed,
          time: data?.dt,
          longitude: longitude,
          latitude: latitude,
        });
      }
    } catch (err) {
      // set the error message, if it happens.
      setError(err);
    } finally {
      // reset the loading state
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location .....",
    });
    //  if user is search, if statement will execute otherwise else will execute
    if (selectedLocation.latitude && selectedLocation.longitude) {
      //fetchWeather fetch the details of a location's weather. it takes two parameter which are latitude and longitude.
      fetchWeather(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      //here navigator is being used to get the current location's latitude and longitude, is a build in api of js
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    loading,
    error,
    weatherData,
  };
};

export default useWeather;
