import React from 'react';
import './App.css';
import Header from './components/presentations/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './routes'


const App = () => {

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
