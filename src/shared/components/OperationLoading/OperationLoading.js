import React from 'react';
import ProcessAnimation from '../../../shared/assets/images/loading.gif'
import './OperationLoading.css'
import {MDBAnimation} from 'mdbreact'

const OperationLoading = props => {
  return (
      <MDBAnimation hidden={!props.hide} className="OperationLoading" type="fadeInDown" duration="500ms">
        <img className="OperationAnimation" src={ProcessAnimation} alt="loading" />
        <span className='blue-grey-text font-italic ml-1 font-weight-normal'>Operation in progress...</span>
      </MDBAnimation>
  );
};

export default OperationLoading;
