import React, { useContext } from "react";
import { AppContext } from "../context/app/app-context";
const withDataTable = (WrappedComponent) => {
  const WithDataTable = (props) => {
    const appContext = useContext(AppContext);
    const filtereColumns = props.data.columns.filter(
      appContext.sabOS === "SE" ? (col) => col.name !== "owner" : (col) => col
    );
    let filteredDataTable = {
      data: {
        rows: props.data.rows,
        columns: filtereColumns,
        options: props.data.options,
      },
    };
    return <WrappedComponent props={filteredDataTable} />;
  };
  return WithDataTable;
};

export default withDataTable;
