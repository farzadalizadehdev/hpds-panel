import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/store";
import PasswordField from "../../../shared/components/PasswordField/PasswordField";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBInput,
  MDBSelect,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { updateObject } from "../../../utility/Utility";

const CreateUser = (props) => {

  const [formData, setFormData] = useState({
    username: {
      value: "",
    },
    password: {
      value: "",
    },
    roles: {
      options: [],
      selectValue: "",
    },
  });

  const handleInputChanged = (e) => {
    const updatedForm = updateObject(formData, {
      [e.target.name]: updateObject(formData[e.target.name], {
        value: e.target.value,
        valid: !props.username.some(name => name.username.toLowerCase() === e.target.value.toLowerCase())
      }),
    });
    const updatedValidation = updateObject(updatedForm, {
      password: updateObject(updatedForm.password, {
      }),
    });
    setFormData(updatedValidation);
  };

  const handleListChanged = (selectValue, selectName) => {
    const updatedForm = updateObject(formData, {
      [selectName]: updateObject(formData[selectName], {
        selectValue: selectValue,
      }),
    });
    setFormData(updatedForm);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let params = ({});
    if (formData.username.valid) {
      params["username"] = formData.username.value.toString();
      params["password"] = formData.password.value.toString();
      params["role"] = formData.roles.selectValue.toString();
      props.onCreateUser(params);
      props.toggle();
    }
  };

  useEffect(() => {
    if (props.rolesData) {
      let rolesOption;
      rolesOption = props.rolesData.map((role) => ({
        text: role.title,
        value: role.id.toString(),
        checked: false,
      }));
      const updateFormData = updateObject(formData, {
        roles: updateObject(formData.roles, {
          options: rolesOption,
        }),
      });
      setFormData(updateFormData);
    }
  }, [props.rolesData]);
  useEffect(() => {
    const updateRulsOptions = formData.roles.options.map(option => {
      return {
        ...option,
        checked: false
      }
    })
    setFormData(prevData => {
      return {
        ...prevData,
        roles: {
          ...prevData.roles,
          options: updateRulsOptions,
        },
        username: {
          ...prevData.username,
          value: ""
        }
      }
    })
  }, [props.isShowing])

  return (
    <MDBModal
      size="md"
      className="cascading-modal primary-color"
      top
      isOpen={props.isShowing}
      toggle={props.toggle}
    >
      <MDBModalHeader
        tag="h6"
        titleClass="font-weight-normal white-text"
      >
        Create User
      </MDBModalHeader>
      <form onSubmit={handleSubmitForm}>
        <MDBModalBody className="text-center">
          <MDBRow>
            <MDBCol className="col-12">
              <MDBInput
                onChange={handleInputChanged}
                name="username"
                autoComplete="off"
                label="User Name"
                required
                className={
                  formData.username.value
                    ? formData.username.valid
                      ? "is-valid"
                      : "is-invalid"
                    : null
                }
              >
                <div className="valid-feedback text-left">Looks good!</div>
                <div className="invalid-feedback text-left">
                  This name already exists!
                </div>
              </MDBInput>
            </MDBCol>
            <MDBCol className="col-12">
              <PasswordField
                onChange={handleInputChanged}
                name="password"
                label="Password"
                required
              >
              </PasswordField>
            </MDBCol>
            <MDBCol className="col-12 text-left">
              <MDBSelect
                getValue={(value) => handleListChanged(value, "roles")}
                name="roles"
                options={formData.roles.options}
                required
                multiple
                color="teal"
                selected="Select Roles"
                label="Roles"
              />
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter center>
          <MDBBtn className="primary-color mx-2" type="submit" color="">
            create
          </MDBBtn>
          <MDBBtn
            className="mx-2"
            color="dark"
            outline
            onClick={props.toggle}
          >
            cancel
          </MDBBtn>
        </MDBModalFooter>
      </form>
    </MDBModal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: (params) => dispatch(actions.initCreateUser(params)),
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);
