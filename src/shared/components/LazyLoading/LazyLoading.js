import { MDBAnimation } from "mdbreact";
import React from "react";
import lazyLogo from "../../assets/images/lazyLogo.svg";
import "./LazyLoading.css";

const LazyLoading = () => {
  return (
    <MDBAnimation type="fadeIn">
      <div className="lazyWrapper">
        <img className="lazyLogo" src={lazyLogo} alt=""/>
      </div>
    </MDBAnimation>
  );
};

export default LazyLoading;
