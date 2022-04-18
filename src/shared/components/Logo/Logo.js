import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Logo.css';

const logo = props => {
  return (
    <div className="logoWrapper">
      <img className="logo" src={Logo} style={props.style} alt="hpds" />
      {props.children}
    </div>
  );
};

export default logo;
