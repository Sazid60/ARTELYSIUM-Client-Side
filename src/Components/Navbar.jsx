import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

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
    const navLinks = <>
        <li className="mr-2">
            <NavLink
                className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm'} to={"/"}>
                Home
            </NavLink></li>

        <li className="mr-2">
            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm'} to={"/allItems"}>
                All Craft Items
            </NavLink>
        </li>

        <li className="mr-2">
            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm'} to={"/addItems"}>
                Add Craft Items
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm'} to={"/myItems"}>
                My Arts & Craft Items
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar px-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={"/"} className="font-bold text-2xl md:text-3xl lg:text-4xl ">ArtElysium</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                                <img className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border rounded-full " src={user.photoURL || "/Capture.PNG"} alt="" />
                            </div>
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleSignOut} className="btn btn-sm bg-[#333333] hover:bg-slate-500 text-white">Logout</button>
                        </div>
                        : <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content="No Image" data-tooltip-place="left">
                                <img className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border" src="/Capture.PNG" alt="" />
                            </div>
                            <div className="flex">
                                <NavLink
                                    className="btn btn-sm text-white bg-[#333333] hover:bg-slate-400" to={"/login"}>
                                    Login
                                </NavLink>
                                <NavLink
                                    className="btn btn-sm text-white bg-[#333333] hover:bg-slate-400" to={"/register"}>
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