import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
     return (
          <div >
               <Navbar></Navbar>
               <div className="max-w-7xl mx-auto">
                    <Outlet ></Outlet>
               </div>
               <Footer></Footer>
               <Toaster />
          </div>
     );
};

export default Root;