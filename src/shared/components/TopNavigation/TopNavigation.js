import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { updateObject } from "../../../utility/Utility.js";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBProgress
} from "mdbreact";
import UserAvatar from "./UserDropdown/UserAvatar/UserAvatar.js";
import UserSystem from "./UserDropdown/UserSystem/UserSystem.js";
import SoftwareVersion from "./UserDropdown/SoftwareVersion/SoftwareVersion.js";
import Activities from "./UserDropdown/Activities/Activities.js";
import DashboardLayout from './UserDropdown/DashboardLayout/DashboardLayout'

const TopNavigation = (props) => {

  const [summaryList, setSummaryList] = useState({
    data: {
      apiVarsion: null,
      cliVersion: null,
      uiVersion: null,
      sabVersion: null
    }
  });

  useEffect(() => {
    if (props.summaryData) {
      const updateSummaryList = updateObject(summaryList, {
        data: updateObject(summaryList.data, {
          apiVarsion: props.summaryData.api_version,
          cliVersion: props.summaryData.cli_version,
          uiVersion: props.summaryData.ui_version,
          sabVersion: props.summaryData.sab_version
        })
      })
      setSummaryList(updateSummaryList);
    }
  }, [props.summaryData]);


  const handleToggleClickA = () => {
    props.onSideNavToggleClick();
  }

  const navStyle = {
    paddingLeft: props.toggle ? "16px" : "240px",
    transition: "padding-left .3s",
  };

  return (
    <Router>
      <MDBNavbar
        className="flexible-MDBNavbar d-flex flex-column pb-0"
        expand="md"
        scrolling
        fixed="top"
        style={{ zIndex: 3 }}
      >
        <MDBRow className="col-12 pb-2">
          <div
            onClick={handleToggleClickA}
            key="sideNavToggleA"
            style={{
              lineHeight: "32px",
              marginleft: "1em",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
          >
            <MDBIcon icon="bars" color="white" size="lg" />
          </div>
          <MDBNavbarBrand style={navStyle}>
            <strong>{props.routeName}</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav
            expand="sm"
            right
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user-alt" className="dark-grey-text" />
                <span className="d-none d-md-inline ml-1 font-weight-light ">
                  {props.username}
                </span>
              </MDBDropdownToggle>
              <MDBDropdownMenu
                color="default"
                className="p-0 z-depth-1 userDropdown" 
              >
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="5" className="col-md-5 ml-0 user-dropdown-color rounded-left">
                        <UserAvatar  username={props.username} />
                      <MDBCol className="d-flex flex-row flex-wrap align-items-start pl-0">
                          <UserSystem className='d-flex flex-column col-6 col-md-12  mt-4 white-text w-50 pl-0' />  
                          <SoftwareVersion className='d-flex flex-column col-6 col-md-12 mt-4 white-text w-50 pl-0' summaryList={summaryList.data} />
                      </MDBCol>
                    </MDBCol>
                    <MDBCol className='col-md-7'>
                      <Activities
                        toggleSettingModal={props.toggleSettingModal}
                        toggleUserModal={props.toggleUserModal}
                      />
                      <DashboardLayout />
                      <hr className="w-100 mb-1" />
                      <MDBRow className="px-2 mb-2">
                        <a href="/logout" className="red-text font-weight-normal">
                          <MDBIcon
                            className=" mr-2 red-text"
                            icon="sign-out-alt"
                          />
                          Logout
                        </a>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarNav>
        </MDBRow>
        {props.loading ?
          <MDBProgress barClassName="custom-progress-color" className="m-0 p-0 ml-5" material preloader />
          : null}
      </MDBNavbar>
    </Router>
  );

}

export default TopNavigation;