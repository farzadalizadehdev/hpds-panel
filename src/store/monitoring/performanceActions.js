import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//export disk
export const exportPerformanceDiskStart = () => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_DISK_START,
  };
};

export const exportPerformanceDiskSuccess = (message, response) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_DISK_SUCCESS,
    exportDisk: response,
    message: message,
  };
};

export const exportPerformanceDiskFail = (error) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_DISK_FAIL,
    error: error,
  };
};

//export storage
export const exportPerformanceStorageStart = () => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_STORAGE_START,
  };
};

export const exportPerformanceStorageSuccess = (message, response) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_STORAGE_SUCCESS,
    exportStorage: response,
    message: message,
  };
};

export const exportPerformanceStorageFail = (error) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_STORAGE_FAIL,
    error: error,
  };
};

//export iscsi
export const exportPerformanceIscsiStart = () => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_ISCSI_START,
  };
};

export const exportPerformanceIscsiSuccess = (message, response) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_ISCSI_SUCCESS,
    exportIscsi: response,
    message: message,
  };
};

export const exportPerformanceIscsiFail = (error) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_ISCSI_FAIL,
    errro: error,
  };
};

//export fc
export const exportPerformanceFcStart = () => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_FC_START,
  };
};

export const exportPerformanceFcSuccess = (massage, response) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_FC_SUCCESS,
    exportFc: response,
    massage: massage,
  };
};

export const exportPerformanceFcFail = (error) => {
  return {
    type: actionTypes.EXPORT_PERFORMANCE_FC_FAIL,
    error: error,
  };
};

export const initPerformanceExport = (params) => {
  let exportStart;
  let exportSuccess;
  let exportFail;

  switch (params["entity-type"]) {
    case "pool":
      exportStart = exportPerformanceDiskStart();
      exportSuccess = (msg, data) => exportPerformanceDiskSuccess(msg, data);
      exportFail = (msg) => exportPerformanceDiskFail(msg);
      break;
    case "lun":
      exportStart = exportPerformanceStorageStart();
      exportSuccess = (msg, data) => exportPerformanceStorageSuccess(msg, data);
      exportFail = (msg) => exportPerformanceStorageFail(msg);
      break;
    case "iscsi":
      exportStart = exportPerformanceIscsiStart();
      exportSuccess = (msg, data) => exportPerformanceIscsiSuccess(msg, data);
      exportFail = (msg) => exportPerformanceIscsiFail(msg);
      break;
    case "fc":
      exportStart = exportPerformanceFcStart();
      exportSuccess = (msg, data) => exportPerformanceFcSuccess(msg, data);
      exportFail = (msg) => exportPerformanceFcFail(msg);
      break;
    default:
      return;
  }

  return (dispatch) => {
    dispatch(exportStart);

    const method = {
      method: "performance.export",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(exportSuccess(res.data.message, res.data.data));
        } else {
          dispatch(exportFail(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(exportFail(err));
      });
  };
};

//report disk
export const reportPerformanceDiskStart = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_DISK_START,
  };
};

export const reportPerformanceDiskSuccess = (response) => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_DISK_SUCCESS,
    reportDisk: response,
  };
};

export const reportPerformanceDiskFail = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_DISK_FAIL,
  };
};

//report storage
export const reportPerformanceStorageStart = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_STORAGE_START,
  };
};

export const reportPerformanceStorageSuccess = (response) => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_STORAGE_SUCCESS,
    reportStorage: response,
  };
};

export const reportPerformanceStorageFail = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_STORAGE_FAIL,
  };
};

//report iscsi
export const reportPerformanceIscsiStart = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_ISCSI_START,
  };
};

export const reportPerformanceIscsiSuccess = (response) => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_ISCSI_SUCCESS,
    reportIscsi: response,
  };
};

export const reportPerformanceIscsiFail = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_ISCSI_FAIL,
  };
};

//report fc
export const reportPerformanceFcStart = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_FC_START,
  };
};

export const reportPerformanceFcSuccess = (response) => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_FC_SUCCESS,
    reportFc: response,
  };
};

export const reportPerformanceFcFail = () => {
  return {
    type: actionTypes.REPORT_PERFORMANCE_FC_FAIL,
  };
};

export const initPerformanceReport = (params) => {
  let reportStart;
  let reportSuccess;
  let reportFail;

  switch (params["entity-type"]) {
    case "pool":
      reportStart = reportPerformanceDiskStart();
      reportSuccess = (data) => reportPerformanceDiskSuccess(data);
      reportFail = () => reportPerformanceDiskFail();
      break;
    case "lun":
      reportStart = reportPerformanceStorageStart();
      reportSuccess = (data) => reportPerformanceStorageSuccess(data);
      reportFail = () => reportPerformanceStorageFail();
      break;
    case "iscsi":
      reportStart = reportPerformanceIscsiStart();
      reportSuccess = (data) => reportPerformanceIscsiSuccess(data);
      reportFail = () => reportPerformanceIscsiFail();
      break;
    case "fc":
      reportStart = reportPerformanceFcStart();
      reportSuccess = (data) => reportPerformanceFcSuccess(data);
      reportFail = () => reportPerformanceFcFail();
      break;
    default:
      break
  }

  return (dispatch) => {
    dispatch(reportStart);

    const method = {
      method: "performance.report",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(reportSuccess(res.data.data));
        } else {
          dispatch(reportFail());
        }
      })
      .catch(() => {
        dispatch(reportFail());
      });
  };
};
