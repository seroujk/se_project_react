import { useEffect, useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { filterClothesByWeather } from "../../utils/weatherAPI.js";

function Main({ weatherData, onCardClick, clothingItems }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const currentWeather = filterClothesByWeather();

  useEffect(() => {
    if (currentWeather) {
      const filtered = clothingItems.filter(
        (item) => item.weather === currentWeather
      );
      setFilteredItems(filtered);
    }
  }, [currentWeather, clothingItems]);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      {weatherData && (
        <p className="main__title">
          Today is {Math.round(weatherData.main.temp)}°F / You May Want To Wear
        </p>
      )}
      <div className="card__section">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </div>
    </main>
  );
}

export default Main;
