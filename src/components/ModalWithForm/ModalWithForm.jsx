import "./ModalWithForm.css";
import greyCloseBtnSrc from "../../images/close-button-grey.svg";

function ModalWithForm({ isOpen, formTitle, onClose, buttonText, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal__backdrop">
      <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
        <button className="modal__close-button" onClick={onClose}>
          <img
            className="modal__close-button__image"
            src={greyCloseBtnSrc}
            alt="Close"
          />
        </button>
        <h2 className="modal__form-title">{formTitle}</h2>
        {children}
        <button className="modal__submit-button" type="submit" disabled>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
