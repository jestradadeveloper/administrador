import admApi from "../../utils/api";
import Cookies from "js-cookie";
import {
  checkingCredentials,
  login,
  logout,
  updateErrorState,
  validateAuth,
} from "./authSlice";
import { useNavigate } from "react-router-dom";
// initialize userToken from cookie

export const startLoginAuthentication = (email, password) => {
  return async (dispatch) => {
    //dispatch(checkingCredentials(email, password));
    const user = await admApi
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data));
        dispatch(login(response.data));
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
        ? localStorage.getItem("token")
        : "";

      dispatch(validateAuth(token));
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
