import React from "react";
import LoginFormContainer from "../../containers/auth/login-form";
import LoginFormComponent from "../../components/auth/login-form/login-form";

const LoginPage = () =>
    <div>
        <LoginFormContainer>
            {props => <LoginFormComponent {...props}/>}
        </LoginFormContainer>
    </div>

export default LoginPage;
