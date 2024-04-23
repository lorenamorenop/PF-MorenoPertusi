import "../itemListContainer/ItemListContainer.css";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <div className="contenedor-lista">
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            id={item.id}
          />
        );
      })}
      {error && <h2>{error.message}</h2>}
    </div>
  );
};

export default ItemList;
