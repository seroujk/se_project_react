import wtwrLogo from "../../images/wtwrlogo.svg";
import userAvatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ weatherData, onButtonClick, onToggleSwitch }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <div className="header__left">
        <Link to="/">
          <img
            className="header__logo"
            src={wtwrLogo}
            alt="What To Wear Logo"
          />
        </Link>

        <p className="header__date">{currentDate},</p>
        {weatherData && <p className="header__location">{weatherData.name}</p>}
      </div>
      <div className="header__right">
        <ToggleSwitch onToggleSwitch={onToggleSwitch} />
        <button
          className="header__btn-add-clothes"
          onClick={() => onButtonClick("new-garment")}
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__right">
        <p className="header__username">Username</p>
        <img src={userAvatar} alt="User Avatar" />
        </Link>
     
      </div>
    </header>
  );
}

export default Header;
