import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, validateAuthSession } from "../store";
import admApi from "../utils/api";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged();
  }, []);
  const onAuthStateChanged = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token").token);
      if (token) {
        const { data } = await admApi.post("/auth/validate-token", {
          token: token,
        });
        dispatch(validateAuthSession(data));
        dispatch(login(data));

        return true;
      } else {
        dispatch(logout());
      }
      console.log(token);
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return status;
};
