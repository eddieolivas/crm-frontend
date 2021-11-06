import React from "react";

import { PasswordReset } from "../../components/password-reset/PasswordReset";

import "./resetPassword.style.css";

export const ResetPassword = () => {
  return (
    <div className="entry-page">
      <div className="loginContainer rounded bg-white p-4">
        <PasswordReset />
      </div>
    </div>
  );
};
