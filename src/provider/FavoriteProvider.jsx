import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  
  // to add a location's details to favorite list
  const addToFavorite = (latitude, longitude, location) => {
    
    setFavorites([...favorites, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }]);
  };
  // to remove a location's details from favorite list
  const removeFromFavorite = (location) => {
    setFavorites(favorites.filter((fav) => fav.location !== location));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider };
