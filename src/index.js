import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import App from "./containers/App";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import Lesson from "./containers/Lesson/Lesson";
import "./common/reset.less";
import store from "./store";
import { Provider } from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/lesson" component={Lesson} />
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.querySelector("#root")
);
