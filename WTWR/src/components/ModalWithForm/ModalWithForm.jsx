import "./ModalWithForm.css";

function ModalWithForm({formName,onClose}) {
  return (
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>{formName}</h2>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Name" />

      <label htmlFor="image">Image</label>
      <input type="text" id="image" placeholder="Image URL" />

      <div className="radio-group">
        <p>Select the weather type:</p>

        <div>
          <input type="radio" id="hot" name="weather" defaultChecked />
          <label htmlFor="hot">Hot</label>
        </div>

        <div>
          <input type="radio" id="warm" name="weather" disabled />
          <label htmlFor="warm">Warm</label>
        </div>

        <div>
          <input type="radio" id="cold" name="weather" disabled />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
