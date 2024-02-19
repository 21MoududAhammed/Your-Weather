import { useContext } from "react";
import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";
import { weatherContext } from "../context/weatherContext";

export default function Page() {
  const { loading } = useContext(weatherContext);

  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <>
          <Header />
          <WeatherBoard />
        </>
      )}
    </div>
  );
}
