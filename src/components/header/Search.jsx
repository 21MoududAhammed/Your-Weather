import { useContext, useState } from "react";

import searchImg from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
// import { useDebounce } from "../../hooks";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setLocation } = useContext(LocationContext); // useContext provides location and setLocation

  // useDebounce may use later 
  // const doSearch = useDebounce((searchTerm) => {
  //   const fetchLocation = getLocationByName(searchTerm);
  //   setLocation({ ...fetchLocation });
  // }, 500);

  // function handleChange(searchTerm) {
  //   doSearch(searchTerm);
  // }

  const handleSearch = async (e) =>{
    e.preventDefault();
    const fetchLocation = await getLocationByName(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1))
    console.log(fetchLocation);
    setLocation({...fetchLocation})
    setSearchTerm('')
  }
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" 
        onClick={handleSearch}
        >
          <img src={searchImg} />
        </button>
      </div>
    </form>
  );
}
