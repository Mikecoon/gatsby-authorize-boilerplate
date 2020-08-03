import React from "react"
import NavBarComponent from "../nav-bar/navbar"
import { connect } from 'react-redux'
import { actions } from "../../store/user";
import { navigate } from 'gatsby'

class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            init: false,
        }

    }

    componentDidMount() {
        this.initApplication()
    }

    async initApplication() {
        const { signIn, navigate } = this.props

        const token = await localStorage.getItem('token')

        if (token) {

            // Mock request with token
            // Here we should obtain permissions, etc

            try {
                await new Promise(resolve => setTimeout(resolve, 2000))
                await signIn(token)
            } catch (e) {
                // If something went wrong, remove wrong token and redirect user to the login page
                localStorage.removeItem('token')
                navigate('/auth/login', { replace: true })
            }

        }

        this.setState({
            init: true,
        })

    }

    render() {

        const { children } = this.props
        const { init } = this.state

        return (
            <div>
                <NavBarComponent />

                {init && children}
                {!init && <p>Loading application...</p>}

            </div>
        );
    }

}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, actions)(Layout);
