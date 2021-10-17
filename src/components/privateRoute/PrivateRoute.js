import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginSuccess } from "../Login/loginSlice";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { getNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await getNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateAccessJWT();

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
    !user._id && dispatch(getUserProfile());
  }, [dispatch, isAuth, user._id]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
