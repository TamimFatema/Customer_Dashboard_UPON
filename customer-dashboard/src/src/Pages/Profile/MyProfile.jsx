import React from "react";

function MyProfile() {
  return (
    <div className="flex flex-col mx-auto lg:mx-0 gap-4 w-full md:w-[750px]">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-4 font-medium">
          <div className="flex flex-col flex-grow items-center p-2 lg:p-3 gap-2 rounded-lg border-2 border-amber-400">
            <p>1</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400">
                deployed_code_history
              </span>
              Pending Orders
            </div>
          </div>
          <div className="flex flex-col flex-grow items-center p-2 lg:p-3 gap-2 rounded-lg border-2 border-green-400">
            <p>1</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">select_check_box</span>
              Completed Orders
            </div>
          </div>
          <div className="flex flex-col flex-grow items-center p-2 lg:p-3 gap-2 rounded-lg border-2 border-red-300">
            <p>10</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-red-300">award_star</span>
              Loyalty Points
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-purple-100 rounded-lg p-4">
          <div className="flex justify-between">
            <h6 className="font-medium">Personal Details</h6>
            <button className="flex items-center sm:whitespace-nowrap gap-2 text-white text-sm bg-purple-800 py-2 px-4 rounded-lg">
              Edit Profile <span className="material-symbols-outlined text-lg">edit</span>
            </button>
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

      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-between">
          <h6 className="font-medium">My Adddress</h6>
          <button className="flex items-center gap-2 text-white text-sm bg-purple-800 py-2 px-4 rounded-lg">
            Add Address <span className="material-icons text-lg">fmd_good</span>
          </button>
        </div>
        <div className="mt-2 border-2 rounded-lg w-full sm:w-1/2">
          <div className="flex items-center justify-between bg-purple-300 p-2 rounded-t-lg">
            <span className="font-medium">Home (Shipping Address)</span>
            <div className="flex gap-2">
              <span className="text-blue-600 material-symbols-outlined">
                edit_location
              </span>
              <span className="text-red-500 material-symbols-outlined">
                delete
              </span>
            </div>
          </div>
          <div className="p-2">
            <p>Office: 6, Level:6,</p>
            <p>Rupayan Trade Center,</p>
            <p>Bangla Motor, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
