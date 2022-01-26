import {storageService} from './async-storage.service.js';
import {httpService} from './http.service.js';

const STORAGE_KEY = 'user';
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

// TODO: check with ori if need, can refactor after using MongoDB
// signupGuest();

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
};

async function login(userCred) {
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

// function login(credentials) {
//   return storageService.query(STORAGE_KEY).then(users => {
//     const user = users.find((user) => {
//       return (user.username === credentials.username && user.password === credentials.password)
//     }
//     );
//     _setLoggedinUser(user);
//     return user;
//   });
// }

async function signup(userCred) {
  try {
    await httpService.post('auth/signup', userCred);
    login(userCred);
  } catch (err) {
    console.log('Cannot signup', err);
  }
}

// function signup(userInfo) {
//   return storageService.post(STORAGE_KEY, userInfo).then(user => {
//     _setLoggedinUser(user);
//     return user;
//   });
// }

// TODO: Check if need this?
async function signupGuest() {
  const userCred = {
    fullname: 'Guest',
    imgUrl: '../assets/imgs/female-guest.svg',
    username: 'guest.skello@gmail.com',
    password: '13579',
  };
  try {
    const user = signup(userCred);
    login(JSON.stringify(user));
  } catch (err) {
    console.log('Cannot signup guest', err);
  }
}
// async function signupGuest() {
//   const userInfo = {
//     fullname: 'Guest',
//     imgUrl: '../assets/imgs/female-guest.svg',
//     username: 'guest.skello@gmail.com',
//     password: '13579',
//   };
//   let user = null;
//   try {
//     user = await storageService.post(STORAGE_KEY, userInfo);
//   } catch {}
//   // _setLoggedinUser(user);
//   return user;
// }

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN);
  try {
    return await httpService.post('auth/logout');
  } catch (err) {
    console.log('Cannot logout', err);
  }
}
// async function logout() {
//   sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
//   // socketService.emit('unset-user-socket');
//   // return await httpService.post('auth/logout')
// }
// function logout() {
//   localStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
//   console.log('User is deleted from storage');
//   return Promise.resolve();
// }

async function loginAsGuest() {
  const userCred = {
    username: 'guest',
    password: 'guest123',
  };
  login(userCred);
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

// Localstorage
// function _setLoggedinUser(user) {
//   localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
// }
