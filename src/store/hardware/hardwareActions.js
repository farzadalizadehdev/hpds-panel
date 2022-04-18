import * as actionTypes from "./actionTypes";
import api_url from "../../api/api";
import axios from "../../api/axios";

//hardware status DISK
export const fetchHardwareDiskStart = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_DISK_START,
  };
};

export const fetchHardwareDiskSuccess = (disk) => {
  return {
    type: actionTypes.FETCH_HARDWARE_DISK_SUCCESS,
    disk: disk,
  };
};

export const fetchHardwareDiskFail = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_DISK_FAIL,
  };
};

export const initFetchHardwareDisk = () => {
  return (dispatch) => {
    dispatch(fetchHardwareDiskStart());
    const method = {
      method: "hardware-status.disk",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchHardwareDiskSuccess(res.data.data));
          // console.log("disk",res.data.data);

        } else {
          dispatch(fetchHardwareDiskFail());
        }
      })
      .catch(() => {
        dispatch(fetchHardwareDiskFail());
      });
  };
};

//hardware status POWER
export const fetchHardwarePowerStart = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_POWER_START,
  };
};

export const fetchHardwarePowerSuccess = (power) => {
  return {
    type: actionTypes.FETCH_HARDWARE_POWER_SUCCESS,
    power: power,
  };
};

export const fetchHardwarePowerFail = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_POWER_FAIL,
  };
};

export const initFetchHardwarePower = () => {
  return (dispatch) => {
    dispatch(fetchHardwarePowerStart());
    const method = {
      method: "hardware-status.power",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchHardwarePowerSuccess(res.data.data));
          // console.log("power",res.data.data);
        } else {
          dispatch(fetchHardwarePowerFail());
          // console.log("fail power",res);
        }
      })
      .catch(() => {
        dispatch(fetchHardwarePowerFail());
        // console.log("err");
      });
  };
};

//hardware status ETH
export const fetchHardwareEthStart = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_ETH_START,
  };
};

export const fetchHardwareEthSuccess = (eth) => {
  return {
    type: actionTypes.FETCH_HARDWARE_ETH_SUCCESS,
    eth: eth,
  };
};

export const fetchHardwareEthFail = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_ETH_FAIL,
  };
};

export const initFetchHardwareEth = () => {
  return (dispatch) => {
    dispatch(fetchHardwareEthStart());
    const method = {
      method: "hardware-status.eth",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchHardwareEthSuccess(res.data.data));
          // console.log("network",res.data.data);
        } else {
          dispatch(fetchHardwareEthFail());
        }
      })
      .catch(() => {
        dispatch(fetchHardwareEthFail());
      });
  };
};

//hardware status ISCSI
export const fetchHardwareIscsiStart = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_ISCSI_START,
  };
};

export const fetchHardwareIscsiSuccess = (iscsi) => {
  return {
    type: actionTypes.FETCH_HARDWARE_ISCSI_SUCCESS,
    iscsi: iscsi,
  };
};

export const fetchHardwareIscsiFail = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_ISCSI_FAIL,
  };
};

export const initFetchHardwareIscsi = () => {
  return (dispatch) => {
    dispatch(fetchHardwareIscsiStart());
    const method = {
      method: "hardware-status.iscsi",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchHardwareIscsiSuccess(res.data.data));
          // console.log("iscsi",res.data.data);
        } else {
          dispatch(fetchHardwareIscsiFail());
        }
      })
      .catch(() => {
        dispatch(fetchHardwareIscsiFail());
      });
  };
};

//hardware status FC
export const fetchHardwareFcStart = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_FC_START,
  };
};

export const fetchHardwareFcSuccess = (fc) => {
  return {
    type: actionTypes.FETCH_HARDWARE_FC_SUCCESS,
    fc: fc,
  };
};

export const fetchHardwareFcFail = () => {
  return {
    type: actionTypes.FETCH_HARDWARE_FC_FAIL,
  };
};

export const initFetchHardwareFc = () => {
  return (dispatch) => {
    dispatch(fetchHardwareFcStart());
    const method = {
      method: "hardware-status.fc",
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(fetchHardwareFcSuccess(res.data.data));
          // console.log("fc",res.data.data);
        } else {
          dispatch(fetchHardwareFcFail());
        }
      })
      .catch(() => {
        dispatch(fetchHardwareFcFail());
      });
  };
};

//hardware status blink mode
export const diskBlinkStart = () => {
  return {
    type: actionTypes.BLINK_DISK_START,
  };
};

export const diskBlinkSuccess = (status, blinkDisk) => {
  return {
    type: actionTypes.BLINK_DISK_SUCCESS,
    blinkDisk: blinkDisk,
    status: status,
  };
};

export const diskBlinkFail = () => {
  return {
    type: actionTypes.BLINK_DISK_FAIL,
  };
};

export const initBlinkDisk = (params) => {
  return (dispatch) => {
    dispatch(diskBlinkStart());
    const method = {
      method: "hardware-status.blink-disks",
      params: params,
    };
    axios
      .post(api_url, method)
      .then((res) => {
        if (!res.data.error) {
          dispatch(
            diskBlinkSuccess(params.blink, params.disks)
            );
        } else {
          dispatch(diskBlinkFail());
        }
      })
      .catch(() => {
        dispatch(diskBlinkFail());
      });
  };
};
