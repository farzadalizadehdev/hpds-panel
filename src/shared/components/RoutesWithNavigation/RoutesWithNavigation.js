import React, { useEffect, useState, useCallback, useContext } from "react";
import "../../assets/styles/style.css";
import SideNavigation from "../../../shared/components/SideNavigation/SideNavigation";
import TopNavigation from "../../../shared/components/TopNavigation/TopNavigation";
import Routes from "../../../Routes";
import AppSetting from "../../../components/Setting/AppSetting/AppSetting";
import { ToastContainer } from "mdbreact";
import { AppContext } from "../../../context/app/app-context";
import withRoutes from '../../../hoc/withRoutes'
import { ThemeProvider } from "styled-components";
import GlobalTheme from "../../Themes/GlobalTheme/GlobalTheme";
import { GetColor } from "../../../utility/Utility"

const App = (props) => {

  const appContext = useContext(AppContext)

  const { primaryColor, darkColor, lightColor } = GetColor()
  const [state, setState] = useState({
    theme: {},
    primaryColor: {},
    toggle: false,
    windowWidth: 0,
    currentPage: "",
    sideNavToggled: false,
    breakWidth: 1400,
    toggleChangePasswordModal: false,
    // toggleSettingModal: false,
  });

  const [settingModal, setSettingModal] = useState(false);

  const handleResize = () => {
    setState((prevState) => {
      return {
        ...prevState,
        windowWidth: window.innerWidth,
      };
    });
  };

  const toggleSideNav = () => {
    if (state.windowWidth < state.breakWidth) {
      setState((prevState) => {
        return {
          ...prevState,
          sideNavToggled: !state.sideNavToggled,
        };
      });
    }
  };

  const assessLocation = (location) => {
    let locationString;
    switch (location) {
      case "/dashboard":
        locationString = "Dashboard";
        break;
      case "/disk":
        locationString = "Disk";
        break;
      case "/pool":
        locationString = "Pool";
        break;
      case "/lun":
        locationString = "Lun";
        break;
      case "/rapidstore":
        locationString = "Rapidstore";
        break;
      case "/host":
        locationString = "Host";
        break;
      case "/initiator":
        locationString = "Initiator";
        break;
      case "/access_control":
        locationString = "Access Control";
        break;
      case "/snapshot":
        locationString = "SnapShot";
        break;
      case "/dns":
        locationString = "DNS";
        break;
      case "/network":
        locationString = "Network";
        break;
      case "/iscsi":
        locationString = "Iscsi";
        break;
      case "/hardware_status":
        locationString = "Hardware Status";
        break;
      case "/storage_performance":
        locationString = "Storage Performance";
        break;
      case "/disk_performance":
        locationString = "Disk Performance";
        break;
      case "/iscsi_performance":
        locationString = "Iscsi Performance";
        break;
      case "/fc_performance":
        locationString = "Fc Performance";
        break;
      case "/smtp_account":
        locationString = "SMTP Account";
        break;
      case "/smtp_recipient":
        locationString = "SMTP Recipient";
        break;
      case "/event":
        locationString = "Event";
        break;
      case "/queue":
        locationString = "Queue";
        break;
      case "/user":
        locationString = "User";
        break;
      case "/role":
        locationString = "Role";
        break;
      case "/ldap":
        locationString = "Ldap";
        break;
      case "/system":
        locationString = "System";
        break;
      default:
        locationString = "Dashboard";
    }
    setState((prevState) => {
      return {
        ...prevState,
        currentPage: locationString,
      };
    });
  };

  const handleToggleUserModal = () => {
    setState((prevState) => {
      return {
        ...prevState,
        toggleChangePasswordModal: !state.toggleChangePasswordModal,
      };
    });
  };

  const handleToggleSettingModal = useCallback(() => {
    setSettingModal((prevSetting) => !prevSetting);
  }, []);

  const dynamicStyle = {
    padding: state.windowWidth > state.breakWidth ? "8rem 60px 8rem 300px" : "6rem 0 6rem 4rem",
  };

  useEffect(() => {
    appContext.theme.mode.map(theme => {
      if (theme.checked) {
        setState((prevState) => {
          return {
            ...prevState,
            theme: theme.palette,
          }
        })
      }
    })
    setState((prevState) => {
      return {
        ...prevState,
        primaryColor: { primaryColor, darkColor, lightColor },
      }
    })
  }, [appContext.theme])

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    appContext.theme.mode.map(theme => {
      if (theme.checked) {
        setState((prevState) => {
          return {
            ...prevState,
            theme: theme.palette
          }
        })
      }
    })
    setState((prevState) => {
      return {
        ...prevState,
        primaryColor: { primaryColor, darkColor, lightColor },
      }
    })

    assessLocation(props.location.pathname);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (props.node) {
      appContext.changeSabOs(props.node)
    }
  }, [props.node])

  useEffect(() => {
    assessLocation(props.location.pathname);
  }, [props.location.pathname]);

  return (
    <ThemeProvider theme={state.theme}>
      <GlobalTheme primary={state.primaryColor.primaryColor} light={state.primaryColor.lightColor} dark={state.primaryColor.darkColor} />
      <div >
        <ToastContainer
          hideProgressBar={false}
          newestOnTop={true}
          autoClose={5000}
        />
        <div>
          <SideNavigation
            breakWidth={state.breakWidth}
            style={{ transition: "all .3s" }}
            triggerOpening={state.sideNavToggled}
            onLinkClick={() => toggleSideNav()}
          />
        </div>
        <div className="flexible-content">
          <TopNavigation
            toggle={state.windowWidth < state.breakWidth}
            onSideNavToggleClick={toggleSideNav}
            routeName={state.currentPage}
            className="white-skin"
            username={props.userInfo}
            summaryData={props.summaryData}
            toggleUserModal={() => handleToggleUserModal()}
            toggleSettingModal={() => handleToggleSettingModal()}
            loading={props.loading}
          />
          <main style={{ ...dynamicStyle }}>
            <Routes onChange={() => assessLocation()} />
          </main>
          <AppSetting
            isShowing={settingModal}
            toggle={() => handleToggleSettingModal()}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default withRoutes(App);
