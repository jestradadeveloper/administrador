import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    isLoading: false
  },
  reducers: {
    refreshTeams: (state, action ) => {
      state.teams = action.payload.teams;
    },
    addTeam: (state, action) => {
      state.teams.unshift(action.payload.team)
    },
    setTeams: (state, action) => {
      state.isLoading = false;
      state.teams = action.payload.teams;
    },
    destroyTeam: (state, payload) => {
    },
    startLoadingTeams: (state) => {
      state.isLoading = true;
    }
  }
});
// Action creators are generated for each case reducer function
export const { addTeam, refreshTeams, setTeams, destroyTeam, startLoadingTeams } = teamsSlice.actions;