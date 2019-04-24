import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import App from "./containers/App";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import Lesson from "./containers/Lesson/Lesson";
import "./common/reset.less";
ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/lesson" component={Lesson} />
            </Switch>
        </App>
    </Router>,
    document.querySelector("#root")
);
