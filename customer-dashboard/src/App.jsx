// src/App.js
import React from "react";
import Sidebar from "./Pages/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      {/* Add the rest of your content here */}
      <div className="flex-1 p-4">
      </div>
    </div>
  );
}

export default App;
