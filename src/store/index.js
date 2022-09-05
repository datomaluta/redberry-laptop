import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import laptopSlice from "./laptop-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    laptop: laptopSlice.reducer,
  },
});

export default store;
