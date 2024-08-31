
import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Services from "../Services/Services";
import Service from "../../components/Service/Service";



const Home = () => {
     // const data = useLoaderData();
     // // console.log(data)

     return (
          <div className="max-w-7xl lg:px-0 md:px-10 px-4  mx-auto">
               <Slider ></Slider>
               <Services ></Services>

          </div>
     );
};

export default Home;