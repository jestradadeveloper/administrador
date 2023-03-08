import {
  refreshAccounts,
  addAccount,
  destroyAccount,
  setAccounts,
  accountRefresh,
  startLoadingAccounts,
  updateErrorAccountState,
} from "./accountsSlice";
import admApi from "../../utils/api";
import authHeader from "../../utils/headers";
import { finishLoading, setIsLoading } from "../ui";

export const getAccounts = () => {
  return async (dispatch, getState) => {
    //dispatch(startLoadingAccounts());
    const { data } = await admApi.get(`/accounts`, {
      headers: authHeader(),
    });
    dispatch(setAccounts({ accounts: data.data }));
  };
};

export const addNewAccount = (name, client, teamId, userId) => {
  console.log("teamId", teamId);
  return async (dispatch) => {
    const account = await admApi
      .post("/accounts", {
        account: { name, client, team_id: teamId, user_id: userId },
        headers: authHeader(),
      })
      .then((response) => dispatch(addAccount({ account: response.data.data })))
      .catch((error) => {
        dispatch(
          updateErrorAccountState({
            message: JSON.stringify(error.response.data.errors),
            error: true,
          })
        );
      });
  };
};

export const updateAccount = (name, client, teamId, accountId) => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    console.log("team", teamId);
    console.log("account", accountId);
    const account = await admApi
      .patch(`/accounts/${accountId}`, {
        account: { name, client, team_id: teamId },
        headers: authHeader(),
      })
      .then((response) => {
        dispatch(finishLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(finishLoading());
        dispatch(
          updateErrorAccountState({
            message: JSON.stringify(error.response.data.errors),
            error: true,
          })
        );
      });
  };
};
export const refreshAllAccounts = () => {
  return async (dispatch) => {
    dispatch(startLoadingAccounts());
    const { data } = await admApi.get(`/accounts`, { headers: authHeader() });
    dispatch(setAccounts({ accounts: data.data }));
  };
};

export const destroyAccountById = (id) => {
  return async (dispatch) => {
    const { data: status } = await admApi.delete(`/accounts/${id}`, {
      headers: authHeader(),
    });
    dispatch(destroyAccount({ id: id }));
  };
};
