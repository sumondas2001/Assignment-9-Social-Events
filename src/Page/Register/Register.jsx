import { Link } from "react-router-dom";
import Social from "../../components/Social/Social";

const Register = () => {
     return (

          <div className="hero bg-base-200 min-h-screen ">
               <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div className="text-center ">
                         <h1 className="text-5xl font-bold">Register Now!</h1>
                         <p className="mt-6 w-96 text-xl font-bold text-red-500">
                              SOCIAL EVENTS MANAGEMENT
                         </p>
                    </div>
                    <div className="card bg-slate-900 w-full max-w-sm shrink-0 shadow-2xl">
                         <form className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Your Name</span>
                                   </label>
                                   <input type="text" placeholder="Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Your Email</span>
                                   </label>
                                   <input type="email" placeholder="Email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" required />

                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-accent">Register</button>
                              </div>
                              <div className="flex items-center justify-between px-4">
                                   <p className="font-medium">Have An Account ?</p>
                                   <Link to={"/login"}>
                                        <p className="text-lg font-bold text-blue-600 underline">Please Login</p>
                                   </Link>
                              </div>
                         </form>

                         <Social></Social>
                    </div>
               </div>
          </div>
     );
};

export default Register;