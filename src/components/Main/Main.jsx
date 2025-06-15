import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({ weatherData, onCardClick, clothingItems }) {
  return (
    <div className="main">
      <WeatherCard weatherData={weatherData} />
      {weatherData && (
        <p className="main__title">
          Today is {Math.round(weatherData.main.temp)}°F / You May Want To Wear
        </p>
      )}
      <ItemCard onCardClick={onCardClick} clothingItems={clothingItems}/>
    </div>
  );
}

export default Main;
