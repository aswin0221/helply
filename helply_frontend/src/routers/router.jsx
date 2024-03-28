import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import { UploadOpportunities } from "../pages/UploadOpportunities";
import { ViewSingleOpportunities } from "../pages/ViewSingleOpportunities ";

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
        path: "/viewsingleopportunities ",
        element: <ViewSingleOpportunities />,
      },
    ],
  },
]);

export default router;
