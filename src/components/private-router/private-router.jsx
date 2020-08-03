import React from "react"
import { navigate } from "gatsby"
import { connect } from 'react-redux'
const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
    if (!user.isAuthorized && location.pathname !== `/auth/login`) {
        navigate("/auth/login")
        return null
    }
    return <Component {...rest} />
}

const mapStateToProps = store => ({
    user: store.user,
})

export default connect(mapStateToProps)(PrivateRoute)
