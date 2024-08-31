
import { useLoaderData, useParams } from "react-router-dom";


const ServicesDetails = () => {
     const { id } = useParams();
     const allData = useLoaderData();
     const data = allData.find(data => data.id == id);
     const { name, description_img, price, description_tital } = data

     return (

          <div className="mt-8 max-w-7xl  px-4 mx-auto " >

               <img className=" w-full h-96" src={description_img} alt="" />
               <h1 className="text-2xl font-bold mt-4 text-red-500">{name}</h1>
               <p className="text-xl font-medium mb-8 mt-4">Price: <span className="text-2xl font-bold"> {price} $</span></p>
               <p className="mb-10 5 font-medium">{description_tital}</p>
               <div className="text-center ">
                    <button className="btn w-96   btn-error font-bold mb-4">Booking</button>
               </div>
          </div >
     );
};

export default ServicesDetails;