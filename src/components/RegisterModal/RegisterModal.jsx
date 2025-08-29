import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onSignUp, onCloseModal,onButtonClick }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setAvatar("");
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      avatar: avatar,
      email: email,
      password: password,
    };

    onSignUp(newUser);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      formTitle="Sign Up"
      onClose={onCloseModal}
      handleSignUp={onSignUp}
      buttonText={"Sign Up"}
      onSubmit={handleSubmit}
      secondButtonText={"or Log In"}
      onButtonClick={onButtonClick}
    >
      <label htmlFor="email">Email*</label>
      <input
        required
        type="email"
        value={email}
        id="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Password*</label>
      <input
        required
        type="password"
        value={password}
        id="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label htmlFor="name">Name*</label>
      <input
        required
        type="text"
        value={name}
        id="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="avatar">Avatar URL*</label>
      <input
        required
        type="url"
        value={avatar}
        id="avatar"
        placeholder="Avatar URL"
        onChange={(e) => {
          setAvatar(e.target.value);
        }}
      />
    </ModalWithForm>
  );
};

export default RegisterModal;
