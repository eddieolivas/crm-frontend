import {
  passwordResetPending,
  passwordResetSuccess,
  passwordResetFailed,
  updatePasswordSuccess,
} from "./passwordResetSlice";

import { requestOtp, resetPassword } from "../../api/userApi";

export const passwordResetAction = (email) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(passwordResetPending());

      // Call API
      const { status, message } = await requestOtp(email);

      status === "success"
        ? dispatch(passwordResetSuccess({ message, email }))
        : dispatch(passwordResetFailed(message));
    } catch (error) {
      dispatch(passwordResetFailed(error.message));
    }
  });
};

export const updatePasswordAction = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(passwordResetPending());

      // Call API
      const { status, message } = await resetPassword(formData);

      status === "success"
        ? dispatch(updatePasswordSuccess(message))
        : dispatch(passwordResetFailed(message));
    } catch (error) {
      dispatch(passwordResetFailed(error.message));
    }
  });
};
