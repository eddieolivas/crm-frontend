import React, { useState } from "react";

import { Login } from "../../components/Login/Login";
import { PasswordReset } from "../../components/password-reset/PasswordReset";

import "./entry.style.css";

export const Entry = () => {
  const [formLoad, setFormLoad] = useState("login");

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  const onResetHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="entry-page">
      <div className="loginContainer rounded bg-white p-4">
        {formLoad === "login" && <Login formSwitcher={formSwitcher} />}
        {formLoad === "reset" && (
          <PasswordReset
            //inputChangeHandler={inputChangeHandler}
            onResetHandler={onResetHandler}
            //email={email}
            formSwitcher={formSwitcher}
          />
        )}
      </div>
    </div>
  );
};
