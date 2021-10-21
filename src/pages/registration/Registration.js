import React from "react";

import RegistrationForm from "../../components/registration-form/RegistrationForm";
import "./registration.style.css";

export const Registration = () => {
  return (
    <div className="registration-page">
      <div className="my-5">
        <div className="loginContainer rounded bg-white p-4">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
