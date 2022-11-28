import React from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <>
      <div className="container">
        <div className="auth">
          <h2 className="auth_h2">Регистрация</h2>
          <div className="auth_text">
            <input type="text" placeholder="Имя" />
            <input type="password" placeholder="Пароль" />
          </div>
          <div className="auth_btn">
            <button>Войти</button>
            <Link to="/login">
              <p>У вас уже есть аккаунт? Войти</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
