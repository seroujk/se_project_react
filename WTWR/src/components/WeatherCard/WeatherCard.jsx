import "./WeatherCard.css";
import { weatherImagesArray } from "../../utils/weatherImages";
function WeatherCard({ weatherData }) {
  // Function to get the appropriate weather image
  const getWeatherIcon = () => {
    if (!weatherData) return null;
    
    // Determine if it's day or night 
    const currentHour = new Date().getHours();
    const isDayTime = currentHour >= 6 && currentHour < 18;
    const timePrefix = isDayTime ? "Day" : "Night";
    
    // Get weather condition from API response (lowercase for easier matching)
    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    
    // Map API conditions to our image names
    const conditionMap = {
      clouds: "Cloudy",
      cloud: "Cloudy",
      fog: "Fog",
      rain: "Rain",
      snow: "Snow",
      thunderstorm: "Storm",
      clear: "Clear",
    };
    
    // Find matching condition or default to Clear
    const condition = conditionMap[weatherCondition] || "Clear";
    
    // Combine time and condition to match our image names
    const imageName = `${timePrefix} ${condition}`;
    
    // Find the matching image in our array
    const matchedImage = weatherImagesArray.find(
      (img) => img.name === imageName
    );
    
    return matchedImage ? matchedImage.icon : null;
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
        {weatherData && (
          <p className="weatherCard__temperature">
            {Math.round(weatherData.main.temp)}°F
          </p>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
