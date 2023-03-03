import { refreshAccounts, addAccount, destroyAccount, setAccounts, startLoadingAccounts } from "./accountsSlice";
import admApi from "../../utils/api";

export const getAccounts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingAccounts());
    const { data } = await admApi.get(`/accounts`)
    dispatch(setAccounts({ accounts: data.data }))
  };
};


export const addNewAccount = (name, client) => {
  return async (dispatch, getState) => {
    const { data } = await admApi.post("/accounts", { account: { name, client, user_id: 2, team_id: 1 } });
    dispatch(addAccount({ account: data.data }))
  }
};

export const refreshAllAccounts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingAccounts());
    const { data } = await admApi.get(`/accounts`)
    dispatch(setAccounts({ accounts: data.data }))
  };
};

export const destroyAccountById = (id) => {
  return async (dispatch, getState) => {
    const { data: status } = await admApi.delete(`/accounts/${id}`);
    console.log(status)
    dispatch(destroyAccount({ account_id: id }))
    const { data } = await admApi.get(`/accounts`)
    dispatch(refreshAccounts({ accounts: data.data }))
  }
};