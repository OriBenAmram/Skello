import {userService} from '../../services/user.service.js';

const initialState = {
  loggedinUser: userService.getLoggedinUser(),
  // loggedinUser: userService.getLoggedinUser() || userService.loginAsGuest(),
  users: userService.getUsers(),
};

export function userReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_USER':
      return (newState = {...state, loggedinUser: action.user});

    default:
      return newState;
  }
}
