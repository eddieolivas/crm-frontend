import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSucces: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSucces, loginFailed } = actions;

export default reducer;
