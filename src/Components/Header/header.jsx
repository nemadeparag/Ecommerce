import { useState } from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const header = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="bg-white w-full shadow-sm py-2 px-6 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-600">Flipkart</h1>
        <span className="text-xs text-gray-500 ml-1">Explore <span className="text-yellow-500 font-semibold">Plus</span> ✨</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 px-4 py-2 rounded-lg w-[50%]">
        <FiSearch className="text-gray-500 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="bg-transparent w-full outline-none"
        />
      </div>

      {/* Right Side Options */}
      <div className="flex items-center gap-6">
        {/* User Profile */}
        <div className="flex items-center cursor-pointer">
          <span className="text-black font-medium">Parag</span>
          <MdKeyboardArrowDown className="text-gray-500 ml-1" size={20} />
        </div>

        {/* Cart */}
        <div className="relative flex items-center cursor-pointer">
          <FaShoppingCart className="text-black" size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
          <span className="ml-2 text-black">Cart</span>
        </div>

        {/* Become a Seller */}
        <div className="flex items-center cursor-pointer">
          <FaStore className="text-black" size={20} />
          <span className="ml-2 text-black">Become a Seller</span>
        </div>

        {/* More Options */}
        <div className="cursor-pointer text-gray-600 text-xl">⋮</div>
      </div>
    </header>
  );
};

export default header;
