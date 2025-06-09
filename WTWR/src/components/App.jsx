import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import ItemModal from "./ItemModal/itemModal.jsx";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";
import Footer from "./Footer/Footer.jsx";
import { getWeatherInfo } from "../utils/weatherAPI.js";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formModal, setFormModal] = useState(null);

  useEffect(() => {
    getWeatherInfo().then((data) => {
      if (data) {
        setWeather(data);
      }
    });
  }, []);

  const handleFormOpen = (formType) => {
    setFormModal(formType);
  };

  const handleFormClose = () => {
    setFormModal(null);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const closeItemModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="app">
        <Header
          weatherData={weather}
          onButtonClick={handleFormOpen}
          form={formModal}
        />
        <Main weatherData={weather} onCardClick={handleCardClick} />
        <ItemModal item={selectedItem} onClose={closeItemModal} />
        {formModal === "new-garment" && (
          <ModalWithForm formName="New Garment" onClose={handleFormClose} />
        )}
        <Footer/>
      </div>
    </>
  );
}

export default App;
