import React, { useEffect } from "react";
import "./shared/assets/styles/style.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/store";
import RoutesWithNavigation from './shared/components/RoutesWithNavigation/RoutesWithNavigation';
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import AppContextProvider from "./context/app/app-context";

const App = props => {

  useEffect(() => {
    props.onTryAutoLogin();
  }, [])

  useEffect(() => {
    if (props.userInfo !== null) {
      props.onInitSummary();
    }
  }, [props.userInfo])

  return (
    <AppContextProvider>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/logout" exact component={Logout} />
        <RoutesWithNavigation isAuth={props.isAuthenticated} node={props.systemNode} userInfo={props.userInfo} summaryData={props.summaryData} loading={props.loadingSummary} />
      </Switch>
    </AppContextProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    //user
    isAuthenticated: state.auth.token !== null,
    userInfo: state.auth.username,
    //node
    systemNode: state.node.node,
    //summaryData
    summaryData: state.summary.summary,
    loadingSummary: state.summary.loading,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
