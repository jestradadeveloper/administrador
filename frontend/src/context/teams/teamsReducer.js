export const teamsReducer = ( state,  action ) =>{
  switch(action.type){
    case '[Teams] Add-Team':
      return {
        ...state,
        teams: [ action.payload, ...state.teams]
      }
    case '[Teams] Destroy-Team':
      return {
        ...state,
        teams: [...state.teams]
      }
    case '[Teams] Team-Updated':
      return {
        ...state,
        teams: state.teams.map(team => {
          if(team._id === action.payload._id){
            team.name= action.payload.name;
            team.description = action.payload.description;
          }
          return team;
        })
      }
    case '[Teams] Refresh-Data':
      return{
        ...state,
        teams: [  ...action.payload ]
      }
    default:
      return state;
  }
}