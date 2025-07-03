import "./SideBar.css"
import avatarSrc from "../../../images/avatar.svg"

function SideBar(){
 return (
    <div className="side-bar">
        <img className="side-bar__image" src={avatarSrc} alt="avatar image" />
        <p className="side-bar__text">Username</p>
    </div>
 );
}

export default SideBar;