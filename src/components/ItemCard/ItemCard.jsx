import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <div className="card" onClick={() => onCardClick(item)}>
      <div className="card__name">{item.name}</div>
      <img src={item.link} alt={item.name} className="card__image" />
    </div>
  );
}

export default ItemCard;
