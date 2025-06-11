import "./ModalWithForm.css";

function ModalWithForm({ formName, onClose }) {
  return (
    <div className="modal__backdrop">
      <div className="modal">
        <button className="modal__close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__form-title">{formName}</h2>

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
        <button className="modal__submit-button" type="submit" disabled>Add garment</button>
      </div>
    </div>
  );
}

export default ModalWithForm;
