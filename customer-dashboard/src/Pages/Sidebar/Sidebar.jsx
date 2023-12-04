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
                className="flex items-center gap-5 font-semibold hover:text-[#134EA3] focus:text-[#134EA3]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM7 17H12V15H7V17ZM8 13L12 11L16 13V5H8V13Z"
                    fill="#134EA3"
                  />
                </svg>
                Order
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="/pendingorders"
                className="flex items-center gap-5 font-semibold hover:text-[#FF9B05] focus:text-[#FF9B05]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 2.275C11.3167 2.09167 11.65 2 12 2C12.35 2 12.6833 2.09167 13 2.275L20 6.3C20.3167 6.48333 20.5625 6.725 20.7375 7.025C20.9125 7.325 21 7.65833 21 8.025V12.275C20.7 12.0583 20.3833 11.8708 20.05 11.7125C19.7167 11.5542 19.3667 11.4167 19 11.3V9.1L15.4 11.175C14.4667 11.4083 13.6208 11.8042 12.8625 12.3625C12.1042 12.9208 11.4833 13.6 11 14.4V12.575L5 9.1V15.95L10.05 18.875C10.1167 19.4083 10.2417 19.9208 10.425 20.4125C10.6083 20.9042 10.8417 21.3667 11.125 21.8C11.0917 21.7833 11.0708 21.7708 11.0625 21.7625C11.0542 21.7542 11.0333 21.7417 11 21.725L4 17.7C3.68333 17.5167 3.4375 17.275 3.2625 16.975C3.0875 16.675 3 16.3417 3 15.975V8.025C3 7.65833 3.0875 7.325 3.2625 7.025C3.4375 6.725 3.68333 6.48333 4 6.3L11 2.275ZM12 4L6.075 7.425L12 10.85L17.925 7.425L12 4ZM17 23C15.6167 23 14.4375 22.5125 13.4625 21.5375C12.4875 20.5625 12 19.3833 12 18C12 16.6167 12.4875 15.4375 13.4625 14.4625C14.4375 13.4875 15.6167 13 17 13C18.3833 13 19.5625 13.4875 20.5375 14.4625C21.5125 15.4375 22 16.6167 22 18C22 19.3833 21.5125 20.5625 20.5375 21.5375C19.5625 22.5125 18.3833 23 17 23ZM17.5 17.8V15H16.5V18.2L18.65 20.35L19.35 19.65L17.5 17.8Z"
                    fill="#FF9B05"
                  />
                </svg>
                Pending Orders
              </Link>
            </li>
            <li className="my-3">
              <Link
                to="/completedorders"
                className="flex items-center gap-5 font-semibold hover:text-[#0B8D5E] focus:text-[#0B8D5E]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.1333 3 19.2583 3.0125 19.375 3.0375C19.4917 3.0625 19.6083 3.1 19.725 3.15L17.875 5H5V19H19V12.35L21 10.35V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM11.525 17L5.875 11.35L7.275 9.95L11.525 14.2L20.7 5.025L22.125 6.4L11.525 17Z"
                    fill="#0B8D5E"
                  />
                </svg>
                Completed Orders
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
              <Link
                to="notification"
                className="flex items-center gap-5 font-semibold hover:text-[#16A9D8] focus:text-[#16A9D8] "
              >
                <span className="material-icons text-[#16A9D8]">
                  notifications
                </span>
                Notifications
              </Link>
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
                  className="flex items-center gap-5 font-semibold hover:text-[#134EA3] focus:text-[#134EA3]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM7 17H12V15H7V17ZM8 13L12 11L16 13V5H8V13Z"
                      fill="#134EA3"
                    />
                  </svg>
                  Order
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/pendingorders"
                  className="flex items-center gap-5 font-semibold hover:text-[#FF9B05] focus:text-[#FF9B05]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 2.275C11.3167 2.09167 11.65 2 12 2C12.35 2 12.6833 2.09167 13 2.275L20 6.3C20.3167 6.48333 20.5625 6.725 20.7375 7.025C20.9125 7.325 21 7.65833 21 8.025V12.275C20.7 12.0583 20.3833 11.8708 20.05 11.7125C19.7167 11.5542 19.3667 11.4167 19 11.3V9.1L15.4 11.175C14.4667 11.4083 13.6208 11.8042 12.8625 12.3625C12.1042 12.9208 11.4833 13.6 11 14.4V12.575L5 9.1V15.95L10.05 18.875C10.1167 19.4083 10.2417 19.9208 10.425 20.4125C10.6083 20.9042 10.8417 21.3667 11.125 21.8C11.0917 21.7833 11.0708 21.7708 11.0625 21.7625C11.0542 21.7542 11.0333 21.7417 11 21.725L4 17.7C3.68333 17.5167 3.4375 17.275 3.2625 16.975C3.0875 16.675 3 16.3417 3 15.975V8.025C3 7.65833 3.0875 7.325 3.2625 7.025C3.4375 6.725 3.68333 6.48333 4 6.3L11 2.275ZM12 4L6.075 7.425L12 10.85L17.925 7.425L12 4ZM17 23C15.6167 23 14.4375 22.5125 13.4625 21.5375C12.4875 20.5625 12 19.3833 12 18C12 16.6167 12.4875 15.4375 13.4625 14.4625C14.4375 13.4875 15.6167 13 17 13C18.3833 13 19.5625 13.4875 20.5375 14.4625C21.5125 15.4375 22 16.6167 22 18C22 19.3833 21.5125 20.5625 20.5375 21.5375C19.5625 22.5125 18.3833 23 17 23ZM17.5 17.8V15H16.5V18.2L18.65 20.35L19.35 19.65L17.5 17.8Z"
                      fill="#FF9B05"
                    />
                  </svg>
                  Pending Orders
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/completedorders"
                  className="flex items-center gap-5 font-semibold hover:text-[#0B8D5E] focus:text-[#0B8D5E]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.1333 3 19.2583 3.0125 19.375 3.0375C19.4917 3.0625 19.6083 3.1 19.725 3.15L17.875 5H5V19H19V12.35L21 10.35V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM11.525 17L5.875 11.35L7.275 9.95L11.525 14.2L20.7 5.025L22.125 6.4L11.525 17Z"
                      fill="#0B8D5E"
                    />
                  </svg>
                  Completed Orders
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
                <Link
                  to="notification"
                  className="flex items-center gap-5 font-semibold hover:text-[#16A9D8] focus:text-[#16A9D8] "
                >
                  <span className="material-icons text-[#16A9D8]">
                    notifications
                  </span>
                  Notifications
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Sidebar;
