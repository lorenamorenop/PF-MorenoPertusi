import "../itemDetail/ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2 className="detail-title">{item.title}</h2>
      <img className="detail-img" src={item.img} alt={item.title} />
      <h3 className="detail-descripton"> {item.description}</h3>
    </div>
  );
};

export default ItemDetail;
