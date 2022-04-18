import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/store";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBModalHeader,
} from "mdbreact";

const DeleteUser = (props) => {
  const handleConfirmDelete = () => {
    props.onDeleteUser(props.userInfo.username.toString());
    props.toggle();
  };

  return (
    <MDBModal
      size="md"
      className="modal-notify modal-danger"
      top
      isOpen={props.isShowing}
      toggle={props.toggle}
    >
      <MDBModalHeader
        toggle={props.toggle}
        tag="h6"
        titleClass="font-weight-normal white-text"
      >
        Delete User
      </MDBModalHeader>
      <MDBModalBody className="text-center">
        <MDBIcon icon="trash mb-3 animated pulse" size="4x" />
        <p>
          {`Are you sure you want to delete user ${
            props.userInfo ? props.userInfo.username : null
          } ?`}
        </p>
      </MDBModalBody>
      <MDBModalFooter center>
        <MDBBtn className="mx-2" color="danger" onClick={handleConfirmDelete}>
          delete
        </MDBBtn>
        <MDBBtn className="mx-2" color="dark" outline onClick={props.toggle}>
          cancel
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (username) => dispatch(actions.initDeleteUser(username)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteUser);
