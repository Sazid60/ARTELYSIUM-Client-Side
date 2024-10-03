import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="font-teko">
            <div className=' '>
                <Navbar></Navbar>
                <div className='  px-5'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false} />
        </div>
    );
};

export default MainLayout;