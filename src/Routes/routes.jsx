import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/Shared/Error/ErrorPage";
import SarvicesDetails from "../components/Pages/Home/Services/Details/SarvicesDetails";
import AboutUs from "../components/Pages/AboutUs/AboutUs/AboutUs";
import ContactFrom from "../components/Pages/Contact/Contact";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Singup/Signup";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <SarvicesDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://agency-server-ten.vercel.app/services/${params.id}`),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/contact",
        element: <ContactFrom />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
