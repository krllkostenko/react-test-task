import React from 'react';
import './App.css';
import Header from './components/presentations/Header';
import SignIn from './pages/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from "./pages/Login";
import Profile from './pages/Profile'
import AppRouter from './routes'


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
                    <AppRouter/>
                </div>
            </div>
        </Router>
    );
};

export default App;
