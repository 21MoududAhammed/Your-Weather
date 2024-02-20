import Page from "./components/Page";
import { WeatherProvider } from "./provider";
import { FavoriteProvider } from "./provider/FavoriteProvider";

export default function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <Page />
      </FavoriteProvider>
    </WeatherProvider>
  );
}
