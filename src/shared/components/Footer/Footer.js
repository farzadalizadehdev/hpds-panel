import React from "react";
import { MDBFooter } from "mdbreact";
import { MDBIcon } from "mdbreact";

const Copyrights = (props) => {
  const date = new Date().getFullYear();
  return (
    <MDBFooter
      className={props.className}
      style={{ ...props.style, zIndex: 2 }}
    >
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {date} Copyright: <a href="http://hpds.ir"> www.hpds.ir | </a>
        <a href="https://www.linkedin.com/company/parsa-hpds/">
          <MDBIcon fab icon="linkedin" size="md" className="pl-2 white-text" />
        </a>
        <a href="https://www.instagram.com/hpds.ir/">
          <MDBIcon fab icon="instagram" size="md" className="p-2 white-text" />
        </a>
      </p>
    </MDBFooter>
  );
};
export default Copyrights;
