import React, { useEffect, useState, useContext } from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBRow,
} from "mdbreact";
import { updateObject } from "../../../../utility/Utility";
import { AppContext } from "../../../../context/app/app-context";
import withDashboardItems from "../../../../hoc/withDashboardItems";
const SummaryList = (props) => {
  const appContext = useContext(AppContext)
  const [summaryList, setSummaryList] = useState([
    { poolCount: null },
    { lunCount: null },
    { hostCount: null },
    { diskCount: null },

    { foreignDisk: null },
    { faildDisk: null },
    { unconfigDisks: null },
    { operationalDisks: null },

    { apiVersion: null },
    { cliVersion: null },
    { uiVersion: null },
    { sabVersion: null },
  ]);

  useEffect(() => {
    if (props.summaryData) {
      const updateSummaryList = updateObject(summaryList, {
        poolCount: props.summaryData.number_of_pools,
        lunCount: props.summaryData.number_of_luns,
        hostCount: props.summaryData.number_of_hosts,
        diskCount: props.summaryData.number_of_disks,

        foreignDisk: props.summaryData.number_of_foreign_disks,
        faildDisk: props.summaryData.number_of_failed_disks,
        unconfigDisks: props.summaryData.number_of_unconfigured_disks,
        operationalDisks: props.summaryData.number_of_operational_disks,

        apiVersion: props.summaryData.api_version,
        cliVersion: props.summaryData.cli_version,
        uiVersion: props.summaryData.ui_version,
        sabVersion: props.summaryData.sab_version,
      });
      setSummaryList(updateSummaryList);
    }
  }, [props.summaryData]);

  return (
    <MDBCol className={appContext.dashboardLayout === 'layout1' ? 'flex-grow-1 layoutItemsV1 mb-3' : 'layoutListV2'}>
      <MDBCard
        style={{ minHeight: "350px", maxHeight: "350px" }}
        className="lg-4 mb-4 w-100"
      >
        <MDBCardHeader className="primary-color text-white sticky-top">
          System Summary
        </MDBCardHeader>
        <MDBCardBody>
          <MDBRow col="12" className="mb-1">
            <MDBCol col="3">
              <small className="grey-text">Pool</small>
              <h4 className="dynamic-text-color">{summaryList.poolCount}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">Disk</small>
              <h4 className="dynamic-text-color">{summaryList.diskCount}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">Lun</small>
              <h4 className="dynamic-text-color">{summaryList.lunCount}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">Host</small>
              <h4 className="dynamic-text-color">{summaryList.hostCount}</h4>
            </MDBCol>
          </MDBRow>

          <MDBRow col="12" className="mb-1">
            <MDBCol col="3">
              <small className="grey-text">Failure Disk</small>
              <h4 className="dynamic-text-color">{summaryList.foreignDisk}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">Failed Disk</small>
              <h4 className="dynamic-text-color">{summaryList.faildDisk}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">NoConfig Disk</small>
              <h4 className="dynamic-text-color">{summaryList.unconfigDisks}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">Operational Disk</small>
              <h4 className="dynamic-text-color">{summaryList.operationalDisks}</h4>
            </MDBCol>
          </MDBRow>
          <MDBRow col="12" className="mb-1">
            <MDBCol col="3">
              <small className="grey-text">SAB-OS-V</small>
              <h4 className="dynamic-text-color">{summaryList.sabVersion}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">UI-V</small>
              <h4 className="dynamic-text-color">{summaryList.uiVersion}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">CLI-V</small>
              <h4 className="dynamic-text-color">{summaryList.cliVersion}</h4>
            </MDBCol>
            <MDBCol col="3">
              <small className="grey-text">API-V</small>
              <h4 className="dynamic-text-color">{summaryList.apiVersion}</h4>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default withDashboardItems(SummaryList);
