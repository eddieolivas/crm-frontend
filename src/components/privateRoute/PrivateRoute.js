import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginSuccess } from "../Login/loginSlice";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { getNewAccessJWT } from "../../api/userApi";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await getNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    updateAccessJWT();

    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
