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

const EditUser = (props) => {
  const handleConfirmEdit = () => {
    let params = ({});
    params["username"] = props.userInfo.username.toString();
    params["edit-type"] = props.editType.toString();
    props.onEditUser(params);
    props.toggle();
  };

  let modalText;
  let modalTitle;

  switch (props.editType) {
    case "DisableUser":
      modalText = "DISABLE USER";
      modalTitle = "Disable User";
      break;
    case "EnableUser":
      modalText = "ENABLE USER";
      modalTitle = "Enable User";
      break;
    case "DisableLdap":
      modalText = "DISABLE LDAP FOR USER";
      modalTitle = "Disable Ldap";
      break;
    case "EnableLdap":
      modalText = "ENABLE LDAP FOR USER";
      modalTitle = "Enable Ldap";
      break;
    default:
      break
  }

  return (
    <MDBModal
      size="md"
      className="modal-notify primary-color"
      top
      isOpen={props.isShowing}
      toggle={props.toggle}
    >
      <MDBModalHeader
        toggle={props.toggle}
        tag="h6"
        titleClass="font-weight-normal white-text"
      >
        {modalTitle}
      </MDBModalHeader>
      <MDBModalBody className="text-center">
        <MDBIcon icon="user-cog mb-3 animated pulse" size="4x" />
        <p>
          {`Are you sure you want to ${modalText} ${props.userInfo ? props.userInfo.username : null
            } ?`}
        </p>
      </MDBModalBody>
      <MDBModalFooter center>
        <MDBBtn className="mx-2 primary-color" color="" onClick={handleConfirmEdit}>
          yes, i sure
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
    onEditUser: (params) => dispatch(actions.initEditUser(params)),
  };
};

export default connect(null, mapDispatchToProps)(EditUser);
