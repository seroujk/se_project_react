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
        buttonText={"Add garment"}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" />

        <label htmlFor="image">Image</label>
        <input type="url" id="image" placeholder="Image URL" />

        <div className="radio-group">
          <p className="radio-group__title">Select the weather type:</p>
          <div>
            <input type="radio" id="hot" name="weather" defaultChecked />
            <label htmlFor="hot">Hot</label>
          </div>
          <div>
            <input type="radio" id="warm" name="weather" />
            <label htmlFor="warm">Warm</label>
          </div>
          <div>
            <input type="radio" id="cold" name="weather" />
            <label htmlFor="cold">Cold</label>
          </div>
        </div>
      </ModalWithForm>
      <Footer />
    </div>
  );
}

export default App;
