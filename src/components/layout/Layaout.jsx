import Footer from "./footer/Footer";
import ResponsiveAppBar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "../layout/Layaout.css";

const Layaout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layaout;
