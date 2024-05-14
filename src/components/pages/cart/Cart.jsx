import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../cart/Cart.css";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Estás seguro de que quieres limpiar el carrito?",
      position: "center",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, limpiar carrito",
      denyButtonText: "No, dejar el carrito como está",
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "El carrito fue limpiado correctamente",
          icon: "success",
        });
      } else if (res.isDenied) {
        Swal.fire({
          title: "El carrito permanece igual",
          icon: "info",
        });
      }
    });
  };
  if (cart.length === 0) {
    return (
      <div className="cart-empty-message">
        <h2>Ups, parece que tu carrito está vacío</h2>
        <p>¡Agrega productos para comenzar a comprar!</p>
        <Link to="/">
          <Button className="boton-verProductos" variant="contained">
            Ver todos los productos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <div className="contenedor-productsCart" key={product.id}>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <img src={product.img} alt={product.title} />
          <h4>{product.quantity}</h4>

          <button
            className="boton-eliminarProducto"
            onClick={() => deleteById(product.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      {cart.length > 0 && <h5>El total a pagar es: ${total}</h5>}

      {cart.length > 0 && (
        <Button onClick={clearCartAlert} variant="outlined">
          Limpiar carrito
        </Button>
      )}

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button className="boton-finalizarCompra" variant="contained">
            Finalizar compra
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
