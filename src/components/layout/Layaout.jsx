import Footer from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../layout/Layaout.css";

const Layaout = () => {
  return (
    <div>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layaout;
