import "./SideBar.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

import AvatarPlaceholder from "../../AvatarPlaceholder/AvatarPlaceholder";

function SideBar({ onButtonClick,handleSignOut}) {
  const currentUser = useContext(CurrentUserContext);
  const [avatarShown, setAvatarShown] = useState(true);

  return (
    <div className="side-bar">
      <div className="side-bar__user-info">
        {avatarShown ? (
          <img
            className="side-bar__image"
            src={currentUser ? currentUser.avatar : "Avatar"}
            alt="avatar image"
            onError={() => setAvatarShown(false)}
          />
        ) : (
          <AvatarPlaceholder />
        )}

        <p className="side-bar__text">
          {currentUser ? currentUser.name : "Username"}
        </p>
      </div>
      <button
        className="side-bar__edit-profile-button"
        onClick={() => onButtonClick("edit-profile")}
      >
        Change profile data
      </button>
      <button className="side-bar__sign-out-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default SideBar;
