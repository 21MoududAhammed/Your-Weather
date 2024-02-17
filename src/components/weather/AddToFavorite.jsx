import heartIcon from '../../assets/heart.svg'
export default function AddToFavorite() {
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favorite</span>
          <img src={heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
