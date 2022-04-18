import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/store";
import OperationLoading from "../../shared/components/OperationLoading/OperationLoading";
import { MDBContainer } from "mdbreact";

import UserInformation from "../../components/Users/UserInformation";

class User extends Component {
  componentDidMount() {
    this.props.onInitUser();
  }

  render() {
    return (
      <MDBContainer fluid>
        <OperationLoading
          hide={
            this.props.LoadingCreate ||
            this.props.LoadingDelete ||
            this.props.LoadingEdit ||
            this.props.LoadingChangePassword
          }
        />
        <UserInformation
          rolesData={this.props.rolesData}
          usersData={this.props.usersData}
        />
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //roles
    rolesData: state.role.roles,

    //users
    usersData: state.users.users,
    loadingUsers: state.users.loading,
    //loading
    LoadingCreate: state.users.loadingCreateUser,
    LoadingDelete: state.users.loadingDeleteUser,
    LoadingEdit: state.users.loadingEditUser,
    LoadingChangePassword: state.users.loadingChangePassword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitUser: () => dispatch(actions.initFetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
