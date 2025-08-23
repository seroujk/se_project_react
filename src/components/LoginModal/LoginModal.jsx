import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onLogin, onCloseModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    onLogin(userCredentials);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      formTitle="Log In"
      onClose={onCloseModal}
      handleLogin={onLogin}
      buttonText="Log In"
      onSubmit={handleSubmit}
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
    </ModalWithForm>
  );
};

export default LoginModal;
