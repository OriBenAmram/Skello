// import {storageService} from './async-storage.service.js';
import {httpService} from './http.service.js';

// const STORAGE_KEY = 'user';
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getUsers,
  loginAsGuest,
};

async function login(userCred) {
  console.log('🚀 ~ file: user.service.js ~ line 17 ~ login ~ userCred', userCred);
  try {
    const user = await httpService.post('auth/login', userCred);
    if (user) return _saveLocalUser(user);
  } catch (err) {
    console.log('Cannot login', err);
  }
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
  return user;
}

async function signup(userCred) {
  try {
    await httpService.post('auth/signup', userCred);
    login(userCred);
  } catch (err) {
    console.log('Cannot signup', err);
  }
}

async function loginAsGuest() {
  const userCred = {
    username: 'guest',
    password: 'guest123',
  };
  try {
    const user = await login(userCred);
    console.log('user from get guest', user);
    return user;
  } catch (err) {
    console.log('Cant login as guest', err);
  }
}

// async function signupGuest() {
//   const userCred = {
//     fullname: 'Guest',
//     imgUrl: '../assets/imgs/female-guest.svg',
//     username: 'guest.skello@gmail.com',
//     password: '13579',
//   };
//   try {
//     const user = signup(userCred);
//     login(JSON.stringify(user));
//   } catch (err) {
//     console.log('Cannot signup guest', err);
//   }
// }

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN);
  try {
    return await httpService.post('auth/logout');
  } catch (err) {
    console.log('Cannot logout', err);
  }
}

async function getUsers() {
  try {
    const users = await httpService.get('user');
    if (!users) return [];
    return users;
  } catch (err) {
    console.log('Cannot logout', err);
  }
}

function getLoggedinUser() {
  const loggedinUser = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN) || null);
  console.log('loggedinUser from service', loggedinUser);
  return loggedinUser;
}
