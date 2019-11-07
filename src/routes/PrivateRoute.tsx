import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import store from '../state-management';

interface properties {
    component: React.ComponentClass<any>,
    redirect: any,
    auth: any,
    isLoggedIn: boolean,
    path:any,
}

const PrivateRouter = ({component: Component, ...rest}: properties) => {
    const isLoggedIn = store.getState().auth.isLoggedIn;
    return (
        <Route render={props => (
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: rest.redirect,
                        state: {from: props.location}
                    }}
                />
            ))
        }/>
    );
};


PrivateRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state: properties) => ({
    isLoggedIn: state.auth.isLoggedIn
});


export default withRouter(connect(mapStateToProps)<any>(PrivateRouter));