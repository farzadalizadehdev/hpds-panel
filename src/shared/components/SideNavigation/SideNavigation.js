import React from "react";
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon,
} from "mdbreact";
import LoadingLogo from "../Loading/loadingLogo";
class SideNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: [],
      visibile: false,
    };
  }

  //update active link after refresh page
  componentDidUpdate() {
    let allRippleParents = document.querySelectorAll('.Ripple-parent.arrow-r')
    let allCollapseElemets = document.querySelectorAll('.collapse')
    for (let parent of allRippleParents) {
      parent.classList.remove('active')
    }
    for (let element of allCollapseElemets) {
      element.classList.remove('show')
    }
    if (window.location.pathname !== '/dashboard') {
      let activeElement = document.querySelector('.Ripple-parent.active')
      let parentElement = activeElement.closest('li')
      let elementCollapsibleHeader = parentElement.querySelector('.Ripple-parent.arrow-r')
      let elemetCollapse = parentElement.querySelector('.collapse')
      elementCollapsibleHeader.classList.add('active')
      elemetCollapse.classList.add('show')
    }
  }

  // render MDBSideNav Link
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const { onLinkClick } = this.props;

    const handleSearch = (e) => {
      e.target.value.length
        ? this.setState({ visibile: true, value: e.target.value })
        : this.setState({ visibile: false, value: "" });

      let navItems = document.getElementsByClassName("sv-normal");
      let searchResult = [];

      for (let item of navItems) {
        if (
          item.innerText
            .toLocaleLowerCase()
            .split()
            .toString()
            .includes(e.target.value)
        ) {
          searchResult.push(item.innerText);
        }
      }
      let uniqSearchResult = [...new Set(searchResult)];
      this.setState({
        result: uniqSearchResult,
      });
    };

    return (
      <div className="">
        <MDBSideNav
          mask="strong"
          className="sideNave"
          fixed
          breakWidth={this.props.breakWidth}
          triggerOpening={this.props.triggerOpening}
          style={{ transition: "padding-left .3s" }}
        >
          <LoadingLogo />
          <div className="form-group md-form my-0 py-0 ">
            <input
              type="text"
              placeholder="Search"
              autoComplete="on"
              onChange={handleSearch}
              value={this.state.value}
              className="form-control px-4 my-0 font-weight-light dynamic-text-color small-text search-nav"
            />
            <div
              hidden={!this.state.visibile}
              className="search-nav-result z-depth-2"
            >
              {this.state.result
                ? this.state.result.map((item) => {
                  let path = item.toLocaleLowerCase().replace(" ", "_");
                  return (
                    <MDBSideNavLink
                      onClick={() =>
                        this.setState({ visibile: false, value: "" })
                      }
                      key={item}
                      to={path}
                    >
                      {item}
                    </MDBSideNavLink>
                  );
                })
                : null}
            </div>
          </div>
          <MDBSideNavNav>
            <MDBSideNavLink
              topLevel
              name="Dashboard"
              id="dashboard"
              to="/dashboard"
              onClick={onLinkClick}
            >
              <MDBIcon icon="columns mr-2" />
              Dashboard
            </MDBSideNavLink>
            <MDBSideNavCat name="Storage" id="storage" icon="hdd">
              {this.rSNL("/disk", "Disk")}
              {this.rSNL("/pool", "Pool")}
              {this.rSNL("/lun", "Lun")}
              {this.rSNL("/rapidstore", "Rapidstore")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Host Access" id="host_access" icon="server">
              {this.rSNL("/host", "Host")}
              {this.rSNL("/initiator", "Initiator")}
              {this.rSNL("/access_control", "Access Control")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Protection" id="protection" icon="shield-alt">
              {this.rSNL("/snapshot", "SnapShot")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Network" id="network" icon="network-wired">
              {this.rSNL("/dns", "DNS")}
              {this.rSNL("/network", "Network")}
              {this.rSNL("/iscsi", "Iscsi")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Hardware" id="hardware" icon="ethernet">
              {this.rSNL("/hardware_status", "Hardware Status")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Monitoring" id="monitoring" icon="desktop">
              {this.rSNL("/storage_performance", "Storage Performance")}
              {this.rSNL("/disk_performance", "Disk Performance")}
              {this.rSNL("/iscsi_performance", "Iscsi Performance")}
              {this.rSNL("/fc_performance", "Fc Performance")}
            </MDBSideNavCat>
            <MDBSideNavCat name="SMTP" id="smtp" icon="envelope">
              {this.rSNL("/smtp_account", "Account")}
              {this.rSNL("/smtp_recipient", "Recipient")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Statistic" id="statistic" icon="sliders-h">
              {this.rSNL("/event", "Event")}
              {/* {this.rSNL('/queue', 'Queue')} */}
            </MDBSideNavCat>
            <MDBSideNavCat name="User/Role" id="user_role" icon="user-cog">
              {this.rSNL("/user", "User")}
              {this.rSNL("/role", "Role")}
            </MDBSideNavCat>
            <MDBSideNavCat name="Setting" id="setting" icon="cog">
              {this.rSNL("/system", "System")}
              {this.rSNL("/ldap", "Ldap")}
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavigation;
