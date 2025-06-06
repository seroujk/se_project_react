import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main({ weatherData }) {
  return (
    <div className="main">
      <WeatherCard weatherData={weatherData} />
      {weatherData && (
        <p className="main__title">
          Today is {Math.round(weatherData.main.temp)}°F / You May Want To Wear
        </p>
      )}
      <ItemCard/>
    </div>
  );
}

export default Main;
