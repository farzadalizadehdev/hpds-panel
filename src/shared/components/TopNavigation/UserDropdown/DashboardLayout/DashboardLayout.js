import React, { useContext } from 'react'
import { MDBCol, MDBRow, MDBIcon } from 'mdbreact'
import LayoutOne from "../../../../assets/images/layout1.png";
import LayoutTwo from '../../../../assets/images/layout2.png';
import { AppContext } from "../../../../../context/app/app-context";

const DashboardLayout = () => {
    const appContext = useContext(AppContext);

    const handleLayout = (e) => {
        appContext.changeDashboardLayout(e.target.id)
    }

    return (
        <div className="mt-4">
            <small className="grey-text">
                Dashboard Layout
            </small>
            <MDBRow className="d-flex align-items-center justify-content-center px-3 py-2 ">
                <MDBRow className="d-flex align-items-center justify-content-around w-100 border p-2 rounded">
                    <MDBCol className='d-flex flex-column align-items-center pointer' >
                        <img src={LayoutOne} className={appContext.dashboardLayout === "layout1" ? 'layoutborder selectedlayout' : 'layoutborder'} alt="" id='layout1' onClick={handleLayout} />
                        <small color="blue-grey">
                            {appContext.dashboardLayout === "layout1" ?
                                <MDBIcon icon="check" className="mr-2 primary-text" />
                                : null
                            }
                            Layout 1
                        </small>
                    </MDBCol>
                    <MDBCol className='d-flex flex-column align-items-center pointer'>
                        <img src={LayoutTwo} className={appContext.dashboardLayout === "layout2" ? 'layoutborder selectedlayout' : 'layoutborder'} alt="" id='layout2' onClick={handleLayout} />
                        <small color="blue-grey">
                            {appContext.dashboardLayout === "layout2" ?
                                <MDBIcon icon="check" className="mr-2 primary-text" />
                                : null
                            }
                            Layout 2
                        </small>
                    </MDBCol>
                </MDBRow>
            </MDBRow>
        </div>
    )
}

export default DashboardLayout