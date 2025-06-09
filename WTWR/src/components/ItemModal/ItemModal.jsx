import "./ItemModal.css";
function ItemModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="modal">
      <div className="modal__content">
        <button onClick={onClose} className="modal__close">
          X
        </button>
        <img src={item.link} alt={item.name} />
        <p>{item.name}</p>
      </div>
    </div>
  );
}

export default ItemModal;
