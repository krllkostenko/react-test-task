import React from "react";

interface errorMessageProps {
    errorMessage: Function
}

const ErrorMessage = (props: errorMessageProps) => {

    return (
        <div className={'error-message'}>
            {props.errorMessage()}
        </div>
    );
};

export default ErrorMessage;