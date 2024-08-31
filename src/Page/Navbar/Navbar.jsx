import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

     const link = < >
          <li className="font-medium"><NavLink to={"/"}>Home</NavLink></li>
          <li className="font-medium"><NavLink to={"/services"}>Services</NavLink></li>
          <li className="font-medium"><NavLink to={"/details"}>Details</NavLink></li>
          <li className="font-medium"><NavLink to={"/rating"}>Rating</NavLink></li>
          <li className="font-medium"><NavLink to={"/location"}>Location</NavLink></li>


     </>
     return (
          <div className="navbar bg-slate-900 md:px-10  py-3">
               <div className="navbar-start">
                    <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-5 w-5"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   stroke="currentColor">
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                              </svg>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                              {link}
                         </ul>
                    </div>
                    <h1 className="md:text-2xl  font-bold text-red-600">SOCIAL EVENT</h1>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {link}
                    </ul>
               </div>
               <div className="navbar-end">
                    <Link to={"login"}>
                         <button className="btn font-medium btn-info">Login</button>
                    </Link>
               </div>
          </div>
     );
};

export default Navbar;