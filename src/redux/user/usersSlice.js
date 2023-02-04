import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("userToken"),
  userShortDetile: {},
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
    getUserDetail: (state, action) => {
      state.userShortDetile.name = action.payload.name;
    },
  },
});

export const { logIn, logOut, getUserDetail } = userSlice.actions;

export default userSlice.reducer;
