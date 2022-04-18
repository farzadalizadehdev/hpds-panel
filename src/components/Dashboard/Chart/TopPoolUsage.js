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


const TopPoolUsage = (props) => {
  const [topPoolUsage, setTopPoolUsage] = useState(null);
  const appContext = useContext(AppContext);
  const { lightColor } = GetColor()

  
  useEffect(() => {
    if (props.summaryData) {
      const renderTopPoolUsage = props.summaryData.top_pools_usage.map(
        (pool, key) => {
          let poolUsagePercent = pool.usage_percent.replace("%", "");
          return (
            <div key={key} lg="4" className="d-flex flex-column p-1">
              <MDBSimpleChart
                style={{ margin: "10" ,color:'white'}}
                strokeColor={`hsl(${lightColor},1)`}
                labelColor={`hsl(${lightColor},1)`}
                strokeWidth={3}
                width={100}
                height={100}
                percent={poolUsagePercent}
                labelFontWeight="normal"
              />
              <span className="grey-text small text-center center-block mt-2">
                {pool.name}
              </span>
            </div>
          );
        }
      );
      setTopPoolUsage(renderTopPoolUsage);
    }
  }, [props.summaryData , lightColor]);

  return (
    <MDBCol className={appContext.dashboardLayout === 'layout1' ? 'col-12 col-lg-4 col-md-6 flex-grow-1 mb-3' : 'layoutItemsV2'}>
      <MDBCard narrow className="w-100">
        <MDBView cascade className="gradient-card-header primary-color">
          <Link className="white-text" to="/pool">
            <h6 className="mb-0 font-weight-normal">Top Pool Usage</h6>
          </Link>
        </MDBView>
        <MDBCardBody
          style={{ minHeight: "300px" }}
          className="text-center py-5 d-flex justify-content-center align-items-center"
        >
          {topPoolUsage && topPoolUsage.length ? topPoolUsage : <EmptyData />}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default withDashboardItems(TopPoolUsage);
