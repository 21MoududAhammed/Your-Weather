import { useContext } from "react";
import HazeIcon from "../../assets/haze.svg";
import CloudIcon from "../../assets/icons/cloud.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import pinImg from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, location, time, climate } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Haze":
        return HazeIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      case "Snow":
        return SnowIcon;
      case "Sunny":
        return SunnyIcon;
      case "Thunder":
        return ThunderIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      default:
        return SunnyIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt={`climate-${climate}`} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinImg} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
}
