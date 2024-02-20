import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

export default function FavoriteList() {
  const { favorites } = useContext(FavoriteContext);
  const { setLocation } = useContext(LocationContext);
  function handleClick(fev) {
    // console.log(fev);
    setLocation({ ...fev });
  }
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <li
              key={fav.location}
              className="hover:bg-gray-200"
              onClick={() => handleClick(fav)}
            >
              {fav.location}
            </li>
          ))
        ) : (
          <p>Nothing is added yet</p>
        )}
      </ul>
    </div>
  );
}
