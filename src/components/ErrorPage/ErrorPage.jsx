import { Link } from "react-router-dom";


const ErrorPage = () => {


     return (
          <div className="flex items-center justify-center h-svh">
               <div className="text-center">
                    <h1 className="text-7xl font-bold text-red-500 mb-6">440</h1>
                    <h1 className="text-xl text-blue-700 mb-6 font-bold">Not Found</h1>
                    <h1 className="text-xl font-bold">Sorry,we main or choose from category below</h1>
                    <Link to={"/"}>
                         <button className="btn btn-warning mt-6 text-lg ">Back</button>
                    </Link>

               </div>
          </div >
     );
};

export default ErrorPage;