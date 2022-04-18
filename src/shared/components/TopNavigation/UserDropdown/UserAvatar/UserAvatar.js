import React from 'react'

const UserAvatar = props => {
    return (
        <>
            <div className="primary-text font-weight-bold mt-4 avatar-placeholder size-lg white">
                {props.username && props.username.split("")[0].toUpperCase()}
                {props.username && props.username.split("")[1]}
            </div>
            <h5 className="white-text mt-3 font-weight-bold">Hi, {props.username && props.username.toUpperCase()}</h5>
        </>
    )
}
export default UserAvatar