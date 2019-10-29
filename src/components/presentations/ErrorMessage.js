import React from "react";

const ErrorMessage = (props) => {
    const showErrorMessage = () => {
        console.log('email ' + props.userData.email);
        if (props.userData.name.length <= 4) {
            return (<p>Username must be longer than 4</p>);
        } else if (!props.userData.email.match(/^[\w.+-]+@gmail\.com$/)) {
            return (<p>Email must end with 'gmail.com'</p>);
        } else if (props.userData.password.length <= 6) {
            return (<p>Password must be longer than 6 </p>);
        }
    };
    return (
        <div className={'error-message'}>
            {showErrorMessage()}
        </div>
    );
};

export default ErrorMessage;