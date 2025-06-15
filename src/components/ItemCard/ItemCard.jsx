import { useEffect, useState } from "react";
import { filterClothesByWeather } from "../../utils/weatherAPI.js";
import "./ItemCard.css";

function ItemCard({onCardClick, clothingItems}) {
  const [filteredItems, setFilteredItems] = useState([]);
  const currentWeather = filterClothesByWeather();
  useEffect(() => {
    if(currentWeather){
      const filtered =  clothingItems.filter((item) => item.weather === currentWeather);
      setFilteredItems(filtered);
    }
  }, [currentWeather,clothingItems]);

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
