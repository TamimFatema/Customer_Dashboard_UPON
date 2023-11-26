// src/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSideBar, toggleShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-white w-auto h-700px p-4 rounded-lg hidden lg:block">
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-4">
          <img
            className="rounded-full h-28 w-28 mr-2"
            src="https://placekitten.com/100/100"
            alt="User Profile"
          />
          <div className="flex flex-col items-center mb-4">
            <p className="font-semibold text-xl">John Doe</p>
            <p className="text-gray-500 text-lg">joined on 8th Aug,2023</p>
          </div>
        </div>

        {/* Sidebar Items */}
        <nav>
          <ul>
            <li className="my-3">
              <Link
                to="/profile"
                className="flex items-center gap-5 font-semibold hover:text-violet-800 focus:text-violet-800"
              >
                <span className="material-icons text-violet-700">
                  account_circle
                </span>
                My Profile
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="/myorders"
                className="flex items-center gap-5 font-semibold hover:text-[#EC5E0E] focus:text-[#EC5E0E]"
              >
                <span className="material-icons text-[#EC5E0E] ">
                  inventory
                </span>
                Order
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="/mywishlist"
                className="flex items-center gap-5 font-semibold hover:text-red-600 focus:text-red-600"
              >
                <span className="material-icons text-red-600">favorite</span>
                Wishlist
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="#"
                className="flex items-center gap-5 font-semibold hover:text-green-700 focus:text-green-700"
              >
                <span className="material-icons text-green-700">wallet</span>
                Wallet
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="inbox"
                className="flex items-center gap-5 font-semibold hover:text-[#8B087E] focus:text-[#8B087E]"
              >
                <span className="material-icons text-[#8B087E]">mail</span>
                Inbox
              </Link>
            </li>
            <li className="my-3">
              <a
                href="#"
                className="flex items-center gap-5 font-semibold hover:text-[#16A9D8] focus:text-[#16A9D8] "
              >
                <span className="material-icons text-[#16A9D8]">
                  notifications
                </span>
                Notifications
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* responsive navbar */}
      <div className="relative w-full md:w-[750px] mx-auto lg:hidden bg-white rounded-lg flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full h-16 w-16"
            src="https://placekitten.com/100/100"
            alt="User Profile"
          />
          <div className="flex flex-col">
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-500">Joined on June 1, 2022</p>
          </div>
        </div>

        <span
          onClick={() => toggleShowSidebar(true)}
          className="material-symbols-outlined cursor-pointer bg-[#5709BB] text-white rounded-md p-1"
        >
          menu
        </span>
        {showSideBar && (
          <nav className="absolute top-0 right-0 bg-white p-4 rounded-tr-lg border">
            <span
              onClick={() => toggleShowSidebar(false)}
              className="material-symbols-outlined cursor-pointer text-blue-500"
            >
              close
            </span>
            <ul>
              <li className="my-3">
                <Link
                  to="/profile"
                  className="flex items-center gap-5 font-semibold hover:text-violet-800 focus:text-violet-800"
                >
                  <span className="material-icons text-violet-700">
                    account_circle
                  </span>
                  My Profile
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/myorders"
                  className="flex items-center gap-5 font-semibold hover:text-[#EC5E0E] focus:text-[#EC5E0E]"
                >
                  <span className="material-icons text-[#EC5E0E] ">
                    inventory
                  </span>
                  Order
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/mywishlist"
                  className="flex items-center gap-5 font-semibold hover:text-red-600 focus:text-red-600"
                >
                  <span className="material-icons text-red-600">favorite</span>
                  Wishlist
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="#"
                  className="flex items-center gap-5 font-semibold hover:text-green-700 focus:text-green-700"
                >
                  <span className="material-icons text-green-700">wallet</span>
                  Wallet
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="inbox"
                  className="flex items-center gap-5 font-semibold hover:text-[#8B087E] focus:text-[#8B087E]"
                >
                  <span className="material-icons text-[#8B087E]">mail</span>
                  Inbox
                </Link>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="flex items-center gap-5 font-semibold hover:text-[#16A9D8] focus:text-[#16A9D8] "
                >
                  <span className="material-icons text-[#16A9D8]">
                    notifications
                  </span>
                  Notifications
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Sidebar;
