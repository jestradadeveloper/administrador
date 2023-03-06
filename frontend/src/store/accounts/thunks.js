import {
  refreshAccounts,
  addAccount,
  destroyAccount,
  setAccounts,
  startLoadingAccounts,
  updateErrorAccountState,
} from "./accountsSlice";
import admApi from "../../utils/api";

export const getAccounts = () => {
  return async (dispatch, getState) => {
    //dispatch(startLoadingAccounts());
    const { data } = await admApi.get(`/accounts`, {
      headers: { Authorization: "" + localStorage.getItem("token") },
    });
    dispatch(setAccounts({ accounts: data.data }));
  };
};

export const addNewAccount = (name, client, teamId) => {
  return async (dispatch, getState) => {
    const account = await admApi
      .post("/accounts", {
        account: { name, client, team_id: teamId },
        headers: { Authorization: "" + localStorage.getItem("token") },
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

export const refreshAllAccounts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingAccounts());
    const { data } = await admApi.get(`/accounts`);
    dispatch(setAccounts({ accounts: data.data }));
  };
};

export const destroyAccountById = (id) => {
  return async (dispatch, getState) => {
    const { data: status } = await admApi.delete(`/accounts/${id}`);
    dispatch(destroyAccount({ id: id }));
  };
};
