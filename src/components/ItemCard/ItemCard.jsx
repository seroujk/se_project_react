import "./ItemCard.css";
import LikeButton from "../../images/Like_Button.svg";
import BlackLikeButton from "../../images/Black_Like_Button.scg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser?._id);
  const handleLike = (event, item) => {
    event.stopPropagation();
    onCardLike({ id: item._id, isLiked: isLiked });
  };
  return (
    <div className="card" onClick={() => onCardClick(item)}>
      <div className="card__name">{item.name}</div>
      {isLoggedIn ? (
        isLiked ? (
          <img
            src={BlackLikeButton}
            alt="heart icon"
            className="card__like-button"
            onClick={(event) => handleLike(event, item)}
          />
        ) : (
          <img
            src={LikeButton}
            alt="heart icon"
            className="card__like-button"
            onClick={(event) => handleLike(event, item)}
          />
        )
      ) : null}

      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </div>
  );
}

export default ItemCard;
