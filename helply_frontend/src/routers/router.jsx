import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import { UploadOpportunities } from "../pages/UploadOpportunities";
import { ViewSingleOpportunities } from "../pages/ViewSingleOpportunities ";
import { VolunteerDirectory } from "../pages/VolunteerDirectory";
import { BloodDonors } from "../pages/BloodDonors";
import AboutPage from "../pages/AboutPage";
import RegistrationForm from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/uploadopportunities",
        element: <UploadOpportunities />,
      },
      {
        path: "/viewsingleopportunities",
        element: <ViewSingleOpportunities />,
      },
      {
        path: "/volunteerdirectory",
        element: <VolunteerDirectory />,
      },
      {
        path: "/blooddonors",
        element: <BloodDonors />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
    ],
  },
]);

export default router;
