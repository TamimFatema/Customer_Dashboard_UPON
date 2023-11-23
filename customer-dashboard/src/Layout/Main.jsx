import { Outlet } from "react-router-dom";
// import Header from "../Shared/Header/Header";
// import Footer from "../Shared/Footer/Footer";
import Sidebar from "../Pages/Sidebar/Sidebar";

const Main = () => {
  return (

    <>
      {/* <Header /> */}
      <div className="flex flex-col lg:flex-row justify-center px-3 md:px-0 gap-4 bg-gray-200 pt-5 pb-20">
        <Sidebar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
