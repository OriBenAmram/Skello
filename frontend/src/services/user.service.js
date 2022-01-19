import {storageService} from './async-storage.service.js';

const STORAGE_KEY = 'user';
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  emptyUser,
  chargeAmount,
};

function login(credentials) {
  return storageService.query(STORAGE_KEY).then(users => {
    const user = users.find(
      user => user.username === credentials.username && user.password === credentials.password
    );

    _setLoggedinUser(user);

    return user;
  });
}
function signup(userInfo) {
  console.log("🚀 ~ file: user.service.js ~ line 27 ~ signup ~ userInfo", userInfo)
  return storageService.post(STORAGE_KEY, userInfo).then(user => {
    _setLoggedinUser(user);
    return user;
  });
}
function logout() {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
  return Promise.resolve();
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

function chargeAmount(amount) {
  const user = getLoggedinUser();
  user.score -= amount;
  if (user.score < 0) return Promise.reject('Not enough score');
  _setLoggedinUser(user);
  return Promise.resolve(user);
  // TODO: need to also update the user, in the user array in localStorage
}

function emptyUser() {
  return {
    username: '',
    password: '',
    fullname: '',
    score: 10000,
  };
}

function _setLoggedinUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Noya', score: 22})
// userService.login({ username: 'muki', password: 'muki1' })
