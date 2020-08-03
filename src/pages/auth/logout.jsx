import React from "react";
import { connect } from 'react-redux'
import { actions } from "../../store/user";
import { navigate } from 'gatsby'

const LogoutPage = ({ signOut }) => {
    signOut();
    navigate('/')

    return <p>Logging out...</p>
}

export default connect(null, actions)(LogoutPage)
