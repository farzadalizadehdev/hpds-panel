import React from "react";
import { MDBIcon } from "mdbreact";
const EmptyData = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <MDBIcon far icon="chart-bar" className="grey-text mb-2 opacity-50" size="2x" />
      <p className="font-weight-light grey-text font-italic">No Data</p>
    </div>
  );
};

export default EmptyData;
