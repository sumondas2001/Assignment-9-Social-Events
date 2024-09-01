import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";


const Services = () => {
     const data = useLoaderData();


     return (
          <div >
               <h1 className="text-2xl font-bold mt-6 mb-6 underline">Services</h1>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-8 max-w-7xl mx-auto">
                    {
                         data?.map(SingleService => <Service key={SingleService.id} SingleService={SingleService}></Service>)
                    }
               </div>

          </div>
     );
};

export default Services;