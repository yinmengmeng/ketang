import React, { Component } from "react";
import "./index.less";
import HomeHeader from "./HomeHeader";
import { connect } from "react-redux";
import actions from "@/store/actions/home";
import HomeSlider from "./HomeSlider";
import Loading from "@/components/Loading/Loading";

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
        if (this.props.sliders.length === 0) {
            //优化，防止每次切页面的时候都会重新请求数据
            this.props.getSlidersAPI();
        }
    }
    render() {
        let { sliders } = this.props;
        return (
            <div>
                <HomeHeader selectCurrentLesson={this.selectCurrentLesson} />
                <div className="content">
                    {sliders.length ? (
                        <HomeSlider lists={sliders} />
                    ) : (
                        <Loading />
                    )}
                    {/* 如果不加这个判断，sliders初始值是[]，会在行间属性上加个with：0，导致后面sliders即使有数据也不会再加载出来 */}
                </div>
            </div>
        );
    }
}
