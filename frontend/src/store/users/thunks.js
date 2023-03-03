import { addUser, refreshUsers, destroyUser, setUsers, startLoadingUsers } from "./usersSlice";
import admApi from "../../utils/api";

export const getUsers = () => {
  return async(dispatch, getState) => {
    dispatch(startLoadingUsers());
    const {data} = await admApi.get(`/users`)
    dispatch(setUsers({users: data.data}))
  };
};

export const addNewUser = (email, password ) => {
  return async(dispatch, getState) => {
    const { data } = await admApi.post("/users", { user: { email, password } });
    dispatch(addUser({user: data.data}))
  }
}

export const refreshAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingUsers());
    const { data } = await admApi.get(`/users`)
    dispatch(setUsers({ users: data.data }))
  };
};

export const destroyUserById = (id) => {
  return async (dispatch, getState) => {
    const { data: status } = await admApi.delete(`/users/${id}`);
    console.log(status)
    dispatch(destroyUser({ user_id: id }))
    const { data } = await admApi.get(`/users`)
    dispatch(refreshUsers({ users: data.data }))
  }
};