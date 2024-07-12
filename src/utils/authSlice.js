import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // user: localStorage.getItem("user")
    //   ? JSON.parse(localStorage.getItem("user"))
    //   : null,
    user: null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;
