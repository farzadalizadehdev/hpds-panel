import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

//material bootstrap dependencies
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './shared/assets/styles/style.css';
import App from './App';

//reducers
import authReducer from './store/auth/authReducer';
import summaryReducer from './store/summary/summaryReducer'
import usersReducer from './store/user/userReducer'
import eventsReducer from './store/event/eventReducer'
import queueReducer from './store/queue/queueReducer'
import poolsReducer from './store/pool/poolReducer'
import storageReducer from './store/storage/storageReducer'
import diskReducer from './store/disk/diskReducer'
import driveReducer from './store/drive/driveReducer'
import lunReducer from './store/lun/lunReducer'
import rapidstoreReducer from './store/rapidstore/rapidstoreReducer'
import hostReducer from './store/host/hostReducer'
import initiatorReducer from './store/initiator/reducers/initiatorReducer'
import snapShotReducer from './store/snapshot/snapshotReducer'
import dnsReducer from './store/dns/dnsReducer'
import networkReducer from './store/network/networkReducer'
import performanceReducer from './store/monitoring/performanceReducer'
import iscsiReducer from './store/iscsi/iscsiReducer'
import resourceReducer from './store/systemResource/systemResourceReducer'
import accountReducer from './store/smtp/account/accountReducer'
import recipientReducer from './store/smtp/recipient/recipientReducer'
import roleReducer from './store/role/roleReducer'
import systemReducer from './store/system/systemReducer'
import ldapReducer from './store/ldap/ldapReducer'
import hardwareReducer from './store/hardware/hardwareReducer'
import systemNodeReducer from './store//node/nodeReducer'
//sagas
import { watchFetchInitiator } from './store/initiator/sagas';

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
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  summary: summaryReducer,
  users: usersReducer,
  events: eventsReducer,
  queue: queueReducer,
  pools: poolsReducer,
  storage: storageReducer,
  disk: diskReducer,
  driveGroup: driveReducer,
  luns: lunReducer,
  rapidstore: rapidstoreReducer,
  hosts: hostReducer,
  initiators: initiatorReducer,
  snapShot: snapShotReducer,
  dns: dnsReducer,
  network: networkReducer,
  performance: performanceReducer,
  iscsi: iscsiReducer,
  resource: resourceReducer,
  account: accountReducer,
  recipient: recipientReducer,
  role: roleReducer,
  system: systemReducer,
  ldap: ldapReducer,
  hardware: hardwareReducer,
  node: systemNodeReducer
});

//store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
const customHistory = createBrowserHistory();
sagaMiddleware.run(watchFetchInitiator)

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
