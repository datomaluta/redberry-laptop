import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: { teams: [], positons: [] },
  reducers: {
    setTeams(state, action) {
      state.teams = action.payload;
    },
    setPositions(state, action) {
      state.positons = action.payload;
    },
  },
});

export const userActions = createSlice.actions;
export default userSlice;
