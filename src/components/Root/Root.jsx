import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Navbar/Navbar";


const Root = () => {
     return (
          <div >
               <Navbar></Navbar>

               <Outlet className="max-w-7xl mx-auto"></Outlet>
          </div>
     );
};

export default Root;