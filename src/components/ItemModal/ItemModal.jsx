import "./ItemModal.css";
import whitecloseBtnSrc from "../../images/close-button-white.svg";
function ItemModal({ isOpen, item, onClose, onDelete }) {
  if (!isOpen) return null;
  return (
    <div className="item-modal_backdrop">
      <div className="item-modal">
        <div className="item-modal__content">
          <button onClick={onClose} className="item-modal__close-btn">
            <img
              className="item-modal__close-btn__image"
              src={whitecloseBtnSrc}
              alt="Item Modal Close Button"
            />
          </button>
          <img className="item-modal__image" src={item.imageUrl} alt={item.name} />
          <div className="item-modal__bottom">
            <p className="item-modal__garment-name">{item.name}</p>
            <p className="item-modal__weather-condition">
              Weather: {item.weather}
            </p>
            <button type="button" 
            className="item-modal__delete-btn"
            onClick={() => onDelete(item)}>
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
