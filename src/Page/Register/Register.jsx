import { Link } from "react-router-dom";
import Social from "../../components/Social/Social";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
     const [error, setError] = useState('')
     const { creteUser } = useContext(AuthContext);

     const handelRegister = e => {
          e.preventDefault();
          // const name = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;


          if (!/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
               setError('Minimum six characters, at least one uppercase letter,  at At least one special character, ')

          }
          else {
               creteUser(email, password)
                    .then(() => {
                         toast.success("Register Successfully !!")
                    })
                    .catch(error => {
                         const errorMessage = error.message;
                         setError(errorMessage)
                         toast.error(errorMessage)
                    })

          }
     }

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
                         <form onSubmit={handelRegister} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Your Name</span>
                                   </label>
                                   <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Your Email</span>
                                   </label>
                                   <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" name="password" required />

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
                         <p className="text-xs text-red-600 px-2">{error}</p>

                         <Social></Social>
                    </div>
               </div>
          </div>
     );
};

export default Register;