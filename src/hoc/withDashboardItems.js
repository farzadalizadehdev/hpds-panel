import React, { useContext } from 'react'
import { AppContext } from '../context/app/app-context'

const withDashboardItems = (WrappedComponent) => {
    const WithDashboardItems = props => {
        const appContext = useContext(AppContext)
        return appContext.dashboardItems.map((item, index) => {
            if (item.value === props.name && item.checked) {
                return <WrappedComponent key={item.value} {...props} />
            } else {
                return null
            }
        })
    }
    return WithDashboardItems;
}

export default withDashboardItems;
