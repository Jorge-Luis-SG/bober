import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Root from "./page/Root.tsx";
import Login from "./page/Login.tsx";
import Register from "./page/Register.tsx";
import Dashboard from "./page/Dashboard.tsx";

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
        path: 'dashboard',
        element: <Dashboard />
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
]);