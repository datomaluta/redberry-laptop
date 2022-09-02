import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userInfo: {
      enteredName: "",
      enteredSurname: "",
      team: "",
      psoition: "",
      mail: "",
      phoneNumber: "",
    },
  },
  reducers: {
    replaceUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
