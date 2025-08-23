import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function ClothesSection({ clothingItems, onCardClick, onButtonClick }) {

  const currentUser = useContext(CurrentUserContext);


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
        {clothingItems.filter((item)=> item.owner === currentUser._id).map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
