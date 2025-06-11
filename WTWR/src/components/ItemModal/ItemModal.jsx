import "./ItemModal.css";
function ItemModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="item-modal_backdrop">
      <div className="item-modal">
        <div className="item-modal__content">
          <button onClick={onClose} className="item-modal__close-btn">
            X
          </button>
          <img className="item-modal__image" src={item.link} alt={item.name} />
          <p className="item-modal__garment-name">{item.name}</p>
          <p className="item-modal__weather-condition">Weather: {item.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
