import React from "react";

const Spinner = (props) => {
  let color = props.textColor ? props.textColor : null;
  return (
    <>
      <div
        className={`spinner-border text-light spinner-border-sm ${color}`}
        role="status"
      ></div>
      <span className={`ml-2 text-light ${color}`}>
        {props.text ? props.text + "..." : "Loading..."}
      </span>
    </>
  );
};

export default Spinner;
