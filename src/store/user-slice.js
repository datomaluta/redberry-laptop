import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userFormIsValid: false },
  reducers: {
    setUserFormValid(state) {
      state.userFormIsValid = true;
    },
    setUserformInValid(state) {
      state.userFormIsValid = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
