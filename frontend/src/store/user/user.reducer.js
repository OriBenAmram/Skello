import { userService } from '../../services/user.service.js';

const initialState = {
  loggedinUser: null,
  // loggedinUser: userService.getLoggedinUser() || userService.loginAsGuest(),
  users: [],
  // users: userService.getUsers(),
};

export function userReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_USER':
      return (newState = { ...state, loggedinUser: { ...action.user } });
    case 'SET_USERS':
      return (newState = { ...state, users: [...action.users] });
    default:
      return newState;
  }
}
