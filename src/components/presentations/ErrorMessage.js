import React from "react";

const ErrorMessage = (props) => {
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
        if (userData.name.length <= 4) {
            return (<p>Username must be longer than 4</p>);
        } else if (userData.email.match(/^[\w.+-]+@gmail\.com$/)) {
            console.log(userData.email)
            return (<p>Email must end with 'gmail.com'</p>);
        } else if (userData.password.length <= 6) {
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
        <div className={'error-message'}>
            {showErrorMessage()}
        </div>
    );
};

export default ErrorMessage;