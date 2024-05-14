import { Button } from "@mui/material";
import "../counter/Counter.css";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div className="boton-restarSumar">
      <Button onClick={restar} variant="outlined">
        -
      </Button>
      <h2>{contador}</h2>
      <Button onClick={sumar} variant="outlined">
        +
      </Button>
      <Button
        className="boton-agregarCarrito"
        onClick={() => onAdd(contador)}
        variant="contained"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
