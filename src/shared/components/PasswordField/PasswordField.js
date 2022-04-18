import React from 'react'
import { MDBInput } from 'mdbreact'
import './PasswordField.css'

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <div className="passwordFieldContainer">
      <MDBInput className="passwordField" type={showPassword ? 'text' : 'password'} {...props} />
      <i
        onClick={() => setShowPassword(!showPassword)}
        className={`togglePassword far fa-eye${showPassword ? '' : '-slash'} ${props.iconClass}`}
        style={props.RepeatPass? {top:'152px',right:'42px'}:{}}
      ></i>
    </div>
  )
}

export default PasswordField
