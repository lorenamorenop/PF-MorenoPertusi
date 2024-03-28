import CartWidget from "../../common/cartWidget/CartWidget";
import "../navbar/Navbar.css";
import logo from "../../../imagenes/wein.png";

export const Navbar = () => {
  return (
    <div className="containerNav">
      <div className="logo-container">
        <img src={logo} alt="Logo de mi página" className="logo" />
      </div>
      <ul className="listaNav">
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
