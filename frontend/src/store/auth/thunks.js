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
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
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

    //console.log(data);
    //dispatch(login(data));
    //const { token } = data;
    //localStorage.setItem("token", JSON.stringify(token));
  };
};

export const validateAuthSession = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
      console.log(token);
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
