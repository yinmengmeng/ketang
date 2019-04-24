import React, { Component } from "react";
import "./index.less";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import actions from "@/store/actions/home";

//装饰器"@" 见阮一峰Decorator部分 装饰类的，不能装饰函数，因为函数会变量提升 say装饰的A，相当于把A传到say里执行

/* @say()
class A {}
function say(target) {
    target.say = "hello";
}
console.log(A.say)//"hello" */

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
    componentDidMount() {
        this.props.getSlidersAPI();
    }
    render() {
        return (
            <div>
                <HomeHeader selectCurrentLesson={this.selectCurrentLesson} />
            </div>
        );
    }
}
