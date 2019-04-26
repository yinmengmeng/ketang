import React, { Component } from "react";
import ReactSwipe from "react-swipe";
export default class HomeSlider extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
    }
    componentWillUpdate() {
        // console.log("object");
    }
    render() {
        let { lists } = this.props;
        let swipeOptions = {
            continuous: true,
            auto: 2000,
            callback: index => {
                this.setState({ index }); //每次动画结束后，将索引映射到当前的组件的状态上
            }
        };

        //continuous无缝连播
        //swipe-js-iso包swipe.js里的222行：delay = 0;导致touch事件会让自动轮播停止
        //这应该是 delay = options.auto || 0;
        return (
            <div className="home-swiper">
                {this.index}
                <ReactSwipe
                    className="carousel"
                    swipeOptions={swipeOptions}
                    ref={el => (this.reactSwipeEl = el)}>
                    {lists.map((item, index) => (
                        <div key={index}>
                            <a href={item.url}>
                                <img src={item.photoUrl} alt="" />
                            </a>
                        </div>
                    ))}
                </ReactSwipe>
                <div className="dots">
                    {lists.map((item, index) => (
                        <span
                            key={index}
                            className={
                                this.state.index == index ? "active" : ""
                            }
                        />
                    ))}
                </div>
            </div>
        );
    }
}
