import { Outlet } from "react-router-dom";
import Home from "../pages/HomePage/Home/Home";
import Navbar from "../pages/HomePage/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
