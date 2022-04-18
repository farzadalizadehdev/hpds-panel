import React, { useState } from "react";
import { updateObject } from "../../utility/Utility";
import Theme from "../../shared/Themes/Themes";
export const AppContext = React.createContext({
  sabOS: "MX",
  changeSabOs: () => {},
  background: "background2",
  changeBackground: () => {},
  theme: {},
  changeTheme: () => {},
  userGuide: true,
  changeUserGuide: () => {},
  dashboardConfig: {},
  changeDashboardLayout: () => {},
  changeDashboardItems: () => {},
});

const AppContextProvider = (props) => {
  const [appConfig, setAppConfig] = useState({
    sabOS: localStorage.getItem("sabOs") || "MX",
    background: localStorage.getItem("background") || "background2",
    theme: {
      mode: localStorage.getItem("theme")
        ? JSON.parse(localStorage.getItem("theme")).mode
        : [
            { value: "light", text: "Light", checked: true, palette: Theme.light },
            { value: "dark", text: "Dark", checked: false, palette: Theme.dark },
          ],
      primaryColor: localStorage.getItem("theme")
        ? JSON.parse(localStorage.getItem("theme")).primaryColor
        : [
            {
              value: "hpdsColor",
              text: "HPDS",
              colors: {
                primary: "69, 181, 170",
                light: "180, 100%, 76%",
                dark: "182, 100%, 20%",
              },
              checked: true,
            },
            {
              value: "blueColor",
              text: "Blue",
              colors: {
                primary: "21, 101, 192",
                light: "241,93%,67%",
                dark: "224, 100%, 58%",
              },
              checked: false,
            },
            {
              value: "purpleColor",
              text: "Purple",
              colors: {
                primary: "106, 27, 154",
                light: "280, 98%, 64%",
                dark: "267, 75%, 31%",
              },
              checked: false,
            },
            {
              value: "pinkColor",
              text: "Pink",
              colors: {
                primary: "173, 20, 87",
                light: "334,70%,47%",
                dark: "328,81%,29%",
              },
              checked: false,
            },
            {
              value: "tealColor",
              text: "Teal",
              colors: {
                primary: "0, 105, 92",
                light: "172,100%,37%",
                dark: "170, 100%,15%",
              },
              checked: false,
            },

            {
              value: "yellowColor",
              text: "Yellow",
              colors: {
                primary: "249, 168, 37",
                light: "50,100%,50%",
                dark: "43, 86%,36%",
              },
              checked: false,
            },

            {
              value: "indigoColor",
              text: "Indigo",
              colors: {
                primary: "40, 53, 147",
                light: "231, 99%, 59%",
                dark: "235, 66%, 30%",
              },
              checked: false,
            },

            {
              value: "greenColor",
              text: "Green",
              colors: {
                primary: "46, 125, 50",
                light: "97, 81%, 48%",
                dark: "124, 55%, 24%",
              },
              checked: false,
            },
          ],
    },
    userGuide: localStorage.getItem("guide") === "true",
    dashboardConfig: {
      items: {
        options: JSON.parse(localStorage.getItem("dashboardItems")) || [
          {
            value: "pool_chart",
            text: "Pool Chart",
            uncheckable: true,
            checked: true,
          },
          {
            value: "top_pool_usage",
            text: "Top Pool Usage",
            uncheckable: true,
            checked: true,
          },
          {
            value: "top_lun_usage",
            text: "Top Lun Usage",
            uncheckable: true,
            checked: true,
          },
          {
            value: "system_summary",
            text: "System Summery",
            uncheckable: true,
            checked: true,
          },
          {
            value: "online_users",
            text: "Online Users",
            uncheckable: false,
            checked: true,
          },
          {
            value: "events",
            text: "Events",
            uncheckable: false,
            checked: true,
          },
          {
            value: "system_informations",
            text: "System informations",
            uncheckable: false,
            checked: true,
          },
        ],
      },
      layout: localStorage.getItem("layout") || "layout1",
    },
  });

  const handleChangeTheme = (themeConfig) => {
    localStorage.setItem("theme", JSON.stringify(themeConfig));
    setAppConfig((prevConfig) => {
      return {
        ...prevConfig,
        theme: themeConfig,
      };
    });
  };


  const handleChangeBackground = (background) => {
    localStorage.setItem("background", background);
    setAppConfig((prevConfig) => {
      return {
        ...prevConfig,
        background: background,
      };
    });
  };

  const handleChangeSabOs = (sabOs) => {
    localStorage.setItem("sabOs", sabOs.length > 1 ? "MX" : "SE");
    setAppConfig((prevConfig) => {
      return {
        ...prevConfig,
        sabOS: sabOs.length > 1 ? "MX" : "SE",
      };
    });
  };

  const handleUserGuide = (value) => {
    localStorage.setItem("guide", value);
    setAppConfig((prevConfig) => {
      return {
        ...prevConfig,
        userGuide: value,
      };
    });
  };

  const handleChangeLayout = (value) => {
    localStorage.setItem("layout", value);
    const updatedashboard = updateObject(appConfig, {
      dashboardConfig: updateObject(appConfig.dashboardConfig, {
        layout: value,
      }),
    });
    setAppConfig(updatedashboard);
  };

  const handleChangeItems = (value) => {
    localStorage.setItem("dashboardItems", JSON.stringify(value));
    const dashboardItems = updateObject(appConfig, {
      dashboardConfig: updateObject(appConfig.dashboardConfig, {
        items: updateObject(appConfig.dashboardConfig.items, {
          options: value,
        }),
      }),
    });
    setAppConfig(dashboardItems);
  };
  return (
    <AppContext.Provider
      value={{
        theme: appConfig.theme,
        changeTheme: handleChangeTheme,
        background: appConfig.background,
        changeBackground: handleChangeBackground,
        sabOS: appConfig.sabOS,
        changeSabOs: handleChangeSabOs,
        userGuide: appConfig.userGuide,
        changeUserGuide: handleUserGuide,
        dashboardLayout: appConfig.dashboardConfig.layout,
        dashboardItems: appConfig.dashboardConfig.items.options,
        changeDashboardLayout: handleChangeLayout,
        changeDashboardItems: handleChangeItems,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
