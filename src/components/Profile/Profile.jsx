import "./Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar";

function Profile({ clothingItems, onCardClick, onButtonClick,handleSignOut,isLoggedIn }) {
  return (
    <div className="profile">
      <SideBar onButtonClick={onButtonClick} handleSignOut={handleSignOut}/>
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onButtonClick={onButtonClick}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default Profile;
