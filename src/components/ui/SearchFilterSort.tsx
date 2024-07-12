import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { MdSort } from "react-icons/md";

const SearchFilterSort = () => {
    return (
      <div className="mb-8 flex lg:justify-between flex-col md:flex-row items-center gap-4">
        <div className="flex items-center w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button className=" text-lg bg-orange-500 p-3 text-white rounded-r-md">
            <AiOutlineSearch />
          </button>
        </div>
        <div className="md:flex space-y-3 md:space-y-0 items-center gap-4 w-full md:w-1/3">
          <label className="flex items-center gap-2">
            <BiFilterAlt className="text-lg text-gray-600" />
            <select
              className="border px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <MdSort className="text-lg text-gray-600" />
            <select
              className="border px-4 py-2 rounded-md focus:outline-none"
            >
              <option value="">Sort By</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="newArrivals">New Arrivals</option>
            </select>
          </label>
        </div>
      </div>
    );
  };
  
  export default SearchFilterSort;