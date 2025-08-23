import { useState, useContext, useEffect } from "react";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onCloseModal, onUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(()=>{
    setName(currentUser?.name);
    setAvatar(currentUser?.avatar);
  },[isOpen])

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUserInfo = {
      name: name,
      avatar: avatar,
    };

    onUpdate(updatedUserInfo);
  };
  return (
    <ModalWithForm
      formTitle="Change Profile Data"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
    >
      <label htmlFor="name">Name*</label>
      <input
        required
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="avatar">Avatar*</label>
      <input
        required
        type="url"
        id="avatar"
        value={avatar}
        onChange={(e) => {
          setAvatar(e.target.value);
        }}
      />
    </ModalWithForm>
  );
}

export default EditProfileModal;
