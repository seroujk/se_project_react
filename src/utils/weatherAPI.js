import { APIkey, longitude, latitude } from "./constants.js";


export function getWeatherInfo() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}



export function getWeatherType(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
