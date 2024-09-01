import { Link } from "react-router-dom";
import Social from "../../components/Social/Social";
import { useContext } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
     const { userSingIn } = useContext(AuthContext);
     const handelLogin = e => {
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;

          userSingIn(email, password)
               .then(result => {
                    toast.success('Login Successfully!');
                    console.log(result.user)
               })
               .catch(error => {
                    console.log(error.message);
                    toast.error(error.message)
               })

     }
     return (

          <div className="hero bg-base-200 min-h-screen ">
               <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div className="text-center ">
                         <h1 className="text-5xl font-bold">Login Now!</h1>
                         <p className="mt-6 w-96 text-xl font-bold text-red-500">
                              SOCIAL EVENTS MANAGEMENT
                         </p>
                    </div>
                    <div className="card bg-slate-900 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelLogin} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-error">Login</button>
                              </div>
                              <div className="flex items-center justify-between px-4">
                                   <p className="font-medium">New here?</p>
                                   <Link to={"/register"}>
                                        <p className="text-lg font-bold text-blue-600 underline">Create an account</p>
                                   </Link>
                              </div>
                         </form>

                         <Social></Social>
                    </div>
               </div>
          </div>

     );
};

export default Login;