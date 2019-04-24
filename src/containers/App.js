import React, { Component } from "react";
import Tab from "../components/Tab/Tab";

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Tab />
            </div>
        );
    }
}
