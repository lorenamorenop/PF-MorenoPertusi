import Footer from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

const Layaout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layaout;
