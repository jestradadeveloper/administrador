import admApi from "../../utils/api";
import authHeader from "../../utils/headers";
import { setIsLoading, finishLoading } from "../ui";
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
        //aqui deberia cargar todos los nuevos datos
      })
      .catch((error) => {
        console.log(error);
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
      .catch((error) =>
        dispatch(
          updateErrorState({
            messages: error.response.data.error,
            error: true,
          })
        )
      );
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
      localStorage.removeItem("token");
      dispatch(logout());
    }
  };
};

export const destroyAuthSession = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
};
