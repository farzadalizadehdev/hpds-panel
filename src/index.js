import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

//material bootstrap dependencies
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './shared/assets/styles/style.css';
import App from './App';

//reducers
import authReducer from './store/auth/authReducer';
import usersReducer from './store/user/userReducer'

//middleware
// const logger = store => {
//   return next => {
//     return action => {
//       console.log ('Dispatching: ', action);
//       const result = next (action);
//       console.log ('Next State: ', store.getState ());
//       return result;
//     };
//   };
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

//store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
