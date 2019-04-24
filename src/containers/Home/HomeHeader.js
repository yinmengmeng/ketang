import React, { Component } from "react";
import logo from "@/common/images/logo.png";
export default class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {
            menuShow: false
        };
    }
    handleChangeShow = () => {
        this.setState({
            menuShow: !this.state.menuShow
        });
    };
    render() {
        return (
            <div className="home-header">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                    <div onClick={this.handleChangeShow}>
                        {this.state.menuShow ? (
                            <i className="iconfont icon-shanchu1" />
                        ) : (
                            <i className="iconfont icon-liebiao" />
                        )}
                    </div>
                    <ul className="header-menu">
                        <li>全部课程</li>
                        <li>React课程</li>
                        <li>Vue课程</li>
                    </ul>
                </div>
            </div>
        );
    }
}
