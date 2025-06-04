import "./Main.css";
import weatherCardImage from "../../images/Day/Cloudy.svg";

function Main({ weatherData }) {
  return (
    <div className="main">
      <div className="main__image-container">
        <img className="main__weather-img" src={weatherCardImage} alt="Weather" />
        {weatherData && (
          <p className="main__temperature">{Math.round(weatherData.main.temp)}°F</p>
        )}
      </div>
    </div>
  );
}

export default Main;