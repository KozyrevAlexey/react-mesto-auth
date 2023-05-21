import React, { useState} from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password} = userData;
    onRegister(email, password);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
    </div>
  )
}

export default Register;
