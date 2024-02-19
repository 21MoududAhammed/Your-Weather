import tempMaxImg from "../../assets/icons/temp-max.svg";
import tempMinImg from "../../assets/icons/temp-min.svg";
import humidityImg from "../../assets/icons/humidity.svg";
import cloudImg from "../../assets/icons/cloud.svg";
import windImg from "../../assets/icons/wind.svg";
import { useContext } from "react";
import { weatherContext } from "../../context/weatherContext";
export default function WeatherCondition() {
  const { weatherData } = useContext(weatherContext);
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climateDescription,
  } = weatherData;

  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        Climate is <span className="underline">{climateDescription}</span>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={tempMaxImg} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={tempMinImg} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humidity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={humidityImg} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={cloudImg} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind} km/h</p>
            <img src={windImg} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}
