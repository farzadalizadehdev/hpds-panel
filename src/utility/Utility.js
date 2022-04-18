import { createTheme } from '@material-ui/core/styles';
import { useContext } from 'react';
import { AppContext } from '../context/app/app-context';

//create chart
export const createChart = (chartLabel, chartData, xKey, yKey) => {
  let initialData = [];
  let labels = [];
  let entityName = [];
  let chartBackgroundColor = [
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(17, 115, 109, 0.6)",
    "rgba(240, 61, 131, 0.6)",
    "rgba(7, 47, 40, 0.6)",
    "rgba(170, 153, 46, 0.6)",
    "rgba(252, 202, 99, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(240, 61, 131, 0.6)",
    "rgba(17, 115, 109, 0.6)",
    "rgba(7, 47, 40, 0.6)",
    "rgba(170, 153, 46, 0.6)",
    "rgba(252, 202, 99, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(240, 61, 131, 0.6)",
    "rgba(17, 115, 109, 0.6)",
    "rgba(7, 47, 40, 0.6)",
    "rgba(170, 153, 46, 0.6)",
    "rgba(252, 202, 99, 0.6)",
  ];

  Object.keys(chartData).map((key) => {
    labels.push(chartData[key][xKey]);
  });

  chartData.map((item) => {
    entityName.push(item.entity_name);
  });

  entityName = new Set(entityName);

  let groupArrayOfObjects = chartData.reduce((e, i) => {
    e[i.entity_name] = e[i.entity_name] || [];
    e[i.entity_name].push(i);
    return e;
  }, Object.create(null));

  Object.keys(groupArrayOfObjects).map((key, idx) => {
    let data_ = {};
    data_["data"] = [];
    data_["label"] = key;
    data_["fill"] = false;
    data_["name"] = chartLabel;
    data_["lineTension"] = 0;
    data_["backgroundColor"] = chartBackgroundColor[idx];
    labels.map((obj, idxx) => {
      try {
        if (
          obj.toString() === groupArrayOfObjects[key][idxx][xKey].toString()
        ) {
          data_["data"].push(groupArrayOfObjects[key][idxx][yKey]);
        } else {
          data_["data"].push(0);
        }
      } catch (e) {
        data_["data"].push(0);
      }
    });

    data_["data"] = data_["data"].filter((d) => d !== undefined);

    initialData.push(data_);
  });

  var config = {
    type: "line",
    data: {
      labels: labels,
      datasets: initialData,
    },
    options: {
      outerHeight: 300,
      lineTension: 0,
      responsive: true,
      maintainAspectRatio: false,
      //   title: {
      //   	textValidation: chartTitle
      //   },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: chartLabel,
            },
          },
        ],
      },
    },
  };

  return config;
};

