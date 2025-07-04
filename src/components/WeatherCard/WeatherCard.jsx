import "./WeatherCard.css";
import { weatherImagesArray } from "../../utils/weatherImages";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  if (!weatherData) return null;

  const getWeatherIcon = () => {
    if (weatherData) {
      const currentTime = new Date().getHours();
      const isDayTime = currentTime >= 6 && currentTime <= 18;
      const prefix = isDayTime ? "Day" : "Night";
      const weatherCondition = weatherData.weather[0].main;
      const imageName = `${prefix} ${weatherCondition}`;
      let weatherImage = weatherImagesArray[0].icon;
      weatherImagesArray.forEach((image) => {
        if (imageName.toLowerCase() === image.name.toLowerCase()) {
          weatherImage = image.icon;
        }
      });
      return weatherImage;
    }
  };

  const weatherIcon = getWeatherIcon();
  return (
    <div className="weatherCard">
      <div className="weatherCard__image-container">
        <img
          className="weatherCard__weather-img"
          src={weatherIcon}
          alt="Current Weather Card"
        />
        {currentTemperatureUnit == "F" ? (
          <p className="weatherCard__temperature">
            {Math.round(weatherData.main.temp)}°F
          </p>
        ) : (
          <p className="weatherCard__temperature">
            {Math.round(((weatherData.main.temp - 32) * 5) / 9)}°C
          </p>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
