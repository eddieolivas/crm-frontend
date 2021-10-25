import React, { useState } from "react";

import { PasswordReset } from "../../components/password-reset/PasswordReset";

import "./resetPassword.style.css";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const inputChangeHandler = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const onResetHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="entry-page">
      <div className="loginContainer rounded bg-white p-4">
        <PasswordReset
          inputChangeHandler={inputChangeHandler}
          onResetHandler={onResetHandler}
          email={email}
        />
      </div>
    </div>
  );
};
