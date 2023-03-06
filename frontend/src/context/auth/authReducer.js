export const authReducer = (state, action) => {
  switch (action.type) {
    case "[Auth] - Load token from cookies | storage":
      return {
        ...state,
        token: action.payload,
      };
    case "[Auth] - Login":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        errorMessage: action.payload.errorMessage,
      };
    case "[Auth] - Register":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "[Auth] - Logout":
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };
    default:
      return state;
  }
};
