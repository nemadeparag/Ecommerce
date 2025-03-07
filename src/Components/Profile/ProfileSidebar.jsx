import React from "react";

import { FaBox } from "react-icons/fa";
import { MdKeyboardArrowRight, MdLogout } from "react-icons/md";

function ProfileSidebar() {
  return (
    <div className="w-[25%]">
      {/* User Profile */}
      <div className="flex bg-white items-center gap-3 py-4 px-6  shadow-md border border-gray-200 rounded-md">
        <img
          src="https://via.placeholder.com/50"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-gray-500 text-sm">Hello,</p>
          <p className="font-bold text-lg">Parag Nemade</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="mt-2  p-4 bg-white shadow-md border border-gray-200 rounded-md">
        {/* My Orders */}
        <div className="flex justify-between items-center mt-4 p-2 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-3">
            <FaBox className="text-blue-500 text-lg" />
            <span className="text-sm">MY ORDERS</span>
          </div>
          <MdKeyboardArrowRight className="text-gray-500 text-lg" />
        </div>

        {/* Account Settings */}
        <h2 className="mt-2 text-gray-500  font-bold  pl-3">
          ACCOUNT SETTINGS
        </h2>
        <div className="mt-2">
          <div className="p-3 pl-10 text-sm cursor-pointer hover:bg-gray-200 rounded-md ">
            Profile Information
          </div>
          <div className="p-3 pl-10 text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            Manage Addresses
          </div>
          <div className="p-3 pl-10 text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            PAN Card Information
          </div>
        </div>

        {/* Payments */}
        <h2 className="mt-4  text-gray-500  font-bold pl-3">PAYMENTS</h2>
        <div className="mt-2">
          <div className="p-3 pl-10 flex justify-between items-center text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            Gift Cards
          </div>
          <div className="p-3 pl-10 text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            Saved UPI
          </div>
          <div className="p-3 pl-10 text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            Saved Cards
          </div>
        </div>

        {/* My Stuff */}
        <h2 className="mt-4  text-gray-500  font-bold pl-3">MY STUFF</h2>
        <div className="mt-2">
          <div className="p-3 pl-10 flex justify-between items-center text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            My Coupons
          </div>
          <div className="p-3 pl-10 text-sm cursor-pointer hover:bg-gray-200 rounded-md">
            My Wishlist
          </div>
        </div>

        {/* Logout */}
        <div className="flex justify-between mt-2 items-center p-3 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-3">
            <MdLogout className="text-blue-500 text-lg" />
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProfileSidebar;
