import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.scss";
import Center from "./Center";
import EqualHeight from "./EqualHeight";
import HolyGrail from "./HolyGrail";
import NavLink from "react-router-dom/es/NavLink";

const App = () => (
    <Router>
        <div className="app">
            <ul>
                <li>
                    <NavLink activeClassName="is-active" to="/center">Center</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/equal-height">EqualHeight</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/holy-grail">HolyGrail</NavLink>
                </li>
            </ul>

            <Route exact path="/center" component={Center}/>
            <Route path="/equal-height" component={EqualHeight}/>
            <Route path="/holy-grail" component={HolyGrail}/>
        </div>
    </Router>
);
export default App;
