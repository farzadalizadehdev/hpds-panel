import React, { useState, useEffect, useContext } from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBView, Link } from "mdbreact";
import { Bar } from "react-chartjs-2";
import EmptyData from "../../../shared/components/EmptyData/EmptyData";
import { GetColor, updateObject, randomUserBackground } from "../../../utility/Utility";
import { AppContext } from "../../../context/app/app-context";
import withDashboardItems from "../../../hoc/withDashboardItems";

const PoolChart = (props) => {

  const appContext = useContext(AppContext)
  let poolName = [];
  let poolUsed = [];
  let poolFree = [];

  const [chartData, setChartData] = useState({
    labels: null,
    datasets: [
      {
        label: "Pool Used Space (TB)",
        data: [],
        borderWidth: 1,
        backgroundColor: [],
        borderColor: ''
      },
      {
        label: "Pool Free Space (TB) ",
        data: [],
        borderWidth: 1,
        backgroundColor: [],
        borderColor: ''
      },
    ],
    options: {
      height: 150,
      legend: {
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  });

  useEffect(() => {
    let poolChartColor = []
    if (props.poolData) {
      props.poolData.pools.map((pool) => {
        poolName.push(pool.name);
        poolUsed.push(
          parseFloat(parseInt(pool.used_space) / 1024 ** 4).toFixed(2)
        );
        poolFree.push(
          parseFloat(parseInt(pool.free_space) / 1024 ** 4).toFixed(2)
        );
      });
      for (let index = 0; index < poolName.length; index++) {
        const color = index;
        for (let i = color; i <= color; i++) {
          const colorList = randomUserBackground();
          poolChartColor.push(colorList)
        }
      };
      const updatedChartData = updateObject(chartData, {
        labels: poolName,
        datasets: [
          updateObject(chartData.datasets[0], {
            data: poolUsed,
            backgroundColor: poolChartColor,
            borderColor: poolChartColor,
            hoverBackgroundColor: poolChartColor,
          }),
          updateObject(chartData.datasets[1], {
            data: poolFree,
            backgroundColor: poolChartColor,
            borderColor: poolChartColor,
            hoverBackgroundColor: poolChartColor,
          }),
        ],
      });
      setChartData(updatedChartData);
    }
  }, [props.poolData]);


  return (
    <MDBCol className={appContext.dashboardLayout === 'layout1' ? 'col-lg-4 flex-grow-1 mb-3' : 'layoutItemsV2 p-0'}>
      <MDBCard narrow className="w-100">
        <MDBView cascade className="gradient-card-header primary-color">
          <Link className="white-text py-0" to="/pool">
            <h6 className="mb-0 font-weight-normal">Pools</h6>
          </Link>
        </MDBView>
        <MDBCardBody
          className="d-flex justify-content-center align-items-center"
          style={{ maxHeight: "430px", minHeight: appContext.dashboardLayout === 'layout1' ? "300px" : "365px" }}
        >
          {chartData && chartData.datasets[0].data.length ? (
            <Bar data={chartData} height={130} />
          ) : (
            <EmptyData />
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default withDashboardItems(PoolChart);
