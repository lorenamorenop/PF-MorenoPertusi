import Cart from "./Cart.jsx";

const CartContainer = () => {
  let productosAgregados = [];
  return (
    <div>
      <Cart productosAgregados={productosAgregados} />
    </div>
  );
};

export default CartContainer;
