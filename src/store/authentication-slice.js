import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
})

export const { login, logout} = authenticationSlice.actions
// export const authenticationActions = authenticaionSlice.actions

export default authenticationSlice;
