import { storageService } from './async-storage.service.js';

const STORAGE_KEY = 'user';
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
};

function login(credentials) {
  return storageService.query(STORAGE_KEY).then(users => {
    const user = users.find(
      user => user.username === credentials.username && user.password === credentials.password
    );
    console.log('user - users.find - login user.service', user);
    
    _setLoggedinUser(user);
    return user;
  });
}
function signup(userInfo) {
  return storageService.post(STORAGE_KEY, userInfo).then(user => {
    _setLoggedinUser(user);
    return user;
  });
}
function logout() {
  localStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
  console.log('User is deleted from storage')
  return Promise.resolve();
}

function getLoggedinUser() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

function _setLoggedinUser(user) {
  localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}