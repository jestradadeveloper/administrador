import {
  addTeam,
  refreshTeams,
  destroyTeam,
  setTeams,
  startLoadingTeams,
  updateErrorTeamState,
  setParticipantsTeamId,
} from "./teamsSlice";
import admApi from "../../utils/api";
import authHeader from "../../utils/headers";

export const getTeams = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTeams());
    const { data } = await admApi.get(`/teams`, {
      headers: authHeader(),
    });
    dispatch(setTeams({ teams: data.data }));
  };
};

export const addNewTeam = (name, description, startDate, endDate) => {
  return async (dispatch, getState) => {
    const team = await admApi
      .post("/teams", {
        team: {
          name,
          description,
          start_date: startDate,
          end_date: endDate,
        },
        headers: authHeader(),
      })
      .then((response) => dispatch(addTeam({ team: response.data.data })))
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
    const team = await admApi
      .get(`/teams/${teamId}?include=participants&fields[user]=email,name`, {
        headers: authHeader(),
      })
      .then((response) => {
        const participants = response.data.included;
        dispatch(setParticipantsTeamId({ participants }));
      })
      .catch((error) => console.log(error));
  };
};
export const addParticipantsByTeamId = (teamId, userIds) => {
  return async (dispatch, getState) => {
    const team = await admApi
      .post("/members", {
        member: {
          team_id: teamId,
          user_ids: userIds,
        },
        headers: authHeader(),
      })
      .then((response) => console.log(response))
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
    const team = await admApi
      .post(`/participant`, {
        member: {
          team_id: teamId,
          user_id: userId,
        },
        headers: authHeader(),
      })
      .then((response) => dispatch(removeParticipantFromTeam({ userId })))
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

export const refreshAllTeams = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingTeams());
    const { data } = await admApi.get(`/teams`);
    dispatch(setTeams({ teams: data.data }));
  };
};

export const destroyTeamById = (id) => {
  return async (dispatch, getState) => {
    const { data: status } = await admApi.delete(`/teams/${id}`, {
      headers: authHeader(),
    });
    dispatch(destroyTeam({ id: id }));
  };
};
