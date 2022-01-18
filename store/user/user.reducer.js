// import { userService } from '../services/user.service.js'

const initialState = {
  loggedinUser: userService.getLoggedinUser(),
  users: [],
};

export function userReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_USER':
      return (newState = {...state, loggedinUser: action.user});

    case 'SET_USERS':
      return (newState = {...state, users: action.users});

    default:
      return {...state};
  }
  // For debug:
  // window.userState = newState;
  // console.log('State:', newState);
  return newState;
}
