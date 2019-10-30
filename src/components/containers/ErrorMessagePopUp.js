import React from 'react';
import ErrorMessage from "../presentations/ErrorMessage";

const ErrorMessagePopUp = (props) => {
    const showErrorMessage = () => {
        if (props.error.type === 'SignUp') {
            return handleSignUpErrors();
        }
        if (props.error.type === 'Login') {
            return handleLoginErrors();
        }

    };
    const handleSignUpErrors = () => {
        const userData = props.error.data;
        console.log(userData);
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

    const handleLoginErrors = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (props.error.data.email !== userData.email) {
            return (<p>Invalid Email!</p>);
        }
        if (props.error.data.password !== userData.password) {
            return <p>Invalid Password!</p>
        }
    };
    return (
        <ErrorMessage errorMessage={showErrorMessage}/>
    );
};
export default ErrorMessagePopUp;