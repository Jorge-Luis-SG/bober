import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Root from "./page/Root.tsx";
import Login from "./page/Login.tsx";
import { Register } from "./page/Register.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import ECommerce from "./page/E-commerce.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <ECommerce />
          }
        ]
      }
    ],
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  }
]);