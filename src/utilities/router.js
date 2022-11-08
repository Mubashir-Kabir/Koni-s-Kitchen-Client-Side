import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import Blogs from "../pages/Blogs";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "services",
        loader: () =>
          fetch("https://koni-s-kitchen-server-side.vercel.app/services"),
        element: <Services></Services>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
      {
        path: "my-reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "log-in",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "services/:id",
        loader: ({ params }) =>
          fetch(
            `https://koni-s-kitchen-server-side.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);

export default router;
