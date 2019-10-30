import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Login, SignUp, Profile} from "../pages";
import PrivateRouter from './PrivateRoute';
import SignIn from "../pages/SignUp";

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
    <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/" component={checkIfLoggedIn()}/>
        <PrivateRouter exact path="/profile" component={Profile} redirect="/"/>
        <Route exact path="/signup" component={SignUp}/>
    </Switch>
);