//formatBytes
export const formatBytes = (bytes, decimals) => {
  if (bytes === 0) return "0 GB";
  if (isNaN(parseInt(bytes))) return bytes;
  if (typeof bytes === "string") bytes = parseInt(bytes);
  if (bytes === 0) return "0";
  const k = 1000;
  const dm = decimals + 1 || 3;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm)).toFixed(2)} ${sizes[i]}`;
};

//formateDate
export const formatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return [year, month, day].join("-");
};

//find and focus system components in hardware status
export const findSystemComponentItem = (attribute, value, className) => {
  let elements = document.getElementsByClassName(className);

  [].forEach.call(elements, function (el) {
    el.classList.remove("active");
  });

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute(attribute) === value) {
      elements[i].classList.add("active");
      let parent = elements[i].parentElement;
      let parentId = parent.getAttribute("data-id");
      elements[i].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      return parentId;
    }
  }
};

//find target element information in hardware status
export const findInformationRowData = (attribute, value, className) => {
  let elements = document.getElementsByClassName(className);
  [].forEach.call(elements, function (el) {
    el.setAttribute("hidden", true);
  });

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute(attribute) === value) {
      elements[i].removeAttribute("hidden");
    }
  }
};

//find targe element in hardware status
export const findHardwareElement = (attribute, value, className) => {
  let item = document.getElementsByClassName(className);
  [].forEach.call(item, function (el) {
    el.classList.remove("active");
  });
  for (let i = 0; i < item.length; i++) {
    if (item[i].getAttribute(attribute) === value) {
      item[i].classList.add("active");
    }
  }
};

//check blinking in hardware status
export const checkBlinkingDisk = (bilinkingDisk) => {
  let disk = document.getElementsByClassName("hardwareElement active");
  let diskID = disk[0].getAttribute("data-enc");
  if (bilinkingDisk.length) {
    if (bilinkingDisk.includes(diskID)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//raidData
export const raids = [
  {
    name: "raid0",
    value: 0,
    raid: [
      {
        spanDepth: 1,
        minDisk: 1,
        diskCountRatio: 1,
      },
    ],
  },
  {
    name: "raid1",
    value: 1,
    raid: [
      {
        spanDepth: 1,
        minDisk: 2,
        maxDisk: 2,
        diskCountRatio: 1,
      },
    ],
  },
  {
    name: "raid10",
    value: 10,
    raid: [
      {
        spanDepth: 2,
        minDisk: 8,
        diskCountRatio: 8,
      },
    ],
  },
  {
    name: "raid5",
    value: 5,
    raid: [
      {
        spanDepth: 1,
        minDisk: 3,
        diskCountRatio: 1,
      },
    ],
  },
  {
    name: "raid6",
    value: 6,
    raid: [
      {
        spanDepth: 1,
        minDisk: 4,
        diskCountRatio: 1,
      },
    ],
  },
  {
    name: "raid50",
    value: 50,
    raid: [
      {
        spanDepth: 2,
        minDisk: 6,
        diskCountRatio: [2],
      },
      {
        spanDepth: 3,
        minDisk: 9,
        diskCountRatio: [3],
      },
      {
        spanDepth: 4,
        minDisk: 12,
        diskCountRatio: [4],
      },
      {
        spanDepth: 5,
        minDisk: 15,
        diskCountRatio: [5],
      },
      {
        spanDepth: 6,
        minDisk: 18,
        diskCountRatio: [6],
      },
      {
        spanDepth: 7,
        minDisk: 21,
        diskCountRatio: [7],
      },
      {
        spanDepth: 8,
        minDisk: 24,
        diskCountRatio: [8],
      },
    ],
  },
  {
    name: "raid60",
    value: 60,
    raid: [
      {
        spanDepth: 2,
        minDisk: 8,
        diskCountRatio: [2],
      },
      {
        spanDepth: 3,
        minDisk: 12,
        diskCountRatio: [3],
      },
      {
        spanDepth: 4,
        minDisk: 16,
        diskCountRatio: [4],
      },
      {
        spanDepth: 5,
        minDisk: 20,
        diskCountRatio: [5],
      },
      {
        spanDepth: 6,
        minDisk: 24,
        diskCountRatio: [6],
      },
      {
        spanDepth: 7,
        minDisk: 28,
        diskCountRatio: [7],
      },
      {
        spanDepth: 8,
        minDisk: 32,
        diskCountRatio: [8],
      },
    ],
  },
];

//updateObject
export const updateObject = (oldObject, updatedPropertice) => {
  return {
    ...oldObject,
    ...updatedPropertice,
  };
};

//user avatar background
export const randomUserBackground = () => {
  let randomColor = (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  return `#${randomColor}`
}

//get client browser
export const getBrowserType = () => {

  let systemBrowser, userAgent = navigator.userAgent;
  if (userAgent.includes("Firefox")) {
    systemBrowser = `Mozilla Firefox v${userAgent.split("Firefox/")[1]}`;
  } else if (userAgent.includes("SamsungBrowser")) {
    systemBrowser = "Samsunge Internet";
  } else if (userAgent.includes("Opera")) {
    systemBrowser = `Opera v${userAgent.split("Opera/")[1]}`;
  } else if (userAgent.includes("Trident")) {
    systemBrowser = `Internet Explorer v${userAgent.split("Trident/")[1]}`;
  } else if (userAgent.includes("Edge")) {
    systemBrowser = `Microsoft Edge(Legacy) v${userAgent.split("Edge/")[1]}`;
  } else if (userAgent.includes("Edg")) {
    systemBrowser = `Microsoft Edge v${userAgent.split("Edg/")[1].split(".")[0]}`;
  } else if (userAgent.includes("Chrome")) {
    systemBrowser = `Chrome v${userAgent.split("Chrome/")[1].split(".")[0]}`;
  } else if (userAgent.includes("Safari")) {
    systemBrowser = `Apple Safari v${userAgent.split("Safari/")[1].split(".")[0]}`
  } else systemBrowser = "unKnown";
  return systemBrowser;
}

//get client system os
export const getOsType = () => {

  let systemOs, platform = navigator.platform;
  if (platform.indexOf("Win") > -1) {
    systemOs = "Windows";
  } else if (platform.indexOf("Linux") > -1) {
    systemOs = "Linux";
  } else systemOs = "MacOs";
  return systemOs;
}

//get time
export const getReportTime = (ago) => {
  let newDate = formatDate(new Date());
  let options = {
    hour12: false,
    hour: "2-digit",
    minute: "numeric",
  };
  const startTime = new Date(new Date().getTime() - ago * 60 * 1000).toLocaleTimeString("en-US", options);
  const endTime = new Date(new Date().getTime()).toLocaleTimeString("en-US", options);
  return [newDate, startTime, endTime]
}

//timer
export const timer = (count, cycle) => {

  let counter = cycle
  const secondCounter = counter % 60;
  const minuteCounter = Math.floor(counter / 60);

  const computedSecond =
    String(secondCounter).length === 1
      ? `0${secondCounter}`
      : secondCounter;

  const computedMinute =
    String(minuteCounter).length === 1
      ? `0${minuteCounter}`
      : minuteCounter;

  computedMinute > 0 ?
    counter = counter - 1 :
    computedSecond > 0
      ? counter = counter - 1
      : counter = count;
  return [computedSecond, computedMinute, counter]

}

