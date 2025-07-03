import "./ModalWithForm.css";
import greyCloseBtnSrc from "../../images/close-button-grey.svg";


function ModalWithForm({
  isOpen,
  formTitle,
  onClose,
  onSubmit,
  buttonText,
  isSubmitDisabled =false,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal__backdrop">
      <div className="modal modal_opened">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        >
          <img
            className="modal__close-button__image"
            src={greyCloseBtnSrc}
            alt="Close"
          />
        </button>

        <h2 className="modal__form-title">{formTitle}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button
            className="modal__submit-button"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
