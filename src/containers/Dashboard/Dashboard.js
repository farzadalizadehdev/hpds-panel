import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/store";
import { AppContext } from "../../context/app/app-context";
import DV1 from "./V1/DV1";
import DV2 from "./V2/DV2";
import DashboardItems from "../../components/Dashboard/DashboardItems/DashboardItems";

const Dashboard = props => {

  useEffect(() => {
    props.onInitUsers();
    props.onInitEvents();
    if (!props.systemNode) {
      props.onGetNode();
    }
  }, [])

  const appContext = useContext(AppContext)
  return (
    <>
      {appContext.dashboardLayout === "layout1" ?
        <DV1 poolData={props.summaryData}
          summaryData={props.summaryData}
          events={props.eventsData}
          onlineUsers={props.onlineUsersData}
          loadingSummary={props.loadingSummary}
        /> :
        <DV2 poolData={props.summaryData}
          summaryData={props.summaryData}
          events={props.eventsData}
          onlineUsers={props.onlineUsersData}
          loadingSummary={props.loadingSummary}
        />
      }
      <DashboardItems />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    //summary
    summaryData: state.summary.summary,
    //users
    onlineUsersData: state.users.onlineUsers,
    //events
    eventsData: state.events.events,
    //node
    systemNode: state.node.node,
    //loading
    loadingSummary: state.summary.loading,
    loadingUsers: state.users.loading,
    loadingEvents: state.events.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitUsers: () => dispatch(actions.initFetchUsers()),
    onInitEvents: () => dispatch(actions.initFetchEvents()),
    onGetNode: () => dispatch(actions.initgetNodes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