// input validation
export const inputValidation = (inputValue, nameOptions, checkingItems) => {

  let validationText = ''
  let validity = false
  let regex = new RegExp(checkingItems.validChars);

  const checkDuplicateName = (!nameOptions.every((option) => option.text.toLowerCase() !== inputValue.toLowerCase())) && checkingItems.duplicateName
  const checkLength = checkingItems.lengthChars && inputValue.length > checkingItems.lengthChars
  const checkValidChars = checkingItems.validChars && !regex.test(inputValue)

  switch (true) {
    case checkDuplicateName:
      validationText = 'This name already exists!'
      validity = false
      break;
    case checkLength:
      validationText = `Character length most be less than ${checkingItems.lengthChars}.`
      validity = false
      break;
    case checkValidChars:
      validationText = `Please enter valid characters!`
      validity = false
      break;
    default:
      validationText = 'Looks Good!'
      validity = true
      break;
  }
  return ({ validationText, validity })
}

//data table create theme function
export const getMuiTheme = (theme, color) => {
  let
    mainColor, primaryColor,
    headTextColor, toolbarIconColor,
    rowTextColor, rowBoderColor,
    paginationTextColor

  switch (theme) {
    case 'dark':
      //main  
      primaryColor = `rgb(${color}) !important`
      mainColor = '#2f3042'
      //header
      headTextColor = "#BDBDBD"
      toolbarIconColor = "#fff"
      //rows
      rowTextColor = "#fff"
      rowBoderColor = "#252736"
      //pagination
      paginationTextColor = "#fff"
      break;
    default:
      primaryColor = `rgb(${color}) !important`
      mainColor = '#ffffff'
      break;
  }
  return (
    createTheme({
      overrides: {
 
        MUIDataTable: {
          paper: {
            backgroundColor: mainColor
          }
        },
        MUIDataTableHeadCell: {
          fixedHeader: {
            backgroundColor: mainColor,
            color: headTextColor,
          },
          sortActive: {
            color: headTextColor
          
        }
        },
        MUIDataTableBodyCell: {
          root: {
            color: rowTextColor,
            borderBottomColor: rowBoderColor
          }
        },
        MuiButton: {
          root: {
            color: headTextColor
          }
        },
        MUIDataTableFooter: {
          root: {
            backgroundColor: mainColor,
          }
        },
        MuiTablePagination: {
          root: {
            color: paginationTextColor,
            actions: {
              color: paginationTextColor
            }
          }
        },
        MUIDataTableViewCol: {
          checkbox: {
            color: primaryColor,
          },
          checked: {
            color: primaryColor
          }
        },
        MUIDataTableFilter: {
          checkbox: {
            color: primaryColor,
          },
          checked: {
            color: primaryColor
          }
        },
        MUIDataTableSelectCell: {
          root: {
            backgroundColor: mainColor
          },
          headerCell: {
            backgroundColor: mainColor,
          },
          checked: {
            color: primaryColor,
          },
          checkboxRoot: {
            color: toolbarIconColor,
          },
        },
        MUIDataTableToolbar: {
          root: {
            backgroundColor: mainColor
          },
          iconActive: {
            color: toolbarIconColor,
          },
          icon: {
            color: toolbarIconColor,
            '&:hover': {
              color: toolbarIconColor
            }
          },
        },
        // MuiInputBase: {
        //   root: {
        //     color: toolbarIconColor
        //   }
        // },
        MUIDataTableSearch: {
          main: {
            color: toolbarIconColor,
            '&:hover': {
              color: toolbarIconColor
            }
          },
          searchIcon: {
            color: toolbarIconColor
          },
          searchText: {
            color: toolbarIconColor
          },
          clearIcon: {
            color: toolbarIconColor,
            '&:hover': {
              color: toolbarIconColor
            }
          }
        },
        MUIDataTableFilterList: {
          root: {
            backgroundColor: mainColor,
          }
        },
        MuiTableSortLabel: {
            icon: {
                color:`${headTextColor} !important`
              
            }
          
        }
      }
    })
  )
}


export const GetColor = () => {
  let primaryColor, darkColor, lightColor;
  const appContext = useContext(AppContext);
  appContext.theme.primaryColor.map(color => {
    if (color.checked) {
      primaryColor = color.colors.primary;
      darkColor = color.colors.dark;
      lightColor = color.colors.light;
    };
  })
  return ({ primaryColor, darkColor, lightColor })
}

export const GetTheme = () =>{
  let theme;
  const appContext = useContext(AppContext);
  appContext.theme.mode.map(mode =>{
    if(mode.checked){
      theme = mode.palette
    }
  })
  return(theme)
}

