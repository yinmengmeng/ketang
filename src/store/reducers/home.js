import * as Types from "../action-types";
let initState = {
    currentLesson: "all"
};
let homeReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {
                ...state,
                currentLesson: action.lesson
            };
        default:
            return state;
    }
};
export default homeReducer;
