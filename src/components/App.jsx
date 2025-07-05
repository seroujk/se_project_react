import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import Profile from "./Profile/Profile.jsx";
import Footer from "./Footer/Footer.jsx";
import { getWeatherInfo } from "../utils/weatherAPI.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { getItems, addItem, deleteItem } from "../utils/api.js";
function App() {
  const [weather, setWeather] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formModal, setFormModal] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
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
    addItem(newGarment)
      .then((createdItem) => {
        setClothingItems((prev) => [...prev, createdItem]);
        handleFormClose();
      })
      .catch((err)=>{
        console.error("Failed to add item:", err);
      });
  };

  const handleDeleteGarment = (garmentToDelete) => {
    deleteItem(garmentToDelete._id)
      .then(() => {
        setClothingItems(
          (prev) => prev.filter((item) => item._id !== garmentToDelete._id)
        );
        setSelectedItem(null);
      })
      .catch((err)=>{
        console.error("Failed to delete item:", err);
      });
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header
        weatherData={weather}
        onButtonClick={handleFormOpen}
        formModal={formModal}
        onToggleSwitch={handleToggleSwitchChange}
      />
      <AddItemModal
        isOpen={formModal === "new-garment"}
        onAddItem={handleAddGarment}
        onCloseModal={handleFormClose}
      />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weather}
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                onCardClick={handleCardClick}
                onButtonClick={handleFormOpen}
              />
            }
          />
        </Routes>

        <ItemModal
          item={selectedItem}
          onClose={closeItemModal}
          isOpen={selectedItem != null}
          onDelete={handleDeleteGarment}
        />

        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
