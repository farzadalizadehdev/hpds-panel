import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/app/app-context";

const ShowComponent = (props) => {
  const appContext = useContext(AppContext);
  const [hiddenComponent, setHiddenComponent] = useState();
  useEffect(() => {
    if (appContext.sabOS === props.showOn) {
      setHiddenComponent(false);
    } else {
      setHiddenComponent(true);
    }
  }, []);
  return !hiddenComponent ? props.children : null;
};

export default ShowComponent;
