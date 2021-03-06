import React, { Component } from "react";
import logo from "@/common/images/logo.png";
import { Transition } from "react-transition-group";

//配置Transition参数
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: "none"
};
const transitionStyles = {
    entered: { opacity: 1 },
    exited: {
        opacity: 0
    }
};

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
    changeType = e => {
        this.props.selectCurrentLesson(e.target.dataset.type);
        this.handleChangeShow();
    };
    render() {
        let menuShow = this.state.menuShow;
        let menuList = (
            <Transition
                in={menuShow}
                timeout={duration}
                onEnter={node => {
                    node.style.display = "block";
                }}
                onExited={node => {
                    node.style.display = "none";
                }}>
                {state => (
                    <div
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                        <ul className="header-menu" onClick={this.changeType}>
                            <li data-type="all">全部课程</li>
                            <li data-type="react">React课程</li>
                            <li data-type="vue">Vue课程</li>
                        </ul>
                    </div>
                )}
            </Transition>
        );
        return (
            <div className="home-header">
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                    <div onClick={this.handleChangeShow}>
                        {menuShow ? (
                            <i className="iconfont icon-shanchu1" />
                        ) : (
                            <i className="iconfont icon-liebiao" />
                        )}
                    </div>
                </div>
                {menuList}
            </div>
        );
    }
}
