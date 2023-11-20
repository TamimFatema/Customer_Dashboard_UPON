// src/App.js
import React from "react";
import Sidebar from "./Pages/Sidebar/Sidebar";
import MyProfile from "./Pages/Profile/MyProfile";
import Order from "./Pages/Order/Order";
import Wishlist from "./Pages/Wishlist/Wishlist";
import EditPersonalDetails from "./Pages/Profile/EditPersonalDetails";

function App() {
  return (
    <div className="flex gap-4 bg-gray-200">
      <Sidebar />
      {/* Add the rest of your content here */}
      <MyProfile />
      {/* <Order /> */}
      {/* <Wishlist /> */}
      {/* <EditPersonalDetails /> */}
    </div>
  );
}

export default App;
