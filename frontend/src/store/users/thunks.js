import {
  addUser,
  refreshUsers,
  destroyUser,
  setUsers,
  updateErrorUserState,
  startLoadingUsers,
  setUserFormMode,
} from "./usersSlice";
import admApi from "../../utils/api";
import authHeader from "../../utils/headers";
import { finishLoading, setIsLoading } from "../ui";
import { setSavingOn } from "../auth";

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

export const updateProfileData = (userInfo) => {
  const { userId } = JSON.parse(localStorage.getItem("token")).user;
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    const user = await admApi
      .patch(`/users/${userId}`, {
        user: {
          name: userInfo.name,
          email: userInfo.email,
          english_level: userInfo["english-level"],
          technical_knowledge: userInfo["technical-knowledge"],
          resume_link: userInfo["resume-link"],
        },
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response);
        dispatch(finishLoading());
        dispatch(setUserFormMode());
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
