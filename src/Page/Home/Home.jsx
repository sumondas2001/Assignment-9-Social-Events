
import About from "../../components/About/About";
import Slider from "../../components/Slider/Slider";
import Services from "../Services/Services";



const Home = () => {
     // const data = useLoaderData();
     // // console.log(data)

     return (
          <div className="max-w-7xl lg:px-0 md:px-10 px-4  mx-auto">
               <Slider ></Slider>
               <Services ></Services>
               <About></About>

          </div>
     );
};

export default Home;