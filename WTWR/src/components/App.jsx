import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import {getWeatherInfo} from "../utils/weatherAPI.js";
import "./App.css";


function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeatherInfo().then((data) => {
      if (data) {
        setWeather(data);
      }
    });
  }, []);

  return (
    <>
      <div className="app">
        <Header weatherData={weather}/>
        <Main weatherData={weather}/>
      </div>
    </>
  );
}

export default App;
