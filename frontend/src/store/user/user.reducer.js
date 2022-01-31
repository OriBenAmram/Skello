const initialState = {
  loggedinUser: null,
  users: [],
};

export function userReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_USER':
      return (newState = {...state, loggedinUser: {...action.user}});
    case 'SET_USERS':
      return (newState = {...state, users: [...action.users]});
    default:
      return newState;
  }
}
