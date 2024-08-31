import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home";
import Services from "../../Page/Services/Services";
import ServicesDetails from "../../Page/ServicesDetails/ServicesDetails";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Root></Root>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch("/data.json")
               },
               {
                    path: "/services",
                    element: <Services></Services>,
                    loader: () => fetch("/data.json"),


               },
               {
                    path: "/service/:id",
                    element: <ServicesDetails></ServicesDetails>,
                    loader: () => fetch("/data.json"),
               }
          ]
     }
])

export default router;