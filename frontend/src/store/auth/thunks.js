import admApi from "../../utils/api";
import authHeader from "../../utils/headers";
import { setIsLoading, finishLoading, setNotificationMessage } from "../ui";
import {
  checkingCredentials,
  login,
  setSavingOn,
  logout,
  updateErrorState,
  loadUserProfile,
  validateAuth,
} from "./authSlice";

export const startLoginAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(setIsLoading());
    const user = await admApi
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data));
        dispatch(login(response.data));
        dispatch(finishLoading());
        dispatch(
          setNotificationMessage(
            "Authentication Success! - Welcome to your dashboard"
          )
        );
        //aqui deberia cargar todos los nuevos datos
      })
      .catch((error) => {
        dispatch(
          setNotificationMessage(
            "sorry! :( we could not be able to verify your credentials, verify your email and password are correct"
          )
        );
        dispatch(finishLoading());
        dispatch(
          updateErrorState({
            messages: error.response.data.error,
            error: true,
          })
        );
      });
  };
};
export const getAuthenticatedUserInfo = () => {
  return async (dispatch) => {
    const { userId } = JSON.parse(localStorage.getItem("token")).user;

    const profile = await admApi
      .get(`/users/${userId}`, {
        headers: authHeader(),
      })
      .then((response) => {
        dispatch(loadUserProfile(response.data.data.attributes));
        //aqui deberia cargar todos los nuevos datos
      })
      .catch((error) => {
        dispatch(
          setNotificationMessage(
            "sorry! :( we could not be able to verify your credentials, try log in again"
          )
        );
        dispatch(
          updateErrorState({
            messages: error.response.data.error,
            error: true,
          })
        );
      });
  };
};

export const validateAuthSession = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : "";
      if (!!token) {
        dispatch(validateAuth(token));
      }
    } catch (error) {
      dispatch(
        setNotificationMessage(
          "sorry! :( we could not be able to verify your credentials, try log in again"
        )
      );
      localStorage.removeItem("token");
      dispatch(logout());
    }
  };
};

export const destroyAuthSession = () => {
  return async (dispatch) => {
    dispatch(
      setNotificationMessage(
        " :( you have leave your current session, we hope to you again soon"
      )
    );
    localStorage.removeItem("token");
    dispatch(logout());
  };
};
