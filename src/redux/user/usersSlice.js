import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken");

const initialState = {
  isLoggedIn: !!userToken,
  userShortDetile: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    getUserDetail: (state, actions) => {
      state.userShortDetile = actions.payload;
    },
  },
});

export const { logIn, logOut, getUserDetail } = userSlice.actions;

export default userSlice.reducer;
