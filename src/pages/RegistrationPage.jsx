import React from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <>
      <div className="auth_block">
        <div className="login_left">Hello Friend</div>
        <div className="login_right">
          <div className="login_right_block">
            <h2>Create Account </h2>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
