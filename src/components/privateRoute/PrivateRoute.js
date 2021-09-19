import React from "react";
import { Route, Redirect } from "react-router-dom";

import { DefaultLayout } from "../../layouts/DefaultLayout";

export const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = true;

  return (
    <Route
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
