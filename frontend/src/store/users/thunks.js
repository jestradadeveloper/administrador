import {
  addUser,
  refreshUsers,
  destroyUser,
  setUsers,
  updateErrorUserState,
  startLoadingUsers,
} from "./usersSlice";
import admApi from "../../utils/api";
import authHeader from "../../utils/headers";

export const getUsers = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingUsers());
    const data = await admApi
      .get(`/users`, { headers: authHeader() })
      .then((response) => {
        dispatch(setUsers({ users: response.data.data }));
      })
      .catch((error) => console.log(error));
  };
};

export const addNewUser = (email, password, name) => {
  return async (dispatch, getState) => {
    const data = await admApi
      .post(
        "/users",
        { user: { email, password, name } },
        { headers: authHeader() }
      )
      .then((response) => {
        dispatch(addUser({ user: response.data.data }));
      })
      .catch((error) => {
        dispatch(
          updateErrorUserState({
            message: JSON.stringify(error.response.data.errors),
            error: true,
          })
        );
      });
  };
};

export const refreshAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingUsers());
    const { data } = await admApi.get(`/users`, { headers: authHeader() });
    dispatch(setUsers({ users: data.data }));
  };
};

export const destroyUserById = (id) => {
  return async (dispatch, getState) => {
    const { data: status } = await admApi.delete(`/users/${id}`, {
      headers: authHeader(),
    });
    dispatch(destroyUser({ id: id }));
  };
};
