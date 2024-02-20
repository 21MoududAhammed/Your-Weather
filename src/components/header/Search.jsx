import { useContext, useState } from "react";
import searchImg from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
export default function Search() {
  const [value, setValue] = useState("");// to handle the search box's data
  const { setLocation } = useContext(LocationContext); // it provides location and setLocation 
  function handleSubmit(e) {
    e.preventDefault(); // to prevent the from's default behavior
    const fetchLocation = getLocationByName(value); // we may get it by a API in the future
    setLocation({ ...fetchLocation }); //set the location to LocationContext
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <img src={searchImg} />
        </button>
      </div>
    </form>
  );
}
