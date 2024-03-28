import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="saludo">
      <p>{props.greeting}</p>
    </div>
  );
};

export default ItemListContainer;
