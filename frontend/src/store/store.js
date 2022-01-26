import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { userReducer } from './user/user.reducer.js';
import { boardReducer } from './board/board.reducer.js'
import { appReducer } from './app/app.reducer.js'

const rootReducer = combineReducers({
  boardModule: boardReducer,
  userModule: userReducer,
  appModule: appReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
