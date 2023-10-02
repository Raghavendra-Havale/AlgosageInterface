import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error0 } from "../Pages/Errors";
import Dashboard from "../Pages/Dashboard";
import Discover from "../Pages/Discover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error0 />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
    ],
  },
]);

export default router;
