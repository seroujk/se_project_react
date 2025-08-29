import "./ModalWithForm.css";
import greyCloseBtnSrc from "../../images/close-button-grey.svg";

function ModalWithForm({
  isOpen,
  formTitle,
  onClose,
  onSubmit,
  buttonText,
  secondButtonText,
  isSubmitDisabled = false,
  children,
  onButtonClick,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal__backdrop">
      <div className="modal modal_opened">
        <button type="button" className="modal__close-button" onClick={onClose}>
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
          {!formTitle.includes("New Garment") ? (
            formTitle === "Log In" ? (
              <button
                onClick={() => onButtonClick("sign-up")}
                className="modal__second-button"
                type="button"
                disabled={isSubmitDisabled}
              >
                {secondButtonText}
              </button>
            ) : (
              <button
                onClick={() => onButtonClick("log-in")}
                className="modal__second-button"
                type="button"
                disabled={isSubmitDisabled}
              >
                {secondButtonText}
              </button>
            )
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
