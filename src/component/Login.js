import React, { useState } from "react";

function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = formValue;
    onLogin(email, password);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  )
}

export default Login;
