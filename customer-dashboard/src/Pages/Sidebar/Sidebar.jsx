// src/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="bg-blue-200 w-auto h-700px p-4">
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-4">
          <img
            className="rounded-full h-28 w-28 mr-2"
            src="https://placekitten.com/100/100"
            alt="User Profile"
          />
          <div className="flex flex-col items-center mb-4">
            <p className="font-semibold text-xl">John Doe</p>
            <p className="text-gray-500 text-lg">Joined on June 1, 2022</p>
          </div>
        </div>

        {/* Sidebar Items */}
        <nav>
          <ul>
            <li className="my-3">
              <a
                href="#"
                className="flex items-center gap-5 font-semibold hover:text-violet-800 focus:text-violet-800"
              >
                <span class="material-icons text-violet-700">account_circle</span>
                My Profile
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="flex items-center gap-5 font-semibold hover:text-[#EC5E0E] focus:text-[#EC5E0E]">
                <span class="material-icons text-[#EC5E0E] ">
                  inventory
                </span>
                Order
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="flex items-center gap-5 font-semibold hover:text-red-600 focus:text-red-600">
                <span class="material-icons text-red-600">
                  favorite
                </span>
                Wishlist
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="flex items-center gap-5 font-semibold hover:text-green-700 focus:text-green-700">
                <span class="material-icons text-green-700">
                  wallet
                </span>
                Wallet
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="flex items-center gap-5 font-semibold hover:text-[#8B087E] focus:text-[#8B087E]">
                <span class="material-icons text-[#8B087E]">
                  mail
                </span>
                Inbox
              </a>
            </li>
            <li className="my-3">
              <a href="#" className="flex items-center gap-5 font-semibold hover:text-[#16A9D8] focus:text-[#16A9D8] ">
                <span class="material-icons text-[#16A9D8]">
                  notifications
                </span>
                Notifications
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
