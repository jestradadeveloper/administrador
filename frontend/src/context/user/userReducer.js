export const userReducer = ( state,  action ) =>{
  switch(action.type){
    case '[User] Add-User':
      return {
        ...state,
        users: [ action.payload, ...state.users]
      }
    case '[User] Destroy-User':
      return {
        ...state,
        users: [...state.users]
      }
    case '[User] User-Updated':
      return {
        ...state,
        users: state.users.map(entry => {
          if(entry._id === action.payload._id){
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        })
      }
    case '[User] Refresh-Data':
      return{
        ...state,
        users: [  ...action.payload ]
      }
    default:
      return state;
  }
}