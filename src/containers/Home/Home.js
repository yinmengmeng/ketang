import React, { Component } from "react";
import "./index.less";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import actions from "@/store/actions/home";
@connect(
    state => ({ ...state.home }),
    actions
)
export default class Home extends Component {
    //选择当前哪门课程
    selectCurrentLesson = value => {
        //方法写到父组件上，这样就木偶组件只负责传值(HomeHeader)，容器组件(Home)写功能
        this.props.setCurrentLesson(value);
    };
    render() {
        return (
            <div>
                <HomeHeader selectCurrentLesson={this.selectCurrentLesson} />
            </div>
        );
    }
}
