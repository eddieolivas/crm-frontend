import React, { useState } from 'react';

import { Login } from '../../components/Login/Login';
import { PasswordReset } from '../../components/password-reset/PasswordReset';

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  // A function to set up two way binding for inputs in our form
  const inputChangeHandler = e => {
    const { name, value } = e.target;
    
    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
          setPassword(value);
          break;
      default:
        break;
    }
  };

  const formSwitcher = formType => {
    setFormLoad(formType);
  };

  const onLoginHandler = e => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill in an email and password.");
    }

    //TODO call API to submit the form
    console.log( email, password );
  };

  const onResetHandler = e => {
    e.preventDefault();

    if (!email) {
      return alert("Please fill in an email.");
    }

    //TODO call API to submit the form
    console.log( email );
  };

  return (
    <div className="entry-page bg-light.bg-gradient">
      <div className="loginContainer rounded bg-white p-4">
        {formLoad === 'login' && 
          <Login 
            inputChangeHandler={inputChangeHandler}
            onLoginHandler={onLoginHandler}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
          /> 
        }
        {formLoad === 'reset' && 
          <PasswordReset 
            inputChangeHandler={inputChangeHandler}
            onResetHandler={onResetHandler}
            email={email}
            formSwitcher={formSwitcher}
          />
        }
      </div>
    </div>
  )
}
