import React from 'react'
import { MDBIcon, MDBRow, MDBCol } from 'mdbreact'
import UserGuide from '../../../../../components/Setting/AppSetting/UserGuide/UserGuide'

const Activities = props => {
    return (
        <div className="mt-4">
            <small className="grey-text m-0">
                Activities
            </small>
            <MDBRow
                onClick={props.toggleUserModal}
                className="d-flex flex-row align-items-center justify-content-between my-2 pl-1 pointer">
                <MDBCol>
                    <MDBIcon
                        className="grey-text"
                        icon="key"
                    />
                    <h6 className="dropdownItem dark-grey-text d-inline ml-2 font-weight-normal">
                        Change Password
                    </h6>
                </MDBCol>
            </MDBRow>
            <MDBRow
                onClick={props.toggleSettingModal}
                className="d-flex flex-row align-items-center justify-content-between pl-1 my-3 pointer">
                <MDBCol>
                    <MDBIcon
                        className="grey-text"
                        icon="image"
                    />
                    <h6 className="dropdownItem dark-grey-text d-inline ml-2 font-weight-normal">
                        Theme and Wallpaper
                    </h6>
                </MDBCol>
            </MDBRow>
            <MDBRow
                className="d-flex flex-row align-items-center justify-content-between pl-2">
                <MDBCol>
                    <MDBIcon
                        className="grey-text"
                        icon="lightbulb"
                    />
                    <h6 className="dark-grey-text d-inline ml-2 font-weight-normal">
                        User Guide
                    </h6>
                </MDBCol>
                <UserGuide />
            </MDBRow>
        </div>
    )
}

export default Activities