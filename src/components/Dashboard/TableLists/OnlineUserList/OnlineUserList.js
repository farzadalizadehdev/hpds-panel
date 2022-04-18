import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTable,
  MDBBtn,
} from "mdbreact";
import { AppContext } from "../../../../context/app/app-context";
import withDashboardItems from "../../../../hoc/withDashboardItems";

const OnlineUserList = (props) => {
  const [onlineUser, setOnlineUser] = useState();
  const appContext = useContext(AppContext)
  useEffect(() => {
    if (props.onlineUsers) {
      const renderOnlineUser = props.onlineUsers.map((user, key) => {
        let randomColor = (0x1000000 + Math.random() * 0xffffff)
          .toString(16)
          .substr(1, 6);
        return (
          <tr key={key}>
            <td className="dynamic-text-color font-weight-normal">
              <div
                style={{ backgroundColor: `#${randomColor}` }}
                className="white-text avatar-placeholder font-weight-bold"
              >
                {user.username.split("")[0].toUpperCase() +
                  user.username.split("")[1]}
              </div>
              {user.username}
            </td>
            <td>
              <small>
                <span className="grey-text">{user.last_login_time.split(" ")[0]}</span>
                <br />
                <span className="grey-text">{user.last_login_time.split(" ")[1]}</span>
              </small>
            </td>
          </tr>
        );
      });
      setOnlineUser(renderOnlineUser);
    }
  }, [props.onlineUsers]);
  return (
    <MDBCol className={appContext.dashboardLayout === 'layout1' ? 'flex-grow-1 layoutItemsV1 mb-3' : 'layoutListV2'}>
      <MDBCard
        style={{ minHeight: "350px", maxHeight: "350px" }}
        className="lg-4 mb-4 overflow-auto w-100 hide-scroll"
      >
        <MDBCardHeader color="primary-color sticky-top">
          <Link className="white-text" to="/user">
            Online Users
          </Link>
        </MDBCardHeader>
        <MDBCardBody className="pt-0">
          <MDBTable className="no-header mt-1">
            <thead>
              <tr>
                <th className="font-weight-normal grey-text">User</th>
                <th className="font-weight-normal grey-text">Last Login</th>
              </tr>
            </thead>
            <tbody>{onlineUser}</tbody>
          </MDBTable>

          {onlineUser && onlineUser > 5 ? (
            <Link className="white-text" to="/user">
              <MDBBtn
                flat
                rounded
                className="primary-color font-weight-bold w-100 mb-4 mx-0"
              >
                View all users
              </MDBBtn>
            </Link>
          ) : null}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default withDashboardItems(OnlineUserList);
