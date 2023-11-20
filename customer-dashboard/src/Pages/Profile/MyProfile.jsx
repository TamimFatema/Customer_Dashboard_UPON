import React from "react";

function MyProfile() {
  return (
    <div className="flex flex-col gap-4 w-[1000px]">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg">
        <div className="flex gap-4 font-medium">
          <div className="flex flex-col flex-grow items-center p-3 gap-2 rounded-lg border-2 border-amber-400">
            <p>1</p>
            <p>
              <span class="material-symbols-outlined">
                deployed_code_history
              </span>
              Pending Orders
            </p>
          </div>
          <div className="flex flex-col flex-grow items-center p-3 gap-2 rounded-lg border-2 border-amber-400">
            <p>1</p>
            <p>
              <span class="material-symbols-outlined">select_check_box</span>
              Completed Orders
            </p>
          </div>
          <div className="flex flex-col flex-grow items-center p-3 gap-2 rounded-lg border-2 border-amber-400">
            <p>10</p>
            <p>
              <span class="material-symbols-outlined">award_star</span>
              Loyalty Points
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-purple-100 rounded-lg p-4">
          <div className="flex justify-between">
            <h6 className="font-medium">Personal Details</h6>
            <button className="text-white bg-purple-800 py-2 px-4 rounded-lg">
              Edit Profile <span class="material-symbols-outlined">edit</span>
            </button>
          </div>
          <p className="text-gray-500">
            Name: <span className="text-black">Mosraful Habib</span>
          </p>
          <p className="text-gray-500">
            Phone: <span className="text-black">01423698412</span>
          </p>
          <p className="text-gray-500">
            Email: <span className="text-black">habib@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-between">
          <h6 className="font-medium">My Adddress</h6>
          <button className="text-white bg-purple-800 py-2 px-4 rounded-lg">
            Add Address <span class="material-icons">fmd_good</span>
          </button>
        </div>
        <div className="border-2 rounded-lg w-1/2">
          <div className="flex items-center justify-between bg-purple-300 p-2 rounded-t-lg">
            <span className="font-medium">Home (Shipping Address)</span>
            <span>(Icon)</span>
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
