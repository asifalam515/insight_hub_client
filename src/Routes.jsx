import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./pages/HomePage/Home/Home";
import Register from "./pages/AuthPage/Register";
import ErrorPage from "./pages/error-page";
import Login from "./pages/AuthPage/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default routes;
