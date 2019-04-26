import * as Types from "../action-types";
import { getSliders, getLessons } from "@/api/home";
//getSliders返回结果是个promise
export default {
    setCurrentLesson(lesson) {
        return {
            type: Types.SET_CURRENT_LESSON,
            lesson
        };
    },
    getSlidersAPI() {
        //redux-thunk
        return function(dispatch, getState) {
            //如果payload参数是个promise，会使用redux-promise用法,可以将payload的promise执行，执行后将内容放到action.payload中进行派发{type:"SET_SLIDERS",payload:[...]}
            dispatch({ type: Types.SET_SLIDERS, payload: getSliders() });
        };
    },

    getLessonsAPI() {
        return function(dispatch, getState) {
            let {
                currentLesson,
                lesson: { hasMore, offset, limit }
            } = getState().home;
            //请求之前判断是否有更多
            if (!hasMore) return;
            //如果发送请求，需要派发一个更改loading的方法 发送请求之前，状态变成正在加载
            dispatch({ type: Types.CHANGE_LOADING_STATUS, status: true });
            //发送axios请求数据
            dispatch({
                type: Types.SET_LESSONS,
                payload: getLessons(offset, limit, currentLesson)
            });
        };
    }
};
