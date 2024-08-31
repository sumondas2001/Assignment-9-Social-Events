import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";


const Services = () => {
     const data = useLoaderData();
     console.log(data)

     return (
          <div id="aaaa">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-14 gap-8 max-w-7xl mx-auto">
                    {
                         data?.map(service => <Service key={service.id} service={service}></Service>)
                    }
               </div>

          </div>
     );
};

export default Services;