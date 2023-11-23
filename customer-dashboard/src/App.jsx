// src/App.js
import React from "react";
import Sidebar from "./Pages/Sidebar/Sidebar";
import MyProfile from "./Pages/Profile/MyProfile";
import Order from "./Pages/Order/Order";
import Wishlist from "./Pages/Wishlist/Wishlist";
import EditPersonalDetails from "./Pages/Profile/EditPersonalDetails";
import Inbox from "./Pages/Inbox/Inbox";
import AddAddress from "./Pages/Address/AddAddress";

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col lg:flex-row justify-center px-3 md:px-0 gap-4 bg-gray-200 pt-5 pb-20">
        <Sidebar />
        {/* Add the rest of your content here */}
        {/* <MyProfile /> */}
        {/* <Order /> */}
        {/* <Wishlist /> */}
        {/* <EditPersonalDetails /> */}
        {/* <Inbox /> */}
        <AddAddress />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
