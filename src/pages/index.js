import React from "react"
import {Link} from 'gatsby'
import { connect } from 'react-redux'
import { actions } from "../store/user";

class IndexPage extends React.Component {

    render() {

        const { user } = this.props

        return <>
            <h1>Hello!</h1>

            {user.isAuthorized && <Link to={'/auth/logout'}>Logout!</Link>}
            {!user.isAuthorized && <Link to={'/auth/login'}>Login!</Link>}

            {user.isAuthorized && <p>
                Since you're authorized, you can head to <Link to={'app/news/list'}>News list!</Link>
            </p>}

        </>
    }

}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, actions)(IndexPage);
