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
import {
  addErrorMessages,
  finishLoading,
  setIsLoading,
  setNotificationMessage,
} from "../ui";

export const getAccounts = () => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    try {
      const { data } = await admApi.get(`/accounts`, {
        headers: authHeader(),
      });
      dispatch(setAccounts({ accounts: data.data }));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(setIsLoading());
      dispatch(
        setNotificationMessage(
          "Ups! we were not be able to response from ours servers, try again later"
        )
      );
      dispatch(addErrorMessages(error.errors));
    }
  };
};

export const addNewAccount = (name, client, teamId, userId) => {
  return async (dispatch) => {
    const account = await admApi
      .post("/accounts", {
        account: { name, client, team_id: teamId, user_id: userId },
        headers: authHeader(),
      })
      .then((response) => {
        dispatch(addAccount({ account: response.data.data }));
        dispatch(
          setNotificationMessage(
            "Congrats! your account was created successfully"
          )
        );
      })
      .catch((error) => {
        //TODO categorizar errores de axios y de la api
        dispatch(
          setNotificationMessage(
            "Sorry! we could not be able to create this account, try again"
          )
        );
      });
  };
};

export const updateAccount = (name, client, teamId, accountId) => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    const account = await admApi
      .patch(`/accounts/${accountId}`, {
        account: { name, client, team_id: teamId },
        headers: authHeader(),
      })
      .then((response) => {
        dispatch(finishLoading());
        dispatch(
          setNotificationMessage(
            "Congrats! your account was updated successfully"
          )
        );
      })
      .catch((error) => {
        //TODO categorizar errores de axios y de la api
        dispatch(finishLoading());
        dispatch(
          setNotificationMessage(
            "Sorry! we could not create your account try again"
          )
        );
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
    try {
      const { data: status } = await admApi.delete(`/accounts/${id}`, {
        headers: authHeader(),
      });
      dispatch(destroyAccount({ id: id }));
      dispatch(setNotificationMessage("Congrats! your account was delete it"));
    } catch (error) {
      //TODO categorizar errores de axios y de la api
      dispatch(
        setNotificationMessage(
          "Sorry :( we were not be able to delete this Account from our database"
        )
      );
    }
  };
};
