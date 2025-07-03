import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [garmentName, setGarmentName] = useState("");
  const [garmentImage, setGarmentImage] = useState("");
  const [weatherType, setWeatherType] = useState("");

  useEffect(() => {
    if (isOpen) {
      setGarmentName("");
      setGarmentImage("");
      setWeatherType("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGarment = {
      _id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, // unique key
      name: garmentName, // <- what ItemCard reads
      imageUrl: garmentImage, // <- what ItemCard uses for src
      weather: weatherType, // <- hot / warm / cold
    };

    onAddItem(newGarment);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      formTitle="New Garment"
      onClose={onCloseModal}
      handleAddGarment={AddItemModal}
      buttonText={"Add garment"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={(e) => {
          setGarmentName(e.target.value);
        }}
      />

      <label htmlFor="image">Image</label>
      <input
        type="url"
        id="image"
        placeholder="Image URL"
        onChange={(e) => {
          setGarmentImage(e.target.value);
        }}
      />

      <div className="radio-group">
        <p className="radio-group__title">Select the weather type:</p>
        <div>
          <input
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            defaultChecked
            onChange={(e) => setWeatherType(e.target.value)}
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            onChange={(e) => setWeatherType(e.target.value)}
          />
          <label htmlFor="warm">Warm</label>
        </div>
        <div>
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            onChange={(e) =>setWeatherType(e.target.value)}
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
