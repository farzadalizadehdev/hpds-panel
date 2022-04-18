import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DeleteLun from "./Delete/DeleteUser";
import CreateUser from "./Create/CreateUser";
import EditUser from "./Edit/EditUser";
import Spinner from "../../shared/components/Spinner/Spinner";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBAnimation,
  MDBIcon,
  MDBProgress,
} from "mdbreact";
import { updateObject } from "../../utility/Utility";
import DataTable from "../../shared/components/DataTable/DataTable";

const UserInformation = (props) => {
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "User Name",
        name: "username",
        options: {
          filter: false,
        },
      },
      {
        label: "Roles",
        name: "roles",
        options: {
          filterType: "dropdown",
        },
      },
      {
        label: "Status",
        name: "status",
        options: {
          filterType: "checkbox",
        },
      },
      {
        label: "Last Login",
        name: "login",
        options: {
          filter: false,
        },
      },
      {
        label: "Ldap",
        name: "ldap",
        options: {
          filterType: "checkbox",
        },
      },
      {
        label: "Activation",
        name: "activation",
        options: {
          filter: false,
        },
      },
      {
        label: "Actions",
        name: "actions",
        options: {
          filter: false,
        },
      },
    ],
    rows: [],
    options: {
      filterType: "checkbox",
      download: false,
      print: false,
      selectableRowsHideCheckboxes: true,
      elevation: 0,
      rowsPerPageOptions: [5, 10, 15],
      searchPlaceholder: "Search Users",
      textLabels: {
        body: {
          noMatch: "Loading data...",
        },
      },
    },
  });

  const [createModal, setCreateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editType, setEditType] = useState();
  const [userInfo, setUserInfo] = useState();

  const handleCreateUser = () => {
    setCreateModal(true);
  };

  const handleDeleteUser = (userInfo) => {
    setDeleteModal(true);
    setUserInfo(userInfo);
  };

  const handleEditUser = (userInfo, editType) => {
    setEditModal(true);
    setUserInfo(userInfo);
    setEditType(editType);
  };

  useEffect(() => {
    let isUnmount = false;
    if (props.usersData) {
      const rows = props.usersData.map((row, key) => {
        let userStatus = row.online === "Yes" ? "Online" : "Offline";
        let userLdap = row.ldap ? "True" : "False";
        let userActivation = row.enabled ? "Enable" : "Disable";
        let enableUserText = row.enabled ? "Disable" : "Enable";
        let enableLdapText = row.ldap ? "Disable" : "Enable";

        return {
          username: row.username,
          roles: row.roles,
          status: userStatus,
          login: row.last_login_time,
          ldap: userLdap,
          activation: userActivation,
          actions: [
            <div key={row.username} className="d-flex align-items-center">
              {!props.loadingDeleteUser ? (
                <MDBBtn
                  disabled={row.username === localStorage.getItem("username")}
                  onClick={() => handleDeleteUser(row)}
                  size="sm"
                  color={
                    row.username === localStorage.getItem("username")
                      ? "grey"
                      : "danger"
                  }
                >
                  Delete
                </MDBBtn>
              ) : null}
              <MDBDropdown key={key} dropleft className="text-center">
                <MDBDropdownToggle
                  color=""
                  className="z-depth-0 hoverable py-1 px-2 my-0 "
                >
                  <MDBIcon icon="fas fa-ellipsis-v dynamic-text-color" />
                </MDBDropdownToggle>
                <MDBDropdownMenu color="" basic>
                  {!props.loadingEditUser ? (
                    <MDBDropdownItem
                      disabled={
                        row.username === localStorage.getItem("username")
                      }
                      onClick={() =>
                        handleEditUser(row, enableUserText + "User")
                      }
                    >
                      {enableUserText} User
                    </MDBDropdownItem>
                  ) : null}
                  {!props.loadingEditUser ? (
                    <MDBDropdownItem
                      onClick={() =>
                        handleEditUser(row, enableLdapText + "Ldap")
                      }
                    >
                      {enableLdapText} Ldap
                    </MDBDropdownItem>
                  ) : null}
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>,
          ],
        };
      });
      const updateDataTable = updateObject(dataTable, {
        rows: rows,
        options: updateObject(dataTable.options, {
          textLabels: {
            body: {
              noMatch: !rows.length ? "Sorry, no matching records found" : ""
            }
          }
        })
      });
      if (!isUnmount) {
        setDataTable(updateDataTable);
      }
    }
    return () => {
      isUnmount = true;
    };
  }, [props.usersData]);

  return (
    <>
      <MDBCard narrow>
        <MDBCardHeader className="view view-cascade gradient-card-header primary-color d-flex justify-content-center align-items-center py-4 mx-4 mb-3">
          <h5 className="white-text text-center mx-3 mb-0 font-weight-normal">
            User Information
          </h5>
        </MDBCardHeader>
        <MDBCardBody cascade>
          {props.loadingData ? (
            <MDBAnimation>
              <MDBProgress barClassName="custom-progress-color" animated material preloader />
            </MDBAnimation>
          ) : null}
          <MDBAnimation type="fadeIn">
            <DataTable data={dataTable} />
          </MDBAnimation>
        </MDBCardBody>
        <DeleteLun
          userInfo={userInfo}
          toggle={() => setDeleteModal(!deleteModal)}
          isShowing={deleteModal}
        />
        <CreateUser
          rolesData={props.rolesData}
          isShowing={createModal}
          toggle={() => setCreateModal(!createModal)}
          username={props.usersData}
        />
        <EditUser
          rolesData={props.rolesData}
          editType={editType}
          userInfo={userInfo}
          isShowing={editModal}
          toggle={() => setEditModal(!editModal)}
        />
      </MDBCard>
      {!props.LoadingCreate ? (
        <MDBBtn onClick={handleCreateUser} color="" className="mt-4 ml-4 primary-color">
          Create User
        </MDBBtn>
      ) : (
        <MDBBtn className="mt-4 ml-4 primary-color" color="">
          <Spinner />
        </MDBBtn>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //users
    loadingData: state.users.loading,
    LoadingCreate: state.users.loadingCreateUser,
    LoadingDelete: state.users.loadingDeleteUser,
    LoadingEdit: state.users.loadingEditUser,
  };
};

export default connect(mapStateToProps, null)(UserInformation);
