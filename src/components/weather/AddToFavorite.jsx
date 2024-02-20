import { useContext, useEffect, useState } from "react";
import heartIcon from "../../assets/heart.svg";
import heartRedIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddToFavorite() {
  const [isFavorite, toggleFavorite] = useState(false);
  const { favorites, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  // it works at the first rendering / loading period. If this location is available in localStorage it will appear as favorite / selected
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    found && toggleFavorite(true);
  }, []);

  function handleFavorite() {
    toggleFavorite(!isFavorite); // to toggle the isFavorite icon
    // find the location is available or not
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      // this location is not added yet. So add it
      addToFavorite(latitude, longitude, location);
    } else {
      // this location is added. So remove it
      removeFromFavorite(location);
    }
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        onClick={handleFavorite}
        >
          <span>{isFavorite ? 'Remove From Favorite List': 'Add To Favorite List'}</span>
          <img src={isFavorite ? heartRedIcon : heartIcon} alt="heart-icon" />
        </button>
      
      </div>
    </div>
  );
}
