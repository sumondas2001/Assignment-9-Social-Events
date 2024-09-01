import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";


const Social = () => {
     const { googleLogin } = useContext(AuthContext);

     const handelGoogleLogin = () => {
          googleLogin()
               .then(() => {
                    toast.success('Login Successfully')

               })
               .catch(error => {
                    toast.error(error.message)
               })
     }
     return (
          <div className="mb-10">
               <h2 className="text-xl font-bold text-center ">Continue With</h2>

               <div className="flex justify-center gap-6 mt-4">
                    <button onClick={handelGoogleLogin} className="btn text-lg font-semibold hover:bg-emerald-500 hover:text-black ">Google</button>

               </div>
          </div>
     );
};

export default Social;