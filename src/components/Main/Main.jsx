import { useEffect, useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getWeatherType } from "../../utils/weatherAPI.js";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, onCardClick, clothingItems }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const currentWeather = getWeatherType();
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  useEffect(() => {
    if (currentWeather) {
      const filtered = clothingItems.filter(
        (item) => item.weather === currentWeather
      );
      setFilteredItems(filtered);
    }
  }, [currentWeather, clothingItems]);

  if (!weatherData) return null;
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      {currentTemperatureUnit === "F" ? (
        <p className="main__title">
          Today is {Math.round(weatherData.main.temp)}°F / You May Want To Wear
        </p>
      ) : (
        <p className="main__title">
          Today is {Math.round(((weatherData.main.temp - 32) * 5) / 9)}°C / You
          May Want To Wear
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
