import { useReducer, useEffect, useState } from "react";
import { AuthContext, authReducer } from "..";
import Cookies from "js-cookie";
import axios from "axios";
import admApi from "../../utils/api";

const AUTH_INITIAL_STATE = {
  isLoggedIn: false,
  user: undefined,
  errorMessage: null,
};
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    isLoggedIn: !!user,
    user: user,
    errorMessage: null,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE, init);
  useEffect(() => {
    //checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const tokenGuardado = JSON.parse(localStorage.getItem("token"));
      const { data } = await admApi.post("/auth/validate-token", {
        tokenGuardado,
      });
      const { token, user } = data;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "[Auth] - Login", payload: user });
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  const loginUser = async (email, password) => {
    try {
      const { data } = await admApi.post("/api/v1/auth/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "[Auth] - Login", payload: user });
    } catch (error) {
      return {
        user: null,
        isLoggedIn: false,
        errorMessage: error.response.data.error,
      };
    }
  };

  const registerUser = async (email, password) => {
    try {
      const { data } = await admApi.post("/users", {
        user: { email, password },
      });
      const { user } = data;
      dispatch({ type: "[Auth] - Register", payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }

      return {
        hasError: true,
        message: "No se pudo crear el usuario - intente de nuevo",
      };
    }
  };
  const logout = () => {
    dispatch({ type: "[Auth] - Logout" });
    localStorage.clear();
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
