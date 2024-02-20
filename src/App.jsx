import Page from "./components/Page";
import { WeatherProvider } from "./provider";
import { FavoriteProvider } from "./provider/FavoriteProvider";
import { LocationProvider } from "./provider/LocationProvider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
