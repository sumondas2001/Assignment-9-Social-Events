import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Service = ({ SingleService }) => {
     useEffect(() => {
          AOS.init();
     }, [])

     const { name, img, price, tital, id } = SingleService;
     return (
          <div data-aos="zoom-in-up" data-aos-duration="1000">
               <div className=" bg-slate-900 p-6 rounded-lg">
                    <img className="mb-4" src={img} alt="" />
                    <h1 className="text-2xl font-bold mb-4 text-pink-600">{name}</h1>
                    <div className="font-medium mb-4">
                         {
                              tital.length > 190 ? <p>{tital.slice(0, 190)}

                              </p> : <p>{tital}</p>
                         }
                    </div>
                    <p className="text-xl font-medium mb-8">Price: <span className="text-2xl font-bold"> {price} $</span></p>

                    <div>
                         <Link to={`/service/${id}`}>
                              <button className="btn btn-error w-full font-bold mb-4">Details</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Service;

Service.propTypes = {
     SingleService: PropTypes.object
}