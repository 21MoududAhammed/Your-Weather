import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context";
import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";
import bgRainy from "../assets/backgrounds/rainy-day.jpg";
import bgMist from "../assets/backgrounds/mist.jpeg";
import bgClear from "../assets/backgrounds/sunny.jpg";
import bgScatterdClouds from "../assets/backgrounds/scattered-clouds.jpg";
import bgFog from "../assets/backgrounds/winter.jpg";
import bgThunder from "../assets/backgrounds/thunderstorm.jpg";
import bgSunny from "../assets/backgrounds/sunny.jpg";
import bgSnow from "../assets/backgrounds/snow.jpg";
import bgClearSky from "../assets/backgrounds/clear-sky.jpg";
import bgHaze from '../assets/backgrounds/snow.jpg'

export default function Page() {
  const [bgImage, setBgImage] = useState("");
  const { loading, weatherData } = useContext(WeatherContext);

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return bgRainy;
      case "Clouds":
        return bgScatterdClouds;
      case "Clear":
        return bgClear;
      case "Haze":
        return bgHaze;
      case "Mist":
        return bgMist;
      case "Fog":
        return bgFog;
      case "Thunder":
        return bgThunder;
      case "Snow":
        return bgSnow;
      case "Sunny":
        return bgSunny;
      default:
        return bgClearSky;
    }
  }

  useEffect(() => {
    setBgImage(getBackgroundImage(weatherData.climate));
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className=" flex justify-center items-center w-2/4 mx-auto h-40 bg-green-300 rounded-lg mt-10">
          <p className="text-4xl font-bold">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${bgImage}')` }}
          className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center"
        >
          <Header />
          <WeatherBoard />
        </div>
      )}
    </>
  );
}
