import React from "react";
import {connect} from "react-redux";
import {actions} from "../../store/user";


class LoginFormContainer extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit() {
        const { signIn } = this.props

        // Here we will send login and password to the server and get token
        await signIn('test token');
    }

    render() {
        return this.props.children({
            onSubmit: this.onSubmit,
        })
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, actions)(LoginFormContainer);