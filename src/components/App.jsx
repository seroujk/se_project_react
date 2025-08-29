import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import ItemModal from "./ItemModal/ItemModal.jsx";
import AddItemModal from "./AddItemModal/AddItemModal.jsx";
import RegisterModal from "./RegisterModal/RegisterModal.jsx";
import LoginModal from "./LoginModal/LoginModal.jsx";
import Profile from "./Profile/Profile.jsx";
import EditProfileModal from "./Profile/EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import Footer from "./Footer/Footer.jsx";
import { getWeatherInfo } from "../utils/weatherAPI.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import {
  getItems,
  addItem,
  deleteItem,
  createUser,
  loginUser,
  authorize,
  updateUser,
  addCardLike,
  removeCardLike,
} from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useNavigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [weather, setWeather] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formModal, setFormModal] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    authorize()
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.error(err);
        setIsLoggedIn(false);
      });
  },[isLoggedIn]);

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
        setClothingItems((prev) => [createdItem,...prev]);
        handleFormClose();
      })
      .catch((err) => {
        console.error("Failed to add item:", err);
      });
  };

  const handleDeleteGarment = (garmentToDelete) => {
    deleteItem(garmentToDelete._id)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => item._id !== garmentToDelete._id)
        );
        setSelectedItem(null);
      })
      .catch((err) => {
        console.error("Failed to delete item:", err);
      });
  };

  const handleSignUp = (newUser) => {
    createUser(newUser)
      .then((user) => {
        handleFormClose();
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handlelogin = (userCredentials) => {
    loginUser(userCredentials)
      .then((res) => {
        
        localStorage.setItem("jwt", res.token);
        handleFormClose();
        setIsLoggedIn(true);
        setCurrentUser(res.user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdate = (updatedUserInfo) => {
    updateUser(updatedUserInfo)
      .then((res) => {
        setCurrentUser(res);
        handleFormClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCardLike = ({ id, isLiked }) => {
    if (!isLiked) {
      addCardLike(id)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.error(err));
    } else {
      removeCardLike(id)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          weatherData={weather}
          onButtonClick={handleFormOpen}
          formModal={formModal}
          onToggleSwitch={handleToggleSwitchChange}
          isLoggedIn={isLoggedIn}
        />
        <AddItemModal
          isOpen={formModal === "new-garment"}
          onAddItem={handleAddGarment}
          onCloseModal={handleFormClose}
        />
        <RegisterModal
          isOpen={formModal === "sign-up"}
          onSignUp={handleSignUp}
          onCloseModal={handleFormClose}
          onButtonClick={handleFormOpen}
        />

        <LoginModal
          isOpen={formModal === "log-in"}
          onLogin={handlelogin}
          onCloseModal={handleFormClose}
          onButtonClick={handleFormOpen}
        />

        <EditProfileModal
          isOpen={formModal === "edit-profile"}
          onUpdate={handleUpdate}
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
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                    onButtonClick={handleFormOpen}
                    handleSignOut={handleSignOut}
                    isLoggedIn={isLoggedIn}
                  />
                </ProtectedRoute>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
