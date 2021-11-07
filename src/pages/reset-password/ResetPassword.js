import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PasswordReset } from "../../components/password-reset/PasswordReset";
import ResetPasswordForm from "./ResetPasswordForm";

import "./resetPassword.style.css";

export const ResetPassword = () => {
  const { showUpdatePasswordForm } = useSelector(
    (state) => state.passwordReset
  );

  return (
    <div className="entry-page">
      <div className="loginContainer rounded bg-white p-4">
        {showUpdatePasswordForm ? <ResetPasswordForm /> : <PasswordReset />}
        <hr />
        <p className="py-4">
          Already have an account? <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
};
