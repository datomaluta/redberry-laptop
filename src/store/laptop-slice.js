import { createSlice } from "@reduxjs/toolkit";

const laptopSlice = createSlice({
  name: "laptop",
  initialState: { laptopFormIsValid: false },
  reducers: {
    setLaptopFormValid(state) {
      state.laptopFormIsValid = true;
    },
    setLaptopformInValid(state) {
      state.laptopFormIsValid = false;
    },
  },
});

export const laptopActions = laptopSlice.actions;

export default laptopSlice;
