import {
  registrationPending,
  registrationSuccess,
  registrationFailed,
} from "./registrationSlice";

import { registerNewUser } from "../../api/userApi";

export const userRegistration = (formData) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(registrationPending());

      // Call API
      const result = await registerNewUser(formData);

      result.status === "success"
        ? dispatch(registrationSuccess(result.message))
        : dispatch(registrationFailed(result.message));
    } catch (error) {
      dispatch(registrationFailed(error.message));
    }
  });
};
