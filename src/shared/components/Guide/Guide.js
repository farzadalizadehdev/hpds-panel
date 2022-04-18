import React from 'react'
import withUserGuide from '../../../hoc/withUserGuide.js';
import {
    MDBCol,
    MDBIcon,
} from "mdbreact";

const Guide = props => {
    return (
        <div className={`${props.className} text-left m-0 user-guide`}>
            <small className="text-grey d-block mb-2">you can disable user Guide in setting</small>
            <MDBIcon far icon="lightbulb" className="blue-text mr-2" size="lg" />
            {props.title ? props.title : false}
            <MDBCol className='mt-2'>
                {props.children}
            </MDBCol>
        </div>
    )
}

export default withUserGuide(Guide);
