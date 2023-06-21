import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/Shared/Error/ErrorPage";
import SarvicesDetails from "../components/Pages/Home/Services/Details/SarvicesDetails";
import AboutUs from "../components/Pages/AboutUs/AboutUs/AboutUs";
import ContactFrom from "../components/Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <SarvicesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/contact",
        element: <ContactFrom />,
      },
    ],
  },
]);
export default router;
