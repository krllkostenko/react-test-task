import React from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import {Login, SignUp, Profile} from "../pages";
import App from '../App';
import PrivateRouter from './PrivateRoute';


export default () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <PrivateRouter path="/" component={Profile} redirect="/login"/>
            </Switch>
        </App>
    </Router>
);