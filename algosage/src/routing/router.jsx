import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error0 } from "../Pages/Errors";
import Dashboard from "../Pages/Dashboard";
import Discover from "../Pages/Discover";
import Staking from "../Pages/Staking";
import Revenue from "../Pages/Revenue";
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
        path: "staking",
        element: <Staking />,
      },
      {
        path: "revenue",
        element: <Revenue />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
    ],
  },
]);

export default router;
