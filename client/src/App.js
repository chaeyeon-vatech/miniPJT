import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Main from "./pages/Main";
import Test from "./pages/Test";
import Board from "./pages/Board";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/test" component={Test}/>
                    <Route exact path="/board" component={Board}/>
                </div>
            </Router>
        );
    }
}

export default App;
