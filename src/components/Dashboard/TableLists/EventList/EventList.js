import React, { useContext, useEffect, useState } from "react";
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

const EventList = (props) => {
  const [eventList, setEventList] = useState();
  const appContext = useContext(AppContext)
  useEffect(() => {
    if (props.events) {
      const renderEventList = props.events.slice(0, 5).map((eventItem, key) => {
        return (
          <tr key={key}>
            <td className="dynamic-text-color font-weight-normal">{eventItem.message}</td>
            <td className="grey-text">
              <small>
                <span className="grey-text font-weight-bold">
                  {eventItem.username}
                </span>
              </small>
              <br />
              <small>
                <span className="grey-text">{eventItem.time}</span>
              </small>
            </td>
          </tr>
        );
      });
      setEventList(renderEventList);
    }
  }, [props.events]);
  return (
    <MDBCol className={appContext.dashboardLayout === 'layout1' ? 'flex-grow-1 layoutItemsV1 mb-3' : 'layoutListV2'}>
      <MDBCard
        style={{ minHeight: "350px", maxHeight: "350px" }}
        className="lg-4 mb-4 overflow-auto w-100 hide-scroll"
      >
        <MDBCardHeader color="primary-color sticky-top">
          <Link className="white-text" to="/event">
            Events
          </Link>
        </MDBCardHeader>
        <MDBCardBody className="pt-0">
          <MDBTable fixed className="no-header mt-1 ">
            <thead>
              <tr>
                <th className="font-weight-normal grey-text">Event</th>
                <th
                  className="font-weight-normal grey-text"
                  style={{ width: "150px" }}
                >
                  User/Time
                </th>
              </tr>
            </thead>
            <tbody>{eventList}</tbody>
          </MDBTable>
          {eventList && eventList.length >= 5 ? (
            <Link className="white-text" to="/event">
              <MDBBtn
                flat
                rounded
                className="primary-color font-weight-bold w-100 mb-4 mx-0"
              >
                View full report
              </MDBBtn>
            </Link>
          ) : null}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default withDashboardItems(EventList);
