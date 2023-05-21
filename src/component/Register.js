import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = userData;
    onRegister(email, password);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form name="register" className="auth__form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="auth__input"
          placeholder="Email"
          required />
        <input
          type="password"
          name="password"
          className="auth__input"
          placeholder="Пароль"
          required />
        <button
          className="auth__submit-button"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <Link className="auth__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  )
}

export default Register;
