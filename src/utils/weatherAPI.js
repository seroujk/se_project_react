import { APIkey, longitude, latitude } from "./constants.js";
import { checkResponse } from "./api.js";

export function getWeatherInfo() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((checkResponse))
    .catch((err) => {
      console.error(err);
    });
}

export function getWeatherType(weatherData) {
  let temperature = 0;

  if (!weatherData) {
    return null;
  }
  temperature = weatherData.main.temp;
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
