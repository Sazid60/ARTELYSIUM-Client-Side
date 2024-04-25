import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext)
    console.log("Nav",user)
    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const links = <>
    <li className="mr-2"><NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#FFECB3]' : 'btn btn-sm bg-transparent border-0'} to={"/"}>Home</NavLink></li>

    <li className="mr-2"><NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#FFECB3]' : 'btn btn-sm bg-transparent border-0'} to={"/allItems"}>All Craft Items</NavLink></li>

    <li className="mr-2"><NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#FFECB3]' : 'btn btn-sm bg-transparent border-0'} to={"/addItems"}>Add Craft Items</NavLink></li>

    <li><NavLink  className={({ isActive }) => isActive ? 'btn btn-sm bg-[#FFECB3]' : 'btn btn-sm bg-transparent border-0'} to={"/myItems"}>My Arts & Craft Items</NavLink></li>
</>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={"/"} className="text-2xl md:text-3xl lg:text-4xl font-bold">ArtElysium</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border" src={user.photoURL || "/Capture.PNG"} alt="" />
                            </div>
                            <button onClick={handleSignOut} className="btn btn-sm bg-[#E1B453] hover:bg-slate-500 text-white">Logout</button>

                        </div>
                        : <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div className="tooltip tooltip-left" data-tip="No Image">
                                <img className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border" src="/Capture.PNG" alt="" />
                            </div>
                            <div className="flex">
                                <NavLink
                                    className="btn btn-sm bg-[#E1B453] hover:bg-slate-500 text-white" to={"/login"}>
                                    Login
                                </NavLink>
                                <NavLink
                                    className="btn btn-sm bg-[#E1B453] hover:bg-slate-500 text-white" to={"/register"}>
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