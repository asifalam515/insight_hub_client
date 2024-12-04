import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./pages/HomePage/Home/Home";
import Register from "./pages/AuthPage/Register";
import ErrorPage from "./pages/error-page";

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
    ],
  },
]);
export default routes;
