import React from "react";

const ErrorMessage = (props:any) => {

    return (
        <div className={'error-message'}>
            {props.errorMessage()}
        </div>
    );
};

export default ErrorMessage;