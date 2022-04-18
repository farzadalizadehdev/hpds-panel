import React, { useContext, useEffect, useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBAnimation,
  MDBProgress,
} from "mdbreact";
import { formatBytes, updateObject } from "../../../utility/Utility";
import { AppContext } from "../../../context/app/app-context";
import withDashboardItems from "../../../hoc/withDashboardItems";

const SystemSummary = (props) => {

  const appContext = useContext(AppContext)

  const [systemSummary, setSystemSummary] = useState([
    { systemUpTime: null },
    { poolUsedSpace: null },
    { poolFreeSpace: null },
    { poolTotalSpace: null },
    { usedDiskCount: null },
    { noConfigDiskCount: null },
    { totalDiskCount: null },
    { storageUsedSpace: null },
    { storageFreeSpace: null },
    { serverDate: null },
  ]);

  const [summaryPercentage, setSummaryPercentage] = useState({
    poolUsed: {
      value: 0,
      color: "blue",
    },
    diskUsed: {
      value: 0,
      color: "blue",
    },
    storageUsed: {
      value: 0,
      color: "blue",
    },
  });

  const [liveTime, setLiveTime] = useState();

  const checkColor = (percent) => {
    let color;
    switch (true) {
      case percent < 20:
        color = "light-blue";
        break;
      case 20 < percent && percent <= 40:
        color = "light-green";
        break;
      case 40 < percent && percent <= 60:
        color = "lime";
        break;
      case 60 < percent && percent <= 80:
        color = "orange";
        break;
      case 80 < percent:
        color = "red";
        break;
      default:
        color = "blue";
        break;
    }
    return color;
  };

  useEffect(() => {
    let isUnmount = false;
    if (props.summaryData) {
      const updateSystemSummary = updateObject(systemSummary, {
        systemUpTime: props.summaryData.system_uptime,
        poolUsedSpace: formatBytes(props.summaryData.total_pools_used_space),
        poolFreeSpace: formatBytes(props.summaryData.total_pools_free_space),
        poolTotalSpace: formatBytes(props.summaryData.total_pools_space),
        usedDiskCount: props.summaryData.number_of_used_disks,
        noConfigDiskCount: props.summaryData.number_of_unconfigured_disks,
        totalDiskCount: props.summaryData.number_of_disks,
        storageUsedSpace: formatBytes(props.summaryData.total_used_space),
        storageFreeSpace: formatBytes(props.summaryData.total_free_space),
        serverDate: props.summaryData.system_time.split(" - ", 1)
      });

      let poolUsedPercent =
        parseInt(props.summaryData.total_pools_space) !== 0
          ? (
            (parseInt(props.summaryData.total_pools_used_space) /
              parseInt(props.summaryData.total_pools_space)) *
            100
          ).toFixed()
          : 0;

      let diskUsedPercent =
        parseInt(props.summaryData.number_of_disks) !== 0
          ? (
            (parseInt(props.summaryData.number_of_used_disks) /
              parseInt(props.summaryData.number_of_disks)) *
            100
          ).toFixed()
          : 0;

      let storageUsedPercent = (
        (parseInt(props.summaryData.total_used_space) /
          (parseInt(props.summaryData.total_used_space) +
            parseInt(props.summaryData.total_free_space))) *
        100
      ).toFixed();

      const updatePercent = updateObject(summaryPercentage, {
        poolUsed: updateObject(summaryPercentage.poolUsed, {
          value: poolUsedPercent,
          color: checkColor(parseInt(poolUsedPercent)),
        }),
        diskUsed: updateObject(summaryPercentage.diskUsed, {
          value: diskUsedPercent,
          color: checkColor(parseInt(diskUsedPercent)),
        }),

        storageUsed: updateObject(summaryPercentage.storageUsed, {
          value: storageUsedPercent,
          color: checkColor(parseInt(storageUsedPercent)),
        }),
      });
      if (!isUnmount) {
        setSystemSummary(updateSystemSummary);
        setSummaryPercentage(updatePercent);
      }
    }
    return () => {
      isUnmount = true;
    };
  }, [props.summaryData]);

  useEffect(() => {
    let isUnmount = false;
    if (props.summaryData) {
      const dd = props.summaryData.system_time.split(" - ", 2);
      var date = dd[0];
      var time = dd[1].split(" ");

      var splitDate = date.split("/");
      var year = splitDate[0];
      var month = splitDate[1];
      var day = splitDate[2];

      var splitTime = time[0].split(":");
      var hour = splitTime[0];
      var minute = splitTime[1];
      var second = splitTime[2];

      var timestamp = new Date(year, month, day, hour, minute, second);
      var interval = 1;
      let sys_time = "";
      clearInterval(sys_time);
      sys_time = setInterval(() => {
        timestamp = new Date(timestamp.getTime() + interval * 1000);
        var h = timestamp.getHours();
        var m = timestamp.getMinutes();
        var s = timestamp.getSeconds();
        if (s < 10) {
          s = "0" + s;
        }
        if (m < 10) {
          m = "0" + m;
        }
        if (h < 10) {
          h = "0" + h;
        }
        if (!isUnmount) {
          setLiveTime([`${h}:${m}:${s}`]);
        }
      }, Math.abs(interval) * 1000);
    }
    return () => {
      isUnmount = true;
    };
  }, [props.summaryData]);

  return (
    <section>
      <MDBRow className={appContext.dashboardLayout || null}>
        <MDBCol className={appContext.dashboardLayout === "layout1" ? "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4" : "col-12 col-lg-6 mb-4 mb-xl-6"}>
          <MDBCard
            cascade
            className={`card-color cascading-admin-card `}
          >
            <div className="admin-up" >
              <div className="d-flex justify-content-between align-items-start">
                <MDBIcon
                  icon="chart-bar"
                  className={`primary-color z-depth-1 ml-1 p-3`}
                />

                <span className="d-inline-block grey-text mt-4 pt-2 datatitle" >
                  Storage Used
                </span>
              </div>
              <div className="data">
                <h3 className="font-weight-bold dynamic-text-color">
                  {systemSummary.storageUsedSpace ? (
                    <MDBAnimation type="fadeIn">
                      {systemSummary.storageUsedSpace}
                    </MDBAnimation>
                  ) : 0}
                </h3>
              </div>

            </div>
            <MDBCardBody className="custom-progress" cascade>
              <MDBProgress
                value={parseInt(summaryPercentage.storageUsed.value)}
                barClassName={`${summaryPercentage.storageUsed.color} py-0 my-0 darken-3`}
                material />
              <p className="mb-0 mt-2 dynamic-text-color">
                Used Storage Space:
                {`(${summaryPercentage.storageUsed.value}%)`}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className={appContext.dashboardLayout === "layout1" ? "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4" : "col-12 col-lg-6 mb-4 mb-xl-6"}>
          <MDBCard
            cascade
            className={`card-color cascading-admin-card `}
          >
            <div className="admin-up">
              <div className="d-flex justify-content-between align-items-start">
                <MDBIcon
                  icon="chart-line"
                  className={`primary-color z-depth-1 ml-1 p-3`}
                />
                <span className="d-inline-block grey-text mt-4 pt-2 datatitle">
                  Pool Used
                </span>
              </div>
              <div className="data" >
                <h3 className="font-weight-bold dynamic-text-color">
                  {systemSummary.poolUsedSpace ? (
                    <MDBAnimation type="fadeIn">
                      {systemSummary.poolUsedSpace}
                    </MDBAnimation>
                  ) : 0}
                </h3>
              </div>
            </div>
            <MDBCardBody className="custom-progress" cascade>
              <MDBProgress
                value={parseInt(summaryPercentage.poolUsed.value)}
                barClassName={`${summaryPercentage.poolUsed.color} py-0 my-0 darken-3`}
                material />
              <p className="mb-0 mt-2 dynamic-text-color">
                Used Pool Space: {`(${summaryPercentage.poolUsed.value}%)`}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className={appContext.dashboardLayout === "layout1" ? "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4" : "col-12 col-lg-6 mb-5 mt-3 mb-xl-4"}>
          <MDBCard
            cascade
            className={`card-color cascading-admin-card `}
          >
            <div className="admin-up">
              <div className="d-flex justify-content-between align-items-start">
                <MDBIcon
                  icon="chart-pie"
                  className={`primary-color z-depth-1  p-3`}
                />
                <span className="d-inline-block grey-text mt-4 pt-2 datatitle">Disk Used</span>
              </div>
              <div className="data ">
                <h3 className="font-weight-bold dynamic-text-color">
                  <MDBAnimation type="fadeIn">
                    {systemSummary.usedDiskCount && systemSummary.totalDiskCount
                      ? `${systemSummary.usedDiskCount}/${systemSummary.totalDiskCount}`
                      : 0}
                  </MDBAnimation>
                </h3>
              </div>
            </div>
            <MDBCardBody className="custom-progress" cascade>
              <MDBProgress
                value={parseInt(summaryPercentage.diskUsed.value)}
                barClassName={`${summaryPercentage.diskUsed.color} py-0 my-0 darken-3`}
                material />
              <p className="mb-0 mt-2 dynamic-text-color">
                Used Disks: {`(${summaryPercentage.diskUsed.value}%)`}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className={appContext.dashboardLayout === "layout1" ? "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-4" : "col-12 col-lg-6 mb-5 mt-3 mb-xl-4"}>
          <MDBCard cascade className="cascading-admin-card card-color">
            <div className="admin-up">
              <div className="d-flex justify-content-between align-items-start">
                <MDBIcon
                  icon="clock"
                  className="primary-color darken-1 z-depth-1 ml-1 p-3"
                />
                <span className="d-inline-block grey-text mt-4 pt-2 datatitle">Server Time</span>
              </div>

              <div className="data d-flex align-items-center justify-content-between">
                <small className="dynamic-text-color font-weight-bold">{systemSummary.serverDate}</small>
                <h3 className="font-weight-bold dynamic-text-color">
                  {liveTime ? (
                    <MDBAnimation type="flash">{liveTime}</MDBAnimation>
                  ) : 0}
                </h3>
              </div>
            </div>
            <MDBCardBody cascade>
              <p className="mb-0 dynamic-text-color">
                Up Time: {systemSummary.systemUpTime}
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default withDashboardItems(SystemSummary);
