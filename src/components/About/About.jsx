import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { GrSecure } from "react-icons/gr";
import { MdAddAPhoto } from "react-icons/md";
const About = () => {
     useEffect(() => {
          AOS.init();
     }, [])
     return (
          <div data-aos="zoom-in-up" className="  mt-10 text-center bg-slate-900 md:px-20 lg:px-20 px-4 py-10">

               <h1 className="text-5xl font-bold mb-8 text-red-500">About Us</h1>
               <p className="font-medium">Welcome to Social Event Management, where we believe every event is an opportunity to create unforgettable memories. Our passion is bringing people together to celebrate life special moments, whether its a wedding, corporate gathering, birthday party, or community festival.</p>

               <div className=" flex mt-10 justify-center">
                    <img className="md:w-96 w-72 rounded-xl" src={"https://i.imghippo.com/files/TbJmO1725132830.jpg"} alt="" />
               </div>

               <div className="flex justify-center  gap-20 mt-14 mb-6">

                    <div>
                         <MdAddAPhoto
                              className="text-center text-5xl mb-1 mx-auto" />
                         <h4 className="text-xl font-normal">PHOTO SHOOT </h4>
                    </div>
                    <div>
                         <GrSecure className="text-center text-5xl mb-1 mx-auto" />
                         <h4 className="text-xl font-normal">  SECURITY</h4>
                    </div>


               </div>
          </div>
     );
};

export default About;