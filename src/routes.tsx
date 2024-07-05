import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Root from "./page/Root.tsx";
import Login from "./page/Login.tsx";
import { Register } from "./page/Register.tsx";
import Dashboard from "./page/Dashboard.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
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
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  }
]);