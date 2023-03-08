import {
  addTeam,
  refreshTeams,
  destroyTeam,
  setTeams,
  startLoadingTeams,
  updateErrorTeamState,
  removeParticipantFromTeam,
  setParticipantsTeamId,
} from "./teamsSlice";
import admApi from "../../utils/api";
import authHeader from "../../utils/headers";
import { finishLoading, setIsLoading } from "../ui";

export const getTeams = () => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    dispatch(startLoadingTeams());
    const { data } = await admApi.get(`/teams`, {
      headers: authHeader(),
    });
    dispatch(setTeams({ teams: data.data }));
    dispatch(finishLoading());
  };
};

export const addNewTeam = (name, description, startDate, endDate, userId) => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    const team = await admApi
      .post("/teams", {
        team: {
          name,
          description,
          start_date: startDate,
          end_date: endDate,
          user_id: userId,
        },
        headers: authHeader(),
      })
      .then((response) => {
        dispatch(addTeam({ team: response.data.data }));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(
          updateErrorTeamState({
            message: JSON.stringify(error.response.data.errors),
            error: true,
          })
        );
      });
  };
};
export const showParticipantsByTeamId = (teamId) => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    const team = await admApi
      .get(`/teams/${teamId}?include=participants&fields[user]=email,name`, {
        headers: authHeader(),
      })
      .then((response) => {
        const participants = response.data.included;
        dispatch(setParticipantsTeamId({ participants }));
        dispatch(finishLoading());
      })
      .catch((error) => console.log(error));
  };
};
export const addParticipantsByTeamId = (teamId, userIds) => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    const team = await admApi
      .post("/members", {
        member: {
          team_id: teamId,
          user_ids: userIds,
        },
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response);
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(
          updateErrorTeamState({
            message: JSON.stringify(error.response.data.errors),
            error: true,
          })
        );
      });
  };
};

export const destroyMemberFromTeam = (teamId, userId) => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    const team = await admApi
      .post(`/participant`, {
        member: {
          team_id: teamId,
          user_id: userId,
        },
        headers: authHeader(),
      })
      .then((response) => {
        dispatch(removeParticipantFromTeam({ userId }));
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          updateErrorTeamState({
            message: JSON.stringify(error.response.data.errors),
            error: true,
          })
        );
      });
  };
};

export const refreshAllTeams = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTeams());
    const { data } = await admApi.get(`/teams`);
    dispatch(setTeams({ teams: data.data }));
  };
};

export const destroyTeamById = (id) => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    const { data: status } = await admApi.delete(`/teams/${id}`, {
      headers: authHeader(),
    });
    dispatch(finishLoading());
    dispatch(destroyTeam({ id: id }));
  };
};
