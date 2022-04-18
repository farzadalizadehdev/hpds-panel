import { updateObject } from "../../utility/Utility";
import * as actionTypes from "./actionTypes";

const initialState = {
  disk: null,
  loadingDisk: false,
  errorDisk: false,

  fc: null,
  loadingFc: false,
  errorFc: false,

  iscsi: null,
  loadingIscsi: false,
  errorIscsi: false,

  eth: null,
  loadingEth: false,
  errorEth: false,

  power: null,
  loadingPower: false,
  errorPower: false,

  blinkDisk: null,
  status:null,
  loadingBlink: false,
  errorBlink: false,
};

//fetch hardware disk
const fetchHardwareDiskStart = (state) => {
  return updateObject(state, {
    loadingDisk: true,
    errorDisk: false,
  });
};

const fetchHardwareDiskSuccess = (state, action) => {
  return updateObject(state, {
    disk: action.disk,
    loadingDisk: false,
    errorDisk: false,
  });
};

const fetchHardwareDiskFail = (state) => {
  return updateObject(state, {
    loadingDisk: false,
    errorDisk: true,
  });
};
//fetch hardware power
const fetchHardwarePowerStart = (state) => {
  return updateObject(state, {
    loadingPower: true,
    errorPower: false,
  });
};

const fetchHardwarePowerSuccess = (state, action) => {
  return updateObject(state, {
    power: action.power,
    loadingPower: false,
    errorPower: false,
  });
};

const fetchHardwarePowerFail = (state) => {
  return updateObject(state, {
    loadingPower: false,
    errorPower: true,
  });
};
//fetch hardware eth
const fetchHardwareEthStart = (state) => {
  return updateObject(state, {
    loadingEth: true,
    errorEth: false,
  });
};

const fetchHardwareEthSuccess = (state, action) => {
  return updateObject(state, {
    eth: action.eth,
    loadingEth: false,
    errorEth: false,
  });
};

const fetchHardwareEthFail = (state) => {
  return updateObject(state, {
    loadingEth: false,
    errorEth: true,
  });
};
//fetch hardware iscsi
const fetchHardwareIscsiStart = (state) => {
  return updateObject(state, {
    loadingIscsi: true,
    errorIscsi: false,
  });
};

const fetchHardwareIscsiSuccess = (state, action) => {
  return updateObject(state, {
    iscsi: action.iscsi,
    loadingIscsi: false,
    errorIscsi: false,
  });
};

const fetchHardwareIscsiFail = (state) => {
  return updateObject(state, {
    loadingIscsi: false,
    errorIscsi: true,
  });
};
//fetch hardware fc
const fetchHardwareFcStart = (state) => {
  return updateObject(state, {
    loadingFc: true,
    errorFc: false,
  });
};

const fetchHardwareFcSuccess = (state, action) => {
  return updateObject(state, {
    fc: action.fc,
    loadingFc: false,
    errorFc: false,
  });
};

const fetchHardwareFcFail = (state) => {
  return updateObject(state, {
    loadingFc: false,
    errorFc: true,
  });
};
//hardware blink
const diskBlinkStart = (state) => {
  return updateObject(state, {
    loadingBlink: true,
    errorBlink: false,
  });
};

const diskBlinkSuccess = (state, action) => {
  return updateObject(state, {
    blinkDisk: action.blinkDisk,
    status: action.status,
    loadingBlink: false,
    errorBlink: false,
  });
};

const diskBlinkFail = (state) => {
  return updateObject(state, {
    loadingBlink: false,
    errorBlink: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //hardware disk
    case actionTypes.FETCH_HARDWARE_DISK_START:
      return fetchHardwareDiskStart(state, action);
    case actionTypes.FETCH_HARDWARE_DISK_SUCCESS:
      return fetchHardwareDiskSuccess(state, action);
    case actionTypes.FETCH_HARDWARE_DISK_FAIL:
      return fetchHardwareDiskFail(state, action);
    //hardware power
    case actionTypes.FETCH_HARDWARE_POWER_START:
      return fetchHardwarePowerStart(state, action);
    case actionTypes.FETCH_HARDWARE_POWER_SUCCESS:
      return fetchHardwarePowerSuccess(state, action);
    case actionTypes.FETCH_HARDWARE_POWER_FAIL:
      return fetchHardwarePowerFail(state, action);
    //hardware eth
    case actionTypes.FETCH_HARDWARE_ETH_START:
      return fetchHardwareEthStart(state, action);
    case actionTypes.FETCH_HARDWARE_ETH_SUCCESS:
      return fetchHardwareEthSuccess(state, action);
    case actionTypes.FETCH_HARDWARE_ETH_FAIL:
      return fetchHardwareEthFail(state, action);
    //hardware iscsi
    case actionTypes.FETCH_HARDWARE_ISCSI_START:
      return fetchHardwareIscsiStart(state, action);
    case actionTypes.FETCH_HARDWARE_ISCSI_SUCCESS:
      return fetchHardwareIscsiSuccess(state, action);
    case actionTypes.FETCH_HARDWARE_ISCSI_FAIL:
      return fetchHardwareIscsiFail(state, action);
    //hardware fc
    case actionTypes.FETCH_HARDWARE_FC_START:
      return fetchHardwareFcStart(state, action);
    case actionTypes.FETCH_HARDWARE_FC_SUCCESS:
      return fetchHardwareFcSuccess(state, action);
    case actionTypes.FETCH_HARDWARE_FC_FAIL:
      return fetchHardwareFcFail(state, action);
    //blink disk
    case actionTypes.BLINK_DISK_START:
      return diskBlinkStart(state, action);
    case actionTypes.BLINK_DISK_SUCCESS:
      return diskBlinkSuccess(state, action);
    case actionTypes.BLINK_DISK_FAIL:
      return diskBlinkFail(state, action);
    default:
      return state;
  }
};

export default reducer;
