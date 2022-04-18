import React from 'react'
import SystemSummary from "../../../components/Dashboard/SystemSummary/systemSummary";
import OnlineUserList from "../../../components/Dashboard/TableLists/OnlineUserList/OnlineUserList";
import EventList from "../../../components/Dashboard/TableLists/EventList/EventList";
import SummaryList from "../../../components/Dashboard/TableLists/SummaryList/SummaryList";
import PoolChart from "../../../components/Dashboard/Chart/PoolChart";
import TopLunUsage from "../../../components/Dashboard/Chart/TopLunUsage";
import TopPoolUsage from "../../../components/Dashboard/Chart/TopPoolUsage";
import { MDBContainer, MDBRow, MDBAnimation } from "mdbreact";

const DV1 = (props) => {
    return (
        <MDBContainer fluid className="mb-5">
                <MDBAnimation type="fadeIn" duration="1s">
                    <SystemSummary loading={props.loadingSummary} name="system_summary" summaryData={props.summaryData} />
                    <MDBRow className="d-flex flex-row flex-wrap">
                        <PoolChart loading={props.loadingSummary} name="pool_chart" poolData={props.summaryData} />
                        <TopPoolUsage loading={props.loadingSummary} name="top_pool_usage" summaryData={props.summaryData} />
                        <TopLunUsage loading={props.loadingSummary} name="top_lun_usage" summaryData={props.summaryData} />
                    </MDBRow>
                    <MDBRow>
                        <OnlineUserList name="online_users" onlineUsers={props.onlineUsers} />
                        <EventList name="events" events={props.events} />
                        <SummaryList loading={props.loadingSummary} name="system_informations" summaryData={props.summaryData} />
                    </MDBRow>
                </MDBAnimation> 
        </MDBContainer>
    )
}
export default DV1