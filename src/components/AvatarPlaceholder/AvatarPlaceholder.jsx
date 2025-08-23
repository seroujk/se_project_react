import "./AvatarPlaceholder.css"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function AvatarPlaceholder(){
    const currentUser = useContext(CurrentUserContext);
    return(
        <div className="avatar-placeholder">
            <p className="avatar-placeholder__letter">{ currentUser? currentUser.name[0] : ""}</p>
        </div>
    )
}

export default AvatarPlaceholder;