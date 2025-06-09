import { useEffect, useState } from "react";
import { defaultClothingItems } from "../../utils/constants.js";
import { filterClothesByWeather } from "../../utils/weatherAPI.js";
import "./ItemCard.css";

function ItemCard({onCardClick}) {
  const [filteredItems, setFilteredItems] = useState([]);
  const currentWeather = filterClothesByWeather();
  useEffect(() => {
    if(currentWeather){
      const filtered =  defaultClothingItems.filter((item) => item.weather === currentWeather);
      setFilteredItems(filtered);
    }
  }, [currentWeather]);

  return (
    <div className="card__section">
      {filteredItems.map((item) => (
        <div key={item._id} className="card">
          <div className="card__name">{item.name}</div>
          <img src={item.link} alt={item.name} className="card__image" onClick={() => onCardClick(item)}/>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
