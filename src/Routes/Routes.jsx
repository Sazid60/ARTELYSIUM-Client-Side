import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllItems from "../Pages/AllItems";
import PrivateRoutes from "./PrivateRoutes";
import AddItems from "../Pages/AddItems";
import MyItems from "../Pages/MyItems";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement :<ErrorPage></ErrorPage>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },


        {
            path: "/allItems",
            element: <AllItems></AllItems>,
        },
        {
            path: "/addItems",
            element: <PrivateRoutes><AddItems></AddItems></PrivateRoutes>,
        },
        {
            path: "/myItems",
            element: <PrivateRoutes><MyItems></MyItems></PrivateRoutes>,
        },
      ]
    },
  ]);

export default router ;