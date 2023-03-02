import { useReducer, useEffect, useState } from "react";
import { TeamsContext, teamsReducer } from '..';
import { useSnackbar } from 'notistack';
import admApi from "../../utils/api";
const TEAMS_INITIAL_STATE = {
  teams: [],
};
export const TeamsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamsReducer, TEAMS_INITIAL_STATE);

  const { enqueueSnackbar } = useSnackbar();

  const addNewTeam = async (name, description) => {
    const { data } = await admApi.post("/teams", { team: { name, description } });
    dispatch({ type: "[Teams] Add-team", payload: data.data });
    enqueueSnackbar('teams added', {
      variant: 'success',
      autoHideDuration: 1500,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  };
  const refreshTeams = async () => {
    const { data } = await admApi.get('/teams');
    dispatch({ type: '[Teams] Refresh-Data', payload: data.data });
  }
  useEffect(() => {
    refreshTeams();
  }, [])
  const updatedTeam = () => {
  }
  const destroyTeam = async ({ id , showSnackbar = false }) => {

    try {
      const { data } = await admApi.delete(`/teams/${id}`);
      dispatch({ type: '[Teams] Destroy-team' });
      enqueueSnackbar('Deleted teams', {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      refreshTeams();

    } catch (err) {
    }
  }
  return (
    <TeamsContext.Provider
      value={{
        ...state,

        // Methods
        addNewTeam,
        updatedTeam,
        destroyTeam,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};
