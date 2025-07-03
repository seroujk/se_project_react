import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onButtonClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__top">
        <p className="clothes-section__text">Your Items</p>
        <button
          className="clothes-section__button"
          onClick={() => onButtonClick("new-garment")}
        >+ Add new
        </button>
      </div>

      <div className="clothes-section__cards">
        {clothingItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
