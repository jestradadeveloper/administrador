import { addTeam, refreshTeams, destroyTeam, setTeams, startLoadingTeams } from "./teamsSlice";
import admApi from "../../utils/api";

export const getTeams = () => {
  return async(dispatch, getState) => {
    dispatch(startLoadingTeams());
    const {data} = await admApi.get(`/teams`)
    dispatch(setTeams({teams: data.data}))
  };
};


export const addNewTeam = (name, description, startDate,  endDate, userId ) => {
  return async(dispatch, getState) => {
    const { data } = await admApi.post("/teams", { team: { name, description, start_date: startDate, end_date: endDate, user_id: userId} });
    dispatch(addTeam({team: data.data}))
  }
}

export const refreshAllTeams = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTeams());
    const { data } = await admApi.get(`/teams`)
    dispatch(setTeams({ teams: data.data }))
  };
};


export const destroyTeamById = (id) => {
  return async (dispatch, getState) => {
    const { data: status } = await admApi.delete(`/teams/${id}`);
    console.log(status)
    dispatch(destroyTeam({ team_id: id }))
    const { data } = await admApi.get(`/teams`)
    dispatch(refreshTeams({ teams: data.data }))
  }
};