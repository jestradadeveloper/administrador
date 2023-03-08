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
import {
  addErrorMessages,
  finishLoading,
  setIsLoading,
  setNotificationMessage,
} from "../ui";
import { setSavingOn } from "../auth";

export const getUsers = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingUsers());
    const data = await admApi
      .get(`/users`, { headers: authHeader() })
      .then((response) => {
        dispatch(setUsers({ users: response.data.data }));
      })
      .catch((error) => {
        dispatch(
          setNotificationMessage(
            "Sorry :( we were not be able to users from our servers try later"
          )
        );
        dispatch(addErrorMessages(error.errors));
      });
  };
};

export const addNewUser = (email, password, name) => {
  return async (dispatch, getState) => {
    dispatch(setIsLoading());
    const data = await admApi
      .post(
        "/users",
        { user: { email, password, name } },
        { headers: authHeader() }
      )
      .then((response) => {
        dispatch(addUser({ user: response.data.data }));
        dispatch(setNotificationMessage("Congrats! :) a new user was created"));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(setIsLoading());
        dispatch(
          setNotificationMessage(
            "Sorry! :) We could not be able to create a new user, try again later"
          )
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
        dispatch(finishLoading());
        dispatch(setUserFormMode());
        dispatch(
          setNotificationMessage(
            "Congrats! your profile information was updated correctly"
          )
        );
      })
      .catch((error) => {
        //TODO categorizar los errores del servidor
        dispatch(setIsLoading());
        dispatch(
          setNotificationMessage(
            "sorry! :( we could not be able to update this user profile info"
          )
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
    try {
      const { data: status } = await admApi.delete(`/users/${id}`, {
        headers: authHeader(),
      });
      dispatch(destroyUser({ id: id }));
      dispatch(setNotificationMessage("User was remove it successfully"));
    } catch (error) {
      dispatch(setIsLoading());
      dispatch(
        setNotificationMessage(
          "sorry! :( we could not be able to remove this user from our servers, try again later"
        )
      );
    }
  };
};
