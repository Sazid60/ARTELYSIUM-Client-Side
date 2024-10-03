import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext)

    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const activeLink = "text-[#CFAE7A] font-bold underline underline-offset-8 text-base flex items-center gap-1";
    const deActiveLink = "transition-all hover:underline underline-offset-8 hover:text-orange-200 flex items-center gap-1";

    const navLinks = <>
        <li className="mr-2">
            <NavLink
                className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/"}>
                Home
            </NavLink></li>

        <li className="mr-2">
            <NavLink className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/allItems"}>
                All Arts & Crafts
            </NavLink>
        </li>

        <li className="mr-2">
            <NavLink className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/addItems"}>
                Add Arts & Crafts
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) => (isActive ? activeLink : deActiveLink)} to={"/myItems"}>
                My Arts & Crafts
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-amber-200/20 backdrop-blur-lg lg:px-6 py-0 fixed z-20 ">
            <div className="navbar-start">
                <div className="flex justify-center items-center">
                    <div className="dropdown z-30 mt-1">
                        <div tabIndex={0} role="button" className="btn btn-xs btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={"/"} className="font-bold text-xl md:text-3xl lg:text-4xl flex justify-center items-center ">
                        ARTELYSIUM
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-3 px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                                <img className="h-7 w-7 md:h-8 md:w-8 xl:h-10 xl:w-10 border rounded-full " src={user.photoURL || "/Capture.PNG"} alt="" />
                            </div>
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleSignOut} className="btn btn-xs md:btn-sm lg:btn-sm bg-[#CFAE7A] rounded-none hover:bg-yellow-700 text-white">Logout</button>
                        </div>
                        : <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content="No Image" data-tooltip-place="left">
                                <img className="rounded-full h-7 w-7 md:h-8 md:w-8 xl:h-10 xl:w-10 border" src="/Capture.PNG" alt="" />
                            </div><Tooltip id="my-tooltip" />
                            <div className="flex">
                                <NavLink
                                    className="btn btn-xs md:btn-sm lg:btn-sm text-white bg-[#CFAE7A] rounded-none hover:bg-yellow-700" to={"/login"}>
                                    Login
                                </NavLink>
                                <NavLink
                                    className="btn btn-xs md:btn-sm lg:btn-sm text-white bg-[#CFAE7A] rounded-none hover:bg-yellow-700" to={"/register"}>
                                    Register
                                </NavLink>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;