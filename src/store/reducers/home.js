import * as Types from "../action-types";
let initState = {
    currentLesson: "all",
    sliders: [],
    lesson: {
        list: [], //课程所有数据
        hasMore: true, //默认有更多
        offset: 0,
        limit: 5,
        isLoading: false //是否正在加载 默认没有正在加载
    }
};
let homeReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {
                ...state,
                currentLesson: action.lesson
            };
        case Types.SET_SLIDERS:
            return {
                ...state,
                sliders: action.payload
            };
        case Types.CHANGE_LOADING_STATUS:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    isLoading: action.status
                }
            };
        case Types.SET_LESSONS:
            return {
                ...state,
                lesson: {
                    ...state.lesson, //保存原有的 如limit不变
                    hasMore: action.payload.hasMore, //后台返回是否还有更多
                    list: [...state.lesson.list, ...action.payload.list],
                    offset: state.lesson.offset + action.payload.list.length, //原有的偏移量加最新返回的数据长度
                    isLoading: false //请求成功 状态变为加载完毕
                }
            };
        default:
            return state;
    }
};
export default homeReducer;
