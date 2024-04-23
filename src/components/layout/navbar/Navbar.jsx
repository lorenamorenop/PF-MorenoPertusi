import CartWidget from "../../common/cartWidget/CartWidget";
import "../navbar/Navbar.css";
import logo from "../../../imagenes/wein.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="containerNav">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo de mi página" className="logo" />
        </Link>
      </div>
      <ul className="listaNav">
        <Link to="/"> Todos</Link>
        <Link to="category/ligeros">Ligeros</Link>
        <Link to="category/pet-nat">Pet nat</Link>
        <Link to="category/blancos">Blancos</Link>
        <Link to="category/tintos">Tintos</Link>
      </ul>
      <Link to="/Cart">
        <CartWidget />
      </Link>
    </div>
  );
};
