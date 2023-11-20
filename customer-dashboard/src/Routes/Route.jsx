import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MyProfile from "../Pages/Profile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/profile",
        element: <MyProfile/>
      },
     
    ],
  },
]);
