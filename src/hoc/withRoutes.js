import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const withRoute = (WrappedComponent) => {
    const WithRoute = ({ isAuth, ...rest }) => {
        return (
            <Route {...rest} render={
                props => {
                    if (isAuth) {
                        return <WrappedComponent {...rest} {...props} />
                    } else {
                        return <Redirect to={
                            {
                                pathname: '/',
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            } />
        )
    }
    return WithRoute
}
export default withRoute;
