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
import UpdateArtItem from "../Pages/UpdateArtItem";
import CategorizedData from "../Pages/CategorizedData";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement :<ErrorPage></ErrorPage>,
      children :[
        {
            path: "/",
            element: <Home></Home>,
            loader :()=> fetch('https://art-elysium-server-b9-a10.vercel.app/craftArts')
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
            loader :()=> fetch('https://art-elysium-server-b9-a10.vercel.app/craftArts')
        },
        {
            path: "/craftArts/:id",
            element: <PrivateRoutes><DetailsArtCard></DetailsArtCard></PrivateRoutes>,
            loader :({params})=> fetch(`https://art-elysium-server-b9-a10.vercel.app/craftArts/${params.id}`)
        },
        {
            path: "/craftArtsUpdate/:id",
            element: <PrivateRoutes><UpdateArtItem></UpdateArtItem></PrivateRoutes>,
            loader :({params})=> fetch(`https://art-elysium-server-b9-a10.vercel.app/craftArts/${params.id}`)
        },
        {
            path: "/addItems",
            element: <PrivateRoutes><AddItems></AddItems></PrivateRoutes>,
        },
        {
            path: "/myItems",
            element: <PrivateRoutes><MyItems></MyItems></PrivateRoutes>,
        },
        {
            path: "/categorizedData/:id",
            element: <CategorizedData></CategorizedData>,
            loader : ({params})=> fetch(`https://art-elysium-server-b9-a10.vercel.app/categorizedData/${params.id}`)
        },
      ]
    },
  ]);

export default router ;