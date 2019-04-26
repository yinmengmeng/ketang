import React, { Component } from "react";
import "./index.less";
export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="spinner">
                    <div className="spinner-container container1">
                        <div className="circle1" />
                        <div className="circle2" />
                        <div className="circle3" />
                        <div className="circle4" />
                    </div>
                    <div className="spinner-container container2">
                        <div className="circle1" />
                        <div className="circle2" />
                        <div className="circle3" />
                        <div className="circle4" />
                    </div>
                    <div className="spinner-container container3">
                        <div className="circle1" />
                        <div className="circle2" />
                        <div className="circle3" />
                        <div className="circle4" />
                    </div>
                </div>
            </div>
        );
    }
}
