import React from 'react'
import { MDBCol } from 'mdbreact'

const SoftwareVersion = props => {
    return (
        <div className={props.className}>
            <small className="white-text opacity-70 m-0">
                software versions
            </small>
            <MDBCol className="white-text d-flex flex-column align-items-start py-1 px-0">
                <small className="d-block">
                    SAB-OS: {props.summaryList.sabVersion}
                </small>
                <small className="d-block">
                    API: {props.summaryList.apiVarsion}
                </small>
                <small className="d-block">
                    CLI:  {props.summaryList.cliVersion}
                </small>
                <small className="d-block">
                    UI: {props.summaryList.uiVersion}
                </small>
            </MDBCol>
        </div>
    )
}

export default SoftwareVersion