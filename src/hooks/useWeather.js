import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
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
          temperature: data?.main?.temp,
          maxTemperature: data?.main?.temp_max,
          minTemperature: data?.main?.temp_min,
          humidity: data?.main?.humidity,
          cloudPercentage: data?.clouds?.all,
          wind: data?.wind?.speed,
          time: data?.dt,
          longitude: latitude,
          latitude: longitude,
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
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeather(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    loading,
    error,
    weatherData,
  };
};

export default useWeather;
