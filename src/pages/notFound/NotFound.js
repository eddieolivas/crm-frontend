import React from "react";
import { Link } from "react-router-dom";

import "./notFound.style.css";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="loginContainer rounded bg-white p-4">
        <h1>Error 404</h1>
        <h2 className="text-info">Not all who wander are lost...</h2>
        <p>Sorry that page does not exist on this site.</p>
        <p>
          <strong>
            Try returning to the <Link to="/">homepage.</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};
