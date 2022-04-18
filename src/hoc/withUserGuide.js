import React, { useContext } from "react";
import { AppContext } from "../context/app/app-context";
const withUserGuide = (WrappedComponent) => {
  const WithUserGuide = (props) => {
    const appContext = useContext(AppContext);
    if (appContext.userGuide) {
      return <WrappedComponent {...props} />;
    } else {
      return null
    }
  };
  return WithUserGuide;
};

export default withUserGuide;
