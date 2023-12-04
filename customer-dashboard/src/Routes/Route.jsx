import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MyProfile from "../Pages/Profile/MyProfile";
import EditPersonalDetails from "../Pages/Profile/EditPersonalDetails";
import Order from "../Pages/Order/Order";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Inbox from "../Pages/Inbox/Inbox";
import AddAddress from "../Pages/Address/AddAddress";
import Notification from "../Pages/Notification/Notification";
import PendingOrders from "../Pages/Order/PendingOrders";
import CompletedOrders from "../Pages/Order/CompletedOrders";
import EditAddress from "../Pages/Address/EditAddress";

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
        path: "/profile/editprofile",
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
      {
        path: "/profile/addaddress",
        element: <AddAddress />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/pendingorders",
        element: <PendingOrders />,
      },
      {
        path: "/completedorders",
        element: <CompletedOrders />,
      },
      {
        path: "/profile/editaddress",
        element: <EditAddress />,
      },
    ],
  },
]);
