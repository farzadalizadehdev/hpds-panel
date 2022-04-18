import React, { useEffect, useState, useContext } from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBSimpleChart,
  MDBView,
} from "mdbreact";
import EmptyData from "../../../shared/components/EmptyData/EmptyData";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/app/app-context";
import withDashboardItems from "../../../hoc/withDashboardItems";
import { GetColor } from "../../../utility/Utility"

const TopLunUsage = (props) => {
  const [topLunUsage, setTopLunUsage] = useState(null);
  const appContext = useContext(AppContext)
  const { primaryColor, lightColor } = GetColor()


  useEffect(() => {
    if (props.summaryData) {
      const renderTopLunUsage = props.summaryData.top_luns_usage.map(
        (lun, key) => {
          return (
            <div key={key} lg="4" className="d-flex flex-column p-1">
              <MDBSimpleChart
                style={{ margin: "10" }}
                strokeColor={`rgba(${primaryColor},1)`}
                labelColor={`hsl(${lightColor},1)`}
                strokeWidth={3}
                width={100}
                height={100}
                percent={lun.size_percent}
                labelFontWeight="normal"
              />
              <span className="grey-text small text-center center-block mt-2">
                {lun.lun_name}
              </span>
            </div>
          );
        }
      );
      setTopLunUsage(renderTopLunUsage);
    }
  }, [props.summaryData, primaryColor]);
  return (
    <MDBCol className={appContext.dashboardLayout === 'layout1' ? 'col-lg-4 flex-grow-1 mb-3' : 'layoutItemsV2'}>
      <MDBCard narrow className="w-100">
        <MDBView cascade className="gradient-card-header primary-color">
          <Link className="white-text" to="/lun">
            <h6 className="mb-0 font-weight-normal">Top Lun Usage</h6>
          </Link>
        </MDBView>
        <MDBCardBody
          style={{ minHeight: "300px" }}
          className="text-center py-5 d-flex justify-content-center align-items-center"
        >
          {topLunUsage && topLunUsage.length ? topLunUsage : <EmptyData />}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default withDashboardItems(TopLunUsage);
