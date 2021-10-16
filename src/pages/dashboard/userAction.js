import { getUserFailed, getUserPending, getUserSuccess } from "./userSlice";
import { getUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const result = await getUser();

    if (result.user && result.user._id) {
      return dispatch(getUserSuccess(result.user));
    }

    dispatch(getUserFailed("User is not found."));
  } catch (error) {
    dispatch(getUserFailed(error));
  }
};
