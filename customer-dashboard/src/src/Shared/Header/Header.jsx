import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import Categories from "./Categories";

const navLink = (
  <>
    <Categories />
  </>
);
const menuItem = (
  <>
    <li className="font-bold">
      <a href="/">Home</a>
    </li>
    <li className="font-bold">
      <a href="/products">Products</a>
    </li>
    <li className="font-bold">
      <a href="">Deals</a>
    </li>
  </>
);

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };
  const closeNavMenu = () => {
    setIsNavMenuOpen(false);
  };

  // top banner
  const [topBanner, setTopBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setTopBanner(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {topBanner.map((item, index) => (
              <div key={index}>
                <img src={item?.image} alt="" className="w-full h-auto" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-300">
        <div className="mainContainer flex items-center justify-between py-2 px-1">
          <a href="/" className="text-[#5709BB] underline font-semibold">
            Become a Seller
          </a>
          <a
            href="/ordertrack"
            className="font-semibold flex items-center gap-1"
          >
            <span className="material-symbols-outlined">local_shipping</span>
            Track my Order
          </a>
        </div>
      </div>

      <div className="bg-white">
        <div className="mainContainer flex items-center justify-between gap-2 p-1">
          <a href="/">
            <img src={logo} alt="" className="w-28" />
          </a>
          <div className="flex items-center rounded-md">
            <input
              type="text"
              name="text"
              className=" md:w-[350px] w-full outline-none border-y border-l focus:border-purple-500 md:p-1 p-0.5 px-2"
              placeholder="Search in Upon"
            />
            <button className="md:px-4 px-2 -ml-1.5 bg-[#5709BB] text-white rounded-r-md outline-none">
              <span className="material-symbols-outlined pt-1 md:text-xl text-base">
                search
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a href="">
              <span className="material-symbols-outlined">favorite</span>
            </a>
            <a href="/cart" className="relative">
              <span className="material-symbols-outlined">shopping_cart</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-[#D8D0EC]">
        <div className="mainContainer">
          {/* Display menu items */}
          <div className="md:block flex items-center justify-between text-black px-1">
            {/* Toggle button for small devices */}
            <div>
              <button
                className=" text-2xl cursor-pointer md:hidden"
                onClick={toggleNavMenu}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="hidden md:block">
                <ul className="flex space-x-1">
                  <li className="category-link">
                    <p className="cursor-pointer flex items-center gap-1 px-10 py-2">
                      <span className="material-symbols-outlined">
                        category
                      </span>
                      Category
                      <span className="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                    </p>
                    <ul className="item-list">
                      <li>{navLink}</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="hidden md:block">
                <ul className="flex space-x-4">{menuItem}</ul>
              </div>
              <div>
                <ul>
                  <li className="flex items-center space-x-1">
                    <a href="/login" className="flex items-center">
                      <span className="material-symbols-outlined">login</span>
                      Login
                    </a>
                    <span className="text-2xl mb-1">/</span>
                    <a href="/signup">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation menu for small devices */}
          {isNavMenuOpen && (
            <div className="fixed top-0 left-0 text-center bg-slate-200 font-semibold w-4/5 h-screen p-5 z-10">
              <button
                className="absolute top-4 right-6 text-2xl cursor-pointer p-1"
                onClick={closeNavMenu}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <ul className="flex flex-col mt-8 space-y-5">{menuItem}</ul>
              <ul className="flex flex-col mt-8 space-y-5">{navLink}</ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
