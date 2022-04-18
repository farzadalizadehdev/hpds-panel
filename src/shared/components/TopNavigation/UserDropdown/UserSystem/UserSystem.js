import React from 'react'
import { MDBIcon, MDBCol, MDBRow } from 'mdbreact'
import { getOsType, getBrowserType } from '../../../../../utility/Utility'

const UserSystem = (props) => {
    return (
        <div className={props.className}>
            <small
                className="white-text opacity-70 m-0">
                User's System
            </small>
            <MDBCol className="white-text d-flex flex-column">
                <MDBRow className="my-1">
                    <MDBIcon
                        icon="laptop"
                        className="mr-2"
                    />
                    <small>
                        {getOsType()}
                    </small>
                </MDBRow>
                <MDBRow className="my-1">
                    <MDBIcon
                        icon="globe"
                        className="mr-2"
                    />
                    <small>
                        {getBrowserType()}
                    </small>
                </MDBRow>
            </MDBCol>
        </div>
    )
}

export default UserSystem