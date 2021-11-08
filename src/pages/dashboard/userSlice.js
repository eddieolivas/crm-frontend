import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.user = {};
    },
  },
});

const { reducer, actions } = userSlice;
export const { getUserFailed, getUserPending, getUserSuccess } = actions;

export default reducer;
