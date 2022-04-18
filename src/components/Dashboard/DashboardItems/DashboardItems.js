import React, { useState, useContext } from 'react'
import {
    MDBBtn,
    MDBIcon,
    MDBRow,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput
} from 'mdbreact'
import { AppContext } from '../../../context/app/app-context'

const DashboardItems = () => {
    const appContext = useContext(AppContext)
    const [show, setShow] = useState(false)
    const togglehandler = () => {
        setShow(!show)
    }
    const CheckHandler = (e) => {
        appContext.dashboardItems.map((item) => {
            if (item.value === e.target.id) {
                if (item.checked) {
                    item.checked = false
                } else {
                    item.checked = true
                }
            }
        })
        appContext.changeDashboardItems(appContext.dashboardItems)
    }

    return (
        <>
            <MDBModal
                size="md"
                className="cascading-modal"
                top
                isOpen={show}
                toggle={togglehandler}
            >
                <MDBModalHeader
                    tag="h6"
                    className="primary-color"
                    titleClass="font-weight-normal white-text"
                >
                    Dashboard Items
                </MDBModalHeader>
                <MDBModalBody className="text-center">
                    <MDBListGroup>
                        {appContext.dashboardItems.map((item) => {
                                return (
                                <MDBListGroupItem key={item.value} className='text-left px-0'>
                                    <MDBInput key={item.value} label={item.text} id={item.value} disabled={item.uncheckable} checked={item.checked} type="checkbox" onChange={CheckHandler} />
                                </MDBListGroupItem>
                            )
                        })}
                    </MDBListGroup>
                </MDBModalBody>
                <MDBModalFooter center>
                    <MDBBtn
                        className="primary-color mx-2"
                        color=''
                        onClick={togglehandler}
                    >
                        Done
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            <MDBRow className='d-flex w-100 justify-content-center'>
                <MDBBtn color='' className="primary-color font-weight-bold" onClick={togglehandler}><MDBIcon icon="plus" /> Add Item</MDBBtn>
            </MDBRow>
        </>
    )
}

export default DashboardItems