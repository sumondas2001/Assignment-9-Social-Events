import { FaRegStar } from "react-icons/fa";

import { IoMdStar } from "react-icons/io";

const Rating = () => {
     return (
          <div className="md:flex md:gap-10  mt-16 mb-16 px-10">
               <div className="mb-10">
                    <div className="flex justify-center">
                         <img className="size-28 mb-4 rounded-full" src={"https://i.imghippo.com/files/3Woq91725219813.jpg"} alt="" />
                    </div>
                    <p className="text-xl font-bold mb-2 text-center">Sophia L.</p>
                    <div className="flex text-2xl justify-center text-red-600 mb-2">
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />

                    </div>
                    <p className="font-medium text-sm text-center">An absolutely amazing experience! The team went above and beyond to make sure everything was perfect. Our guests were blown away, and we couldn’t have asked for a better event!</p>
               </div>
               <div className="mb-10" >
                    <div className="flex justify-center">
                         <img className="size-28 mb-4 rounded-full" src={"https://i.imghippo.com/files/HN4Xs1725219718.jpg"} alt="" />
                    </div>
                    <p className="text-xl font-bold mb-2 text-center">Emily R.</p>
                    <div className="flex text-2xl justify-center text-red-600 mb-2">
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />

                    </div>
                    <p className="font-medium text-sm text-center">From start to finish, the planning process was seamless. The attention to detail was incredible, and the team truly captured our vision. Highly recommend!</p>
               </div>
               <div className="mb-10">
                    <div className="flex justify-center">
                         <img className="size-28 mb-4 rounded-full" src={"https://i.imghippo.com/files/hPcW01725219780.jpg"} alt="" />
                    </div>
                    <p className="text-xl font-bold mb-2 text-center">James M.</p>
                    <div className="flex text-2xl justify-center text-red-600 mb-2">
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />
                         <IoMdStar />
                         <FaRegStar />
                    </div>
                    <p className="font-medium text-sm text-center">This was the best event we have ever hosted! The creativity and professionalism of the team made it a memorable day for everyone involved. Thank you for making it so special!</p>
               </div>

          </div>
     );
};

export default Rating;