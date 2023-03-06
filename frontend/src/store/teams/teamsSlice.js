import { createSlice } from "@reduxjs/toolkit";

export const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    isSaving: false,
    teams: [],
    isLoading: false,
    active: null,
    participants: [],
  },
  reducers: {
    refreshTeams: (state, action) => {
      state.teams = action.payload.teams;
    },
    addTeam: (state, action) => {
      state.teams.unshift(action.payload.team);
    },
    setTeams: (state, action) => {
      state.isLoading = false;
      state.teams = action.payload.teams;
    },
    setActiveTeam: (state, action) => {
      state.active = action.payload;
    },
    savingNewTeam: (state) => {
      state.isSaving = true;
    },
    setTeamById: (state, action) => {
      state.active = state.teams.find(
        (obj) => obj.id === action.payload
      ).attributes;
    },
    setParticipantsTeamId: (state, action) => {
      state.participants = action.payload.participants;
    },
    updateErrorTeamState: (state, action) => {
      state.error = action.payload.error;
      state.errorMessages = action.payload.message;
    },
    destroyTeam: (state, action) => {
      state.teams = state.teams.filter((obj) => obj.id !== action.payload.id);
    },
    removeParticipantFromTeam: () => {
      state.participants = state.participants.filter(
        (obj) => obj.id !== action.payload.userId
      );
    },
    startLoadingTeams: (state) => {
      state.isLoading = true;
    },
    destroyTeamsData: (state, action) => {
      state.teams = [];
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addTeam,
  setActiveTeam,
  savingNewTeam,
  refreshTeams,
  setTeams,
  destroyTeam,
  updateErrorTeamState,
  destroyTeamsData,
  setTeamById,
  startLoadingTeams,
  setParticipantsTeamId,
  removeParticipantFromTeam,
} = teamsSlice.actions;
