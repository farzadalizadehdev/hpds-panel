import React, { useEffect, useState, useContext } from "react";
import MUIDataTable from "mui-datatables";
import withDataTable from '../../../hoc/withDataTable'
import { ThemeProvider } from '@material-ui/core/styles';
import { getMuiTheme } from "../../../utility/Utility";
import { AppContext } from "../../../context/app/app-context";
import { GetColor } from "../../../utility/Utility"


const DataTable = (props) => {

  const appContext = useContext(AppContext)
  const [dataTable, setDataTable] = useState({
    theme: "light",
    primaryColor: "",
    rows: [],
    columns: [],
    options: {},
  });

  const { primaryColor } = GetColor()

  useEffect(() => {
    if (props) {
      const { rows, columns, options } = props.props.data;
      setDataTable((prevDataTable) => {
        return {
          ...prevDataTable,
          rows: rows,
          columns: columns,
          options: options,
        };
      });
    }
  }, [props]);

  useEffect(() => {
    appContext.theme.mode.map(theme => {
      if (theme.checked) {
        setDataTable((prevData) => {
          return {
            ...prevData,
            theme: theme.value
          }
        })
      }
    })
    setDataTable((prevData) => {
      return {
        ...prevData,
        primaryColor: primaryColor
      }
    })
  }, [appContext.theme])
  return (
    <ThemeProvider theme={getMuiTheme(dataTable.theme, dataTable.primaryColor)}>
      <MUIDataTable
        data={dataTable.rows}
        columns={dataTable.columns}
        options={dataTable.options}
      />
    </ThemeProvider>
  );
};

export default withDataTable(DataTable);
