import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Main = () => {
  return (

    <>
      <div className="flex flex-col lg:flex-row justify-center px-3 md:px-0 gap-4 bg-gray-200 pt-5 pb-20">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Main;
