import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MyProfile from "../Pages/Profile/MyProfile";
import EditPersonalDetails from "../Pages/Profile/EditPersonalDetails";
import Order from "../Pages/Order/Order";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Inbox from "../Pages/Inbox/Inbox";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/editprofile",
        element: <EditPersonalDetails />,
      },
      {
        path: "/myorders",
        element: <Order />,
      },
      {
        path: "/mywishlist",
        element: <Wishlist />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
    ],
  },
]);
