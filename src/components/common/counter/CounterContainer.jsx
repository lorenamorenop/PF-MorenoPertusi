import { useState } from "react";

import CounterPresentacional from "./CounterPresentacional";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock máximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No podes menos de 1");
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd,
  };

  return <CounterPresentacional {...objectProps} />;
};
