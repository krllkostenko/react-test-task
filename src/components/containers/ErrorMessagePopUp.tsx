import React, {Component} from 'react';
import {ErrorMessage} from "../../components";

class ErrorMessagePopUp extends Component<{error:any},{ errorMessage: Function }> {
    showErrorMessage = () => {
        if (this.props.error.type === 'SignUp') {
            return this.handleSignUpErrors();
        }
        if (this.props.error.type === 'Login') {
            return this.handleLoginErrors();
        }
    };

    handleSignUpErrors = () => {
        const userData = this.props.error.data;
        if (userData.name.length < 4) {
            return (<p>Username must be longer than 4</p>);
        }
        if (!userData.email.match(/^[\w.+-]+@gmail\.com$/)) {
            return (<p>Email must end with 'gmail.com'</p>);
        }
        if (userData.password.length < 6) {
            return (<p>Password must be longer than 6 </p>);
        }
    };

    handleLoginErrors = () => {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (this.props.error.data.email !== userData.email) {
            return (<p>Invalid Email!</p>);
        }
        if (this.props.error.data.password !== userData.password) {
            return <p>Invalid Password!</p>
        }
    };

    render() {
        return (
            <ErrorMessage errorMessage={this.showErrorMessage}/>
        );
    }
};
export default ErrorMessagePopUp;