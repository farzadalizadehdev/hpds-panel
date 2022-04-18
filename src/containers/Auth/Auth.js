import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppContext } from "../../context/app/app-context";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBBox,
  ToastContainer,
} from "mdbreact";
import "./Auth.css";
import PasswordField from "../../shared/components/PasswordField/PasswordField";
import Spinner from "../../shared/components/Spinner/Spinner";
import Logo from "../../shared/components/Logo/Logo";
import * as actions from "../../store/store";
import { updateObject } from "../../utility/Utility";

const Auth = (props) => {
  const appContext = useContext(AppContext);

  const [user, setUser] = useState({
    username: {
      value: null,
    },
    password: {
      value: null,
    },
  });

  const handleInputChanged = (e) => {
    const updatedUserInfo = updateObject(user, {
      [e.target.name]: updateObject(user[e.target.name], {
        value: e.target.value,
      }),
    });
    setUser(updatedUserInfo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let username = user.username.value.trim();
    let password = user.password.value.trim();
    if (username && password) {
      props.onAuth(username, password);
    }
  };

  return (
    <div
      className="classic-form-page login-wrapper"
      id="login"
      style={{
        backgroundImage: `url(./images/${appContext.background}.jpg)`,
      }}
    >
      {props.isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Redirect to="/" />
      )}
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center mask">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="10" lg="6" xl="5" sm="12" className="mt-5 mx-auto ">
                <MDBCard>
                  <MDBCardBody>
                    <div className="form-header cloudy-knoxville-gradient p-0">
                      <Logo
                        class="d-flex flex-column"
                        style={{ width: "150px", margin: "0 auto" }}
                      >
                        <MDBBox className="blue-grey-text small" tag="span">
                          <em>
                            WE EARN YOUR
                            <mark
                              style={{
                                color: "#45b5aa",
                                backgroundColor: "transparent",
                              }}
                            >
                              TRUST
                            </mark>
                          </em>
                        </MDBBox>
                      </Logo>
                    </div>
                    <form onSubmit={submitHandler}>
                      <MDBInput
                        type="text"
                        label="User name"
                        icon="user"
                        size="sm"
                        iconClass="white-text"
                        name="username"
                        onChange={handleInputChanged}
                        required
                        autoComplete="off"
                      />
                      <PasswordField
                        label="Your password"
                        icon="lock"
                        size="sm"
                        iconClass="white-text"
                        name="password"
                        onChange={handleInputChanged}
                        required
                        autoComplete="off"
                      />
                      <div className="text-center mt-3 black-text">
                        <MDBBtn
                          className="default-color"
                          size="lg"
                          type="submit"
                        >
                          {props.loading ? <Spinner /> : <span>Login</span>}
                        </MDBBtn>
                        <hr />
                      </div>
                    </form>
                    <div className="inline-ul text-center d-flex justify-content-center">
                      <a href="https://www.linkedin.com/company/parsa-hpds/">
                        <MDBIcon
                          fab
                          icon="linkedin"
                          size="lg"
                          className="p-2 m-2 white-text"
                        />{" "}
                      </a>
                      <a href="https://www.instagram.com/hpds.ir/">
                        <MDBIcon
                          fab
                          icon="instagram"
                          size="lg"
                          className="p-2 m-2 white-text"
                        />
                      </a>
                      <a href="http://hpds.ir">
                        <MDBIcon
                          fab
                          icon="globe"
                          size="lg"
                          className="fas fa-globe-asia p-2 m-2 white-text"
                        />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
        <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={3000}
        />
      </MDBView>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) => dispatch(actions.auth(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
