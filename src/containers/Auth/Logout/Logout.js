import React, { Component } from 'react'
import { Redirect } from 'react-router'
import * as actions from '../../../store/store'
import { connect } from 'react-redux'
class Logout extends Component {
    componentDidMount() {
        this.props.onLogout()
    }
    render() {
        return <Redirect to="/" />
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);