  import wtwrLogo from "../../images/wtwrlogo.svg";
  import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
  import AvatarPlaceholder from "../AvatarPlaceholder/AvatarPlaceholder";
  import { Link } from "react-router-dom";
  import "./Header.css";
  import { CurrentUserContext } from "../../contexts/CurrentUserContext";
  import { useContext,useState } from "react";

  function Header({ weatherData, onButtonClick, onToggleSwitch, isLoggedIn }) {
    const currentUser = useContext(CurrentUserContext);
    const [avatarShown, setAvatarShown] = useState(true);

    useState(()=>{
      setAvatarShown(true);
    },[isLoggedIn])

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
          {isLoggedIn ? (
            <div>
              <Link to="/profile" className="header__right">
                <p className="header__username">
                  {currentUser ? currentUser.name : "Username"}
                </p>
                {avatarShown ? (
                  <img
                    className="header__avatar"
                    src={currentUser ? currentUser.avatar : "Avatar"}
                    onError={() => {
                      setAvatarShown(false);
                    }}
                    alt="User Avatar"
                  />
                ) : (
                  <AvatarPlaceholder />
                )}
              </Link>
            </div>
          ) : (
            <div>
              <button
                className="header__btn-add-clothes"
                onClick={() => onButtonClick("sign-up")}
              >
                Sign Up
              </button>

              <button
                className="header__btn-add-clothes"
                onClick={() => onButtonClick("log-in")}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }

  export default Header;
