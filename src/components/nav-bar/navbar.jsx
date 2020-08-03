import React from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux'

const NavBar = ({ user }) => {
    return (
        <div>
            <span>
                <Link to={"/"}>Index page</Link>

                {user.isAuthorized && <p>You are logged in </p>}
                {!user.isAuthorized && <p>You are <b>not</b> logged in </p>}
            </span>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps)(NavBar)