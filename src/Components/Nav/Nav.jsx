import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ThemController from "../ThemController/ThemController";


const Nav = () => {
     const links =<>
         <NavLink className='hover:text-blue-400 ' to="/" >Home</NavLink>
         <NavLink className='hover:text-blue-400 '  to="coffes" >Coffes</NavLink>
         <NavLink className='hover:text-blue-400 '  to="dashboard" >Dashboard</NavLink>
    </>
    return (

        <div className="sticky top-0 z-30   navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-xl gird gap-3 menu duration-1000 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className=" btn-ghost text-xl md:text-2xl font-bold">Coffee Book</a>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu text-xl menu-horizontal px-1 flex gap-5 items-center ">
                 {
                 links
                 }
                </ul>
            </div>
            <ThemController></ThemController>
            
        </div>
    )
};

export default Nav;