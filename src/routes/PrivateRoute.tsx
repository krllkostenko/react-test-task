import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
interface properties{
    component:React.ComponentClass<any>,
    redirect: any,
    auth:any
}

const PrivateRoute = ({component:Component, redirect}:properties) => (
    <Route render={props => (
        redirect.isLoggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: redirect,
                    state: {from: props.location}
                }}
            />
        ))
    }/>
);


PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state: properties) => ({
    isLoggedIn: state.auth.isLoggedIn
});


export default withRouter(connect(mapStateToProps)<any>(PrivateRoute));