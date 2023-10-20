import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error0 } from "../Pages/Errors";
import Dashboard from "../Pages/Dashboard";
import Discover from "../Pages/Discover";
import CreateStrategy from "../Pages/CreateStrategy";
import ManageStrategy from "../Pages/ManageStrategy";
import Vault from "../Pages/Vault/vault";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error0 />,
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "create-strategy",
        element: <CreateStrategy />,
      },
      {
        path: "manage-strategy",
        element: <ManageStrategy />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
    ],
  },
]);

export default router;
