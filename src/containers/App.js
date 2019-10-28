import React from 'react';
import './App.css';
import Header from '../components/Header';
import SignIn from '../components/SignIn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from "../components/LogIn";
import Profile from '../containers/Profile'

const App = () => {

    const checkIfLoggedIn = () => {
        const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
        if (isLoggedIn === null) {
            localStorage.setItem('isLoggedIn', false);
        }
        if (isLoggedIn === true) {
            return Profile;
        } else {
            return SignIn;
        }
    };
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="content">
                    <Switch>
                        <Route path={'/'} exact component={checkIfLoggedIn()}/>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/signup'} component={SignIn}/>
                        <Route path={'/login'} component={LogIn}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
