import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyProfile() {
  const [isAddressDeleted, setIsAddressDeleted] = useState(false);

  const handleDeleteAddress = () => {
   
    console.log("Address deleted!");
    setIsAddressDeleted(true);
  };

  return (
    <div className="flex flex-col mx-auto lg:mx-0 gap-4 w-full md:w-[750px]">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg  shadow-md shadow-purple-300/100">
        <div className="flex flex-col sm:flex-row gap-4 font-medium">
          <Link to="/pendingorders">
            <div className="flex flex-col flex-grow items-center p-2 lg:p-3 gap-2 rounded-lg shadow-md border border-amber-300 shadow-amber-200/75">
              <p className="text-xl font-semibold">1</p>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <span className="material-symbols-outlined text-amber-400">
                  deployed_code_history
                </span>
                Pending Orders
              </div>
            </div>
          </Link>
          <Link to="/completedorders">
            <div className="flex flex-col flex-grow items-center p-2 lg:p-3 gap-2 rounded-lg shadow-md border border-green-400 shadow-green-300/95">
              <p className="text-xl font-semibold">1</p>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <span className="material-symbols-outlined text-green-400">
                  select_check_box
                </span>
                Completed Orders
              </div>
            </div>
          </Link>
          <div className="flex flex-col flex-grow items-center p-2 lg:p-3 gap-2 rounded-lg shadow-md border border-red-300 shadow-red-200/100">
            <p className="text-xl font-semibold">10</p>
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="material-symbols-outlined text-pink-500">
                award_star
              </span>
              Loyalty Points
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#F8F5FF] rounded-lg p-4">
          <div className="flex justify-between">
            <h6 className="font-semibold text-md">Personal Details</h6>
            <Link
              to="/profile/editprofile"
              className="flex items-center sm:whitespace-nowrap gap-4 text-white text-md font-semibold bg-[#5709BB] py-2 px-6 rounded-lg"
            >
              Edit Profile{" "}
              <span className="material-symbols-outlined border rounded-lg">
                edit
              </span>
            </Link>
          </div>
          <p className="text-gray-500 my-1">
            Name: <span className="text-black">Mosraful Habib</span>
          </p>
          <p className="text-gray-500 my-1">
            Phone: <span className="text-black">01423698412</span>
          </p>
          <p className="text-gray-500 my-1">
            Email: <span className="text-black">habib@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md shadow-purple-300/100">
        <div className="flex justify-between">
          <h6 className="font-semibold text-lg">My Address</h6>
          <Link
            to="/profile/addaddress"
            className="flex items-center gap-2 text-white text-md font-semibold bg-[#5709BB] py-2 px-6 rounded-lg"
          >
            Add Address
            <span className="material-icons text-lg">fmd_good</span>
          </Link>
        </div>

        {/* Conditionally render the address based on the delete state */}
        {!isAddressDeleted && (
          <div className="mt-2 border-2 rounded-lg shadow-md w-full sm:w-1/2">
            <div className="flex items-center justify-between bg-[#E0D3FE80] p-2 rounded-t-lg">
              <span className="font-semibold">Home (Shipping Address)</span>
              <div className="flex gap-2">
                <Link to="/profile/editaddress">
                  <span className="text-[#134EA3] material-symbols-outlined">
                    edit_location
                  </span>
                </Link>

                <a href="#">
                  <span
                    className="text-red-500 material-symbols-outlined"
                    onClick={handleDeleteAddress}
                  >
                    delete
                  </span>
                </a>
              </div>
            </div>
            <div className="p-2">
              <p>Office: 6, Level:6,</p>
              <p>Rupayan Trade Center,</p>
              <p>Bangla Motor, Dhaka</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
