import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import ItemModal from "./ItemModal/itemModal.jsx";
import ModalWithForm from "./ModalWithForm/ModalWithForm.jsx";
import Footer from "./Footer/Footer.jsx";
import { defaultClothingItems } from "../utils/constants.js";
import { getWeatherInfo } from "../utils/weatherAPI.js";

function App() {
  const [weather, setWeather] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formModal, setFormModal] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  useEffect(() => {
    getWeatherInfo()
      .then((data) => {
        if (data) {
          setWeather(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleFormOpen = (formModal) => {
    setFormModal(formModal);
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

  const handleAddGarment = (newGarment) => {
    setClothingItems((prevItems) => [...prevItems, newGarment]);
  };

  return (
    <div className="app">
      <Header
        weatherData={weather}
        onButtonClick={handleFormOpen}
        formModal={formModal}
      />
      <Main
        weatherData={weather}
        onCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
      <ItemModal  
      item={selectedItem} 
      onClose={closeItemModal} 
      isOpen={selectedItem != null}
      />
      <ModalWithForm
        isOpen={formModal === "new-garment"}
        formTitle="New Garment"
        onClose={handleFormClose}
        handleAddGarment={handleAddGarment}
      />
      <Footer />
    </div>
  );
}

export default App;
