import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="auth">
          <h2 className="auth_h2">Вход</h2>
          <div className="auth_text">
            <input type="text" placeholder="Имя" />
            <input type="password" placeholder="Пароль" />
          </div>
          <div className="auth_btn">
            <button>Войти</button>
            <Link to="/registration">
              <p>У вас нет аккаунта? Зарегистрироваться</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
