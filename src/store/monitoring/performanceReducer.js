import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  error: false,
  loadingExport: false,
  loadingReport: false,
  //export
  exportDisk: null,
  exportStorage: null,
  exportIscsi: null,
  exportFc: null,
  //report
  reportDisk: null,
  reportStorage: null,
  reportIscsi: null,
  reportFc: null,

  operationLoading: false,
};
//export disk

const exportPerformanceDiskStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingExport: true,
    operationLoading: true,
  });
};

const exportPerformanceDiskSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingExport: false,
    operationLoading: false,
    exportDisk: action.exportDisk,
  });
};

const exportPerformanceDiskFail = (state) => {
  return updateObject(state, {
    loadingExport: false,
    operationLoading: false,
    error: true,
  });
};

//export storage

const exportPerformanceStorageStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingExport: true,
    operationLoading: true,
  });
};

const exportPerformanceStorageSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingExport: false,
    operationLoading: false,
    exportStorage: action.exportStorage,
  });
};

const exportPerformanceStorageFail = (state) => {
  return updateObject(state, {
    loadingExport: false,
    operationLoading: false,
    error: true,
  });
};

//export iscsi

const exportPerformanceIscsiStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingExport: true,
    operationLoading: true,
  });
};

const exportPerformanceIscsiSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingExport: false,
    operationLoading: false,
    exportIscsi: action.exportIscsi,
  });
};

const exportPerformanceIscsiFail = (state) => {
  return updateObject(state, {
    loadingExport: false,
    operationLoading: false,
    error: true,
  });
};

//export fc

const exportPerformanceFcStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingExport: true,
    operationLoading: true,
  });
};

const exportPerformanceFcSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingExport: false,
    operationLoading: false,
    exportFc: action.exportFc,
  });
};

const exportPerformanceFcFail = (state) => {
  return updateObject(state, {
    loadingExport: false,
    operationLoading: false,
    error: true,
  });
};

//report disk
const reportPerformanceDiskStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingReport: true,
    operationLoading: true,
  });
};

const reportPerformanceDiskSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingReport: false,
    operationLoading: false,
    reportDisk: action.reportDisk,
  });
};

const reportPerformanceDiskFail = (state) => {
  return updateObject(state, {
    loadingReport: false,
    operationLoading: false,
    error: true,
  });
};

//report storage
const reportPerformanceStorageStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingReport: true,
    operationLoading: true,
  });
};

const reportPerformanceStorageSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingReport: false,
    operationLoading: false,
    reportStorage: action.reportStorage,
  });
};

const reportPerformanceStorageFail = (state) => {
  return updateObject(state, {
    loadingReport: false,
    operationLoading: false,
    error: true,
  });
};

//report iscsi
const reportPerformanceIscsiStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingReport: true,
    operationLoading: true,
  });
};

const reportPerformanceIscsiSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingReport: false,
    operationLoading: false,
    reportIscsi: action.reportIscsi,
  });
};

const reportPerformanceIscsiFail = (state) => {
  return updateObject(state, {
    loadingReport: false,
    operationLoading: false,
    error: true,
  });
};

//report fc
const reportPerformanceFcStart = (state) => {
  return updateObject(state, {
    error: false,
    loadingReport: true,
  });
};

const reportPerformanceFcSuccess = (state, action) => {
  return updateObject(state, {
    error: false,
    loadingReport: false,
    operationLoading: false,
    reportFc: action.reportFc,
  });
};

const reportPerformanceFcFail = (state) => {
  return updateObject(state, {
    loadingReport: false,
    operationLoading: false,
    error: true,
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //EXPORT
    //export disk
    case actionTypes.EXPORT_PERFORMANCE_DISK_START:
      return exportPerformanceDiskStart(state, action);
    case actionTypes.EXPORT_PERFORMANCE_DISK_SUCCESS:
      return exportPerformanceDiskSuccess(state, action);
    case actionTypes.EXPORT_PERFORMANCE_DISK_FAIL:
      return exportPerformanceDiskFail(state, action);
    //export storage
    case actionTypes.EXPORT_PERFORMANCE_STORAGE_START:
      return exportPerformanceStorageStart(state, action);
    case actionTypes.EXPORT_PERFORMANCE_STORAGE_SUCCESS:
      return exportPerformanceStorageSuccess(state, action);
    case actionTypes.EXPORT_PERFORMANCE_STORAGE_FAIL:
      return exportPerformanceStorageFail(state, action);
    //export iscsi
    case actionTypes.EXPORT_PERFORMANCE_ISCSI_START:
      return exportPerformanceIscsiStart(state, action);
    case actionTypes.EXPORT_PERFORMANCE_ISCSI_SUCCESS:
      return exportPerformanceIscsiSuccess(state, action);
    case actionTypes.EXPORT_PERFORMANCE_ISCSI_FAIL:
      return exportPerformanceIscsiFail(state, action);
    //export iscsi
    case actionTypes.EXPORT_PERFORMANCE_FC_START:
      return exportPerformanceFcStart(state, action);
    case actionTypes.EXPORT_PERFORMANCE_FC_SUCCESS:
      return exportPerformanceFcSuccess(state, action);
    case actionTypes.EXPORT_PERFORMANCE_FC_FAIL:
      return exportPerformanceFcFail(state, action);

    //REPORT
    //report disk
    case actionTypes.REPORT_PERFORMANCE_DISK_START:
      return reportPerformanceDiskStart(state, action);
    case actionTypes.REPORT_PERFORMANCE_DISK_SUCCESS:
      return reportPerformanceDiskSuccess(state, action);
    case actionTypes.REPORT_PERFORMANCE_DISK_FAIL:
      return reportPerformanceDiskFail(state, action);
    //report storage
    case actionTypes.REPORT_PERFORMANCE_STORAGE_START:
      return reportPerformanceStorageStart(state, action);
    case actionTypes.REPORT_PERFORMANCE_STORAGE_SUCCESS:
      return reportPerformanceStorageSuccess(state, action);
    case actionTypes.REPORT_PERFORMANCE_STORAGE_FAIL:
      return reportPerformanceStorageFail(state, action);
    //report iscsi
    case actionTypes.REPORT_PERFORMANCE_ISCSI_START:
      return reportPerformanceIscsiStart(state, action);
    case actionTypes.REPORT_PERFORMANCE_ISCSI_SUCCESS:
      return reportPerformanceIscsiSuccess(state, action);
    case actionTypes.REPORT_PERFORMANCE_ISCSI_FAIL:
      return reportPerformanceIscsiFail(state, action);
    //report fc
    case actionTypes.REPORT_PERFORMANCE_FC_START:
      return reportPerformanceFcStart(state, action);
    case actionTypes.REPORT_PERFORMANCE_FC_SUCCESS:
      return reportPerformanceFcSuccess(state, action);
    case actionTypes.REPORT_PERFORMANCE_FC_FAIL:
      return reportPerformanceFcFail(state, action);
    default:
      return state;
  }
};

export default reducer;
