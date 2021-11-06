import {
  passwordResetPending,
  passwordResetSuccess,
  passwordResetFailed,
} from "./passwordResetSlice";

import { resetPassword } from "../../api/userApi";

export const passwordResetAction = (email) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(passwordResetPending());

      // Call API
      const { status, message } = await resetPassword(email);

      status === "success"
        ? dispatch(passwordResetSuccess(message))
        : dispatch(passwordResetFailed(message));
    } catch (error) {
      dispatch(passwordResetFailed(error.message));
    }
  });
};
