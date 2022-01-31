import {userService} from '../../services/user.service.js';

export function login(credentials) {
  return async dispatch => {
    try {
      const user = await userService.login(credentials);
      dispatch({
        type: 'SET_USER',
        user,
      });
    } catch (err) {
      console.log('Cannot login', err);
    }
  };
}

export function signup(credentials) {
  return async dispatch => {
    try {
      const user = await userService.signup(credentials);
      dispatch({
        type: 'SET_USER',
        user,
      });
    } catch (err) {
      console.log('Error with signing up', err);
    }
  };
}

export function logout() {
  return async dispatch => {
    try {
      await userService.logout();
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    } catch (err) {
      console.log('Cannot logout');
    }
  };
}

export function loadUsers() {
  return async dispatch => {
    try {
      const users = await userService.getUsers();
      dispatch({type: 'SET_USERS', users});
    } catch (err) {
      console.log('Cannot load users', err);
    }
  };
}

export function setUser(user) {
  return dispatch => {
    dispatch({type: 'SET_USER', user});
  };
}

// export function loadUser(userId) {
//   return async dispatch => {
//     try {
//       const user = await userService.getUser(userId);
//       dispatch({type: 'SET_USER', user});
//     } catch (err) {
//       console.log('Cannot load user', err);
//     }
//   };
// }
