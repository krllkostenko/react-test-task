import React from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import SignIn from "../pages/SignUp";
import PrivateRouter from './PrivateRoute';
import {Login, SignUp, Profile} from "../pages";
import App from '../App';

const checkIfLoggedIn = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') || '{}');
    if (isLoggedIn === null) {
        localStorage.setItem('isLoggedIn', 'false');
    }
    if (isLoggedIn === true) {
        return Profile;
    } else {
        return SignIn;
    }
};

export default () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/" component={checkIfLoggedIn()}/>
                <PrivateRouter path="/profile" component={Profile} redirect="/login"/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </App>
    </Router>
);