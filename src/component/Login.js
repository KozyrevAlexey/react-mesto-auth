import React, {useState} from "react";

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
    </div>
  )
}

export default Login;
