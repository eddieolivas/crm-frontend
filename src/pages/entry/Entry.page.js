import React, { useState } from 'react';

import { Login } from '../../components/Login/Login.comp';

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill in an email and password, please.");
    }

    //TODO call API to submit the form
    console.log( email, password );
  };

  return (
    <div className="entry-page bg-info">
      <div className="loginContainer rounded bg-light p-5">
        <Login 
          inputChangeHandler={inputChangeHandler}
          onSubmitHandler={onSubmitHandler}
          email={email}
          password={password}
        />
      </div>
    </div>
  )
}
