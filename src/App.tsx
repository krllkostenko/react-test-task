import React, { Props } from 'react';
import {Header} from './components';
import './App.css';



const App = (props:Props<any>) => {
    return (
        <div className="App">
            <Header />
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

export default App;
