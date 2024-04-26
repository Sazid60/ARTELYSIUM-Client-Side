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
import DetailsArtCard from "../Pages/DetailsArtCard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement :<ErrorPage></ErrorPage>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
            loader :()=> fetch('http://localhost:5000/craftArts')
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
            loader :()=> fetch('http://localhost:5000/craftArts')
        },
        {
            path: "/craftArts/:id",
            element: <DetailsArtCard></DetailsArtCard>,
            loader :({params})=> fetch(`http://localhost:5000/craftArts/${params.id}`)
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