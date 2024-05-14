import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2 className="item-details">
            <span className="categorias">Nombre:</span> {item.title}
          </h2>
          <h3 className="item-details">
            <span className="categorias">Descripcion:</span> {item.description}
          </h3>
          <h4 className="item-details">
            <span className="categorias">Precio:</span> ${item.price}.-
          </h4>
        </div>
      </div>
      <div className="counter-contenedor">
        <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
      </div>
    </div>
  );
};

export default ItemDetail;
