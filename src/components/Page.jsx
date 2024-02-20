import { useContext } from "react";
import { WeatherContext } from "../context";
import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";

export default function Page() {
  const { loading } = useContext(WeatherContext);

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
