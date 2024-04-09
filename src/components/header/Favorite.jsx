import favoriteIcon from "../../assets/heart.svg";
export default function Favorite({ onChange }) {
  return (
    <button
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onChange}
    >
      <img src={favoriteIcon} alt="" />
      <span className='text-white font-semibold'>Favorite Locations</span>
    </button>
  );
}
