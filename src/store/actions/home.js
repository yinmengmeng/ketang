import * as Types from "../action-types";
import { getSliders } from "@/api/home";
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
    }
};
