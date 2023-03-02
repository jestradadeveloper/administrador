import { useReducer, useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import admApi from "../../utils/api";
import { userReducer, UserContext } from "..";
const USERS_INITIAL_STATE = {
  users: [],
  teams: [],
  accounts: []
};
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, USERS_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();
  const addNewUser = async (email, password) => {
    const { data } = await admApi.post("/users", { user: { email, password } });
    dispatch({ type: "[User] Add-User", payload: data.data });
    enqueueSnackbar('User added', {
      variant:'success',
      autoHideDuration: 1500,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  };
  const refreshUsers = async () => {
    const { data } = await admApi.get('/users');
    dispatch({ type: '[User] Refresh-Data', payload: data.data });
  }
  useEffect(() => {
    refreshUsers();
  }, [])
  const updatedUser = () => {
  }
  const destroyUser = async({ id , showSnackbar = false }) => {
   
    try{
    const { data } = await admApi.delete(`/users/${id}` );
    dispatch({type: '[User] Destroy-User'}) ;
    enqueueSnackbar('Deleted User', {
      variant:'error',
      autoHideDuration: 1500,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
      refreshUsers();

    }catch(err){
    }
  }
  return (
    <UserContext.Provider
      value={{
        ...state,

        // Methods
        addNewUser,
        updatedUser,
        destroyUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
