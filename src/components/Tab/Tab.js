import "./index.less";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Tab extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink exact to="/">
                    <i className="iconfont icon-xiazai45" />
                    <span>首页</span>
                </NavLink>
                <NavLink to="/lesson">
                    <i className="iconfont icon-react" />
                    <span>课程</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-user" />
                    <span>个人中心</span>
                </NavLink>
            </div>
        );
    }
}
