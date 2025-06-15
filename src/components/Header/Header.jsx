import wtwrLogo from "../../images/wtwrlogo.svg";
import userAvatar from "../../images/avatar.svg";
import "./Header.css";

function Header({weatherData, onButtonClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={wtwrLogo} alt="What To Wear Logo" />
        <p className="header__date">{currentDate},</p>
        {weatherData && <p className="header__location">{weatherData.name}</p>}
      </div>
      <div className="header__right">
        <button className="header__btn-add-clothes" onClick={() => onButtonClick("new-garment")}>
          + Add Clothes
        </button>
        <p className="header__username">Username</p>
        <img src={userAvatar} alt="User Avatar" />
      </div>
    </div>
  );
}

export default Header;
