import React from 'react'
import SystemSummary from "../../../components/Dashboard/SystemSummary/systemSummary";
import OnlineUserList from "../../../components/Dashboard/TableLists/OnlineUserList/OnlineUserList";
import EventList from "../../../components/Dashboard/TableLists/EventList/EventList";
import SummaryList from "../../../components/Dashboard/TableLists/SummaryList/SummaryList";
import PoolChart from "../../../components/Dashboard/Chart/PoolChart";
import TopLunUsage from "../../../components/Dashboard/Chart/TopLunUsage";
import TopPoolUsage from "../../../components/Dashboard/Chart/TopPoolUsage";
import { MDBContainer, MDBRow, MDBAnimation, MDBCol } from "mdbreact";

const DV2 = (props) => {
    return (
        <MDBContainer fluid className="mb-5 p-0">
                <MDBAnimation type="fadeIn" duration="1s">
                    <MDBRow className='col-12 p-0 m-0'>
                        <MDBRow className='col-12 p-0 m-0'>
                            <MDBCol className='col-12 mt-3 order-lg-1 order-xl-2 col-xl-5 col-lg-12'> 
                                <SystemSummary loading={props.loadingSummary} name="system_summary" summaryData={props.summaryData} />
                            </MDBCol>
                            <MDBCol className='col-12 order-lg-2 order-xl-1 col-xl-7 col-lg-12'>
                                <PoolChart loading={props.loadingSummary} name="pool_chart" poolData={props.summaryData} />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='col-12 p-0 m-0'>
                            <MDBCol className='col-xl-7 col-lg-12 p-0'>
                                <TopPoolUsage loading={props.loadingSummary} name="top_pool_usage" summaryData={props.summaryData} />
                                <TopLunUsage loading={props.loadingSummary} name="top_lun_usage" summaryData={props.summaryData} />
                            </MDBCol>
                            <MDBCol className='col-12 col-xl-5 col-lg-12 d-flex flex-column'>
                                <SummaryList loading={props.loadingSummary} name="system_informations" summaryData={props.summaryData} />
                                <EventList name="events" events={props.events} />
                                <OnlineUserList name="online_users" onlineUsers={props.onlineUsers} />
                            </MDBCol>
                        </MDBRow>
                    </MDBRow>
                </MDBAnimation>
        </MDBContainer>
    )
}
export default DV